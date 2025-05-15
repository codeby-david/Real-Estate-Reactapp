import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Footer = () => {
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

  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 pb-20 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
        className='container mx-auto flex flex-col md:flex-row justify-between items-start gap-8'
      >
        {/* Logo and Description Column */}
        <motion.div
          variants={itemVariants}
          className='w-full md:w-1/3 mb-8 md:mb-0'
        >
          <img src={assets.logo_dark} alt='Company Logo' className='w-40' />
          <p className='text-gray-200 mt-4 text-sm leading-6'>
            At our company, we are committed to helping you find the perfect property or sell your home with ease. Whether youre buying, selling, or investing, our experienced team is here to guide you every step of the way. Explore our listings, discover expert advice, and let us turn your real estate dreams into reality.
          </p>
        </motion.div>

        {/* Quick Links Column */}
        <motion.div
          variants={itemVariants}
          className='w-full md:w-1/5 mb-8 md:mb-0'
        >
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-3 text-gray-200'>
            <a href='#Header' className='hover:text-white transition duration-300'>
              Home
            </a>
            <a href='#About' className='hover:text-white transition duration-300'>
              About Us
            </a>
            <a href='#Contact' className='hover:text-white transition duration-300'>
              Contact Us
            </a>
            <a href='#Header' className='hover:text-white transition duration-300'>
              Privacy Policy
            </a>
          </ul>
        </motion.div>

        {/* Newsletter Column */}
        <motion.div
          variants={itemVariants}
          className='w-full md:w-1/3'
        >
          <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
          <p className='text-gray-200 mb-6 text-sm max-w-80'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className='flex flex-col md:flex-row gap-3'>
            <input
              type='email'
              placeholder='Enter your email'
              className='p-3 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none w-full md:w-60'
            />
            <button className='py-3 px-6 rounded bg-blue-500 text-white hover:bg-blue-600 transition duration-300'>
              Subscribe
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Copyright Section */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        variants={itemVariants}
        className='border-t border-gray-700 py-6 mt-10 text-center text-gray-200 text-sm'
      >
        Copyright © 2025 Developed By David with love. All rights reserved.
      </motion.div>
    </div>
  );
};

export default Footer;