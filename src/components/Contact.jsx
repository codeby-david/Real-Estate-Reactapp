import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

const Contact = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    // Use the environment variable for the access key
    formData.append('access_key', import.meta.env.VITE_WEB3_API_KEY);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
    if(fetch.success){
      return response;

    }else{
      console.log("Connect to internet");
    }

    const data = await response.json();

    if (data.success) {
      setResult('');
      toast.success('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      toast.error(data.message);
      setResult('');
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden bg-gray-50' id='Contact'>
      {/* Heading Section */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
        className='text-center mb-16'
      >
        <motion.h1
          variants={itemVariants}
          className='text-3xl sm:text-5xl font-bold mb-4 text-gray-800'
        >
          Contact
          <span className='underline underline-offset-8 decoration-2 decoration-red-500 font-light'> With Us</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className='text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg'
        >
          Real Stories from Those Who Found Home with Us
        </motion.p>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
        onSubmit={onSubmit}
        className='max-w-2xl mx-auto text-gray-600 pt-8 bg-white p-8 rounded-lg shadow-lg'
      >
        {/* Name and Email Fields */}
        <motion.div
          variants={containerVariants}
          className='flex flex-wrap gap-6'
        >
          {/* Name Input */}
          <motion.div
            variants={itemVariants}
            className='w-full md:w-[48%] text-left'
          >
            <label className='block text-sm font-medium text-gray-700 mb-1'>Your Name</label>
            <input
              className='w-full border border-gray-300 rounded-lg py-3 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
              type='text'
              name='Name'
              placeholder='Enter Your Name'
              required
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            variants={itemVariants}
            className='w-full md:w-[48%] text-left'
          >
            <label className='block text-sm font-medium text-gray-700 mb-1'>Your Email</label>
            <input
              className='w-full border border-gray-300 rounded-lg py-3 px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
              type='email'
              name='Email'
              placeholder='Enter Your Email'
              required
            />
          </motion.div>
        </motion.div>

        {/* Message Textarea */}
        <motion.div
          variants={itemVariants}
          className='my-6 text-left'
        >
          <label className='block text-sm font-medium text-gray-700 mb-1'>Message</label>
          <textarea
            className='w-full border border-gray-300 rounded-lg py-3 px-4 mt-1 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
            name='Message'
            placeholder='Your Message'
            required
          ></textarea>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          variants={buttonVariants}
          className='bg-blue-600 text-white py-3 px-12 rounded-lg hover:bg-blue-700 transition duration-300'
          type='submit'
        >
          {result ? result : 'Send Message'}
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;