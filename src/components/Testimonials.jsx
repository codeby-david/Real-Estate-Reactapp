import React from 'react';
import { motion } from 'framer-motion';
import { assets, testimonialsData } from '../assets/assets';

const Testimonials = () => {
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
    <div className='container mx-auto py-20 sm:px-5 lg:px-2 w-full overflow-hidden' id='Testimonials'>
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
          Customer
          <span className='underline underline-offset-8 decoration-2 decoration-red-500 font-light'> Testimonials</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className='text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg'
        >
          Real Stories from Those Who Found Home with Us
        </motion.p>
      </motion.div>

      {/* Testimonial Cards */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
        className='flex flex-wrap justify-center gap-8'
      >
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className='max-w-[360px] border border-gray-200 shadow-xl rounded-lg px-8 py-10 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'
          >
            <img
              className='w-24 h-24 rounded-full mx-auto mb-6 border-4 border-red-100'
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className='text-2xl text-gray-800 font-semibold mb-2'>{testimonial.name}</h2>
            <p className='text-gray-600 mb-4 text-sm uppercase tracking-widest'>{testimonial.title}</p>
            <div className='flex justify-center gap-1 text-red-500 mb-6'>
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img key={index} src={assets.star_icon} alt='star' className='w-5 h-5' />
              ))}
            </div>
            <p className='text-gray-700 leading-relaxed'>{testimonial.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;