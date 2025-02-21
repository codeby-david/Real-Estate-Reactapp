import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const About = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className='container mx-auto py-20 px-4 sm:px-8 lg:px-16 w-full overflow-hidden' id='About'>
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
          className='text-3xl sm:text-5xl font-bold text-gray-800 mb-4'
        >
          About <span className='underline underline-offset-8 decoration-2 decoration-red-500 font-light'>Our Brand</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className='text-gray-600 text-lg max-w-2xl mx-auto'
        >
          Passionate About Properties, Devoted to Your Vision
        </motion.p>
      </motion.div>

      {/* Content Section */}
      <div className='flex flex-col lg:flex-row items-center gap-12 xl:gap-20'>
        {/* Image Section */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={imageVariants}
          className='w-full lg:w-1/2 relative group'
        >
          <img
            src={assets.brand_img}
            alt='Our Brand'
            className='w-full h-[500px] object-cover rounded-xl shadow-xl transform transition-all duration-500 group-hover:scale-102'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent rounded-xl' />
        </motion.div>

        {/* Stats and Description Section */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className='w-full lg:w-1/2'
        >
          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className='grid grid-cols-2 gap-8 mb-12'
          >
            {[
              { number: '10+', label: 'Years of Excellence' },
              { number: '12+', label: 'Projects Completed' },
              { number: '20+', label: 'Mn. Sq. Ft. Delivered' },
              { number: '30+', label: 'Ongoing Projects' },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all'
              >
                <p className='text-4xl font-bold text-red-500 mb-2'>{item.number}</p>
                <p className='text-gray-700'>{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className='text-gray-600 text-lg leading-relaxed mb-8 border-l-4 border-red-500 pl-6'
          >
            From the very first meeting, we prioritize understanding your vision and transforming it
            into reality. Our commitment to detail and client satisfaction has established us as
            leaders in property development and management.
          </motion.p>

          {/* Learn More Button */}
          <motion.button
            variants={itemVariants}
            className='bg-red-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-600 transition-all transform hover:-translate-y-1'
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;