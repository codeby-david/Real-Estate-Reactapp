import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { assets, projectsData } from '../assets/assets';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3); // Show 3 cards on large screens
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2); // Show 2 cards on medium screens
      } else {
        setCardsToShow(1); // Show 1 card on small screens
      }
    };
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => {
      window.removeEventListener('resize', updateCardsToShow);
    };
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (projectsData.length - cardsToShow + 1));
  };

  const previousProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - cardsToShow : prevIndex - 1
    );
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
    <div className='container mx-auto py-20 px-4 sm:px-8 lg:px-16 my-20 w-full overflow-hidden' id='Projects'>
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
          Projects
          <span className='underline underline-offset-8 decoration-2 decoration-red-500 font-light'> Completed</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className='text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg'
        >
          Crafting Spaces, Building Legacies—Explore Our Portfolio
        </motion.p>
      </motion.div>

      {/* Slider Buttons */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
        className='flex justify-end items-center mb-8'
      >
        <motion.button
          variants={buttonVariants}
          onClick={previousProject}
          className='p-3 bg-gray-200 rounded-full mr-2 hover:bg-gray-300 transition-all duration-300'
          aria-label='Previous Project'
        >
          <img src={assets.left_arrow} alt='Previous' className='w-5 h-5' />
        </motion.button>
        <motion.button
          variants={buttonVariants}
          onClick={nextProject}
          className='p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-all duration-300'
          aria-label='Next Project'
        >
          <img src={assets.right_arrow} alt='Next' className='w-5 h-5' />
        </motion.button>
      </motion.div>

      {/* Project Slider Container */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
        className='overflow-hidden'
      >
        <div
          className='flex gap-8 transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 transform transition-all duration-300 hover:scale-105'
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-96 object-cover rounded-lg shadow-lg mb-4'
              />
              <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                <div className='inline-block bg-white w-5/6 px-6 py-4 shadow-lg rounded-lg text-center'>
                  <h2 className='text-xl font-semibold text-gray-800 mb-2'>{project.title}</h2>
                  <p className='text-gray-700 text-sm'>
                    {project.price} <span className='px-1'>|</span> {project.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;