import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
// import Dashboard from './components/Dashboard';
// import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <div className='min-h-screen bg-amber-50 w-full overflow-hidden'>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <About />
              <Projects />
              <Testimonials />
              <Contact />
            </>
          } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Header />} />


        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;