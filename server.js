import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import dotenv from 'dotenv';


//const frontEndUrl= import.meta.env.FRONTEND_URL;
const mongoUri = import.meta.MONGO_URI;
const port = import.meta.PORT;
const saltRound = import.meta.SALT_ROUNDS;
const jwtSecret = import.meta.JWT_SECRET;
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// MongoDB Connection
mongoose.connect(mongoUri|| 'mongodb://localhost:27017/your-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// User Model
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

// Routes
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }
    
    const saltRounds = parseInt(saltRound) || 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    try {
      const user = await User.create({ name, email, password: hashedPassword });
      const token = jwt.sign(
        { id: user._id, email: user.email },
        jwtSecret || 'your-secret-key',
        { expiresIn: '7d' }
      );
      
      res.status(201).json({ 
        token, 
        user: { 
          id: user._id, 
          name: user.name, 
          email: user.email 
        } 
      });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({ message: 'Email already in use' });
      }
      throw error;
    }
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Server error during signup' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign(
      { id: user._id, email: user.email },
      jwtSecret || 'your-secret-key',
      { expiresIn: '7d' }
    );
    
    res.json({ 
      token, 
      user: { 
        id: user._id, 
        name: user.name, 
        email: user.email 
      } 
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// Fallback Error Handler
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start Server
const PORT = port  || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});