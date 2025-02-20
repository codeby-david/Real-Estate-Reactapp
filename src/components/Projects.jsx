{/*import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'

const Projects = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow]=useState(1);

   useEffect(()=>{
const updateCardsToShow =()=>{
if(window.innerWidth >= 1024){
  setCardsToShow(projectsData.length);
}
else{
  setCardsToShow(1)
}
};
updateCardsToShow();
window.addEventListener('resize', updateCardsToShow);
return()=>{
  window.removeEventListener('resize', updateCardsToShow);
}

   },[])
const nextProject =() => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
}
const previousProject =()=>{
  setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
}

  return (
    <div className='container mx-auto py-4 pt-20 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects  
        <span className='underline underline-offset-4 decoration-1 under font-light'> Completed</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces , Building Legecies-Explore Our Portfolio</p>
      
      <div className='flex justify-end items-center mb-8'>
        <button onClick={previousProject }
         className='p-3 bg-gray-200 rounded mr-2 ' aria-label='Previous Project'>
          <img src={assets.left_arrow} alt="Previous" />
        </button>
         <button onClick={nextProject}
         className='p-3 bg-gray-200 rounded mr-2 ' aria-label='Next Project'>
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
      
      <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out'
            style={{transform:`translatex(-${(currentIndex * 100)/ cardsToShow}%)`}}
            >

          {projectsData.map((project, index) =>(
            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
              <img src={project.image} alt={project.title}className='w-full h=auto mb-14' />
              <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                <h2 className='text-xl font-semibold text-gray-800'>
                  {project.title}
                  </h2>
                  <p className='text-gray-700 text-sm'>
                    {project.price} <span className='px-1'>|</span> {project.location}
                  </p>

                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
*/}
import React, { useEffect, useState } from 'react';
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

  return (
    <div className='container mx-auto py-20 px-4 sm:px-8 lg:px-16 my-20 w-full overflow-hidden' id='Projects'>
      <h1 className='text-3xl sm:text-5xl font-bold mb-4 text-center text-gray-800'>
        Projects
        <span className='underline underline-offset-8 decoration-2 decoration-red-500 font-light'> Completed</span>
      </h1>
      <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg'>
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>

      {/* Slider Buttons */}
      <div className='flex justify-end items-center mb-8'>
        <button
          onClick={previousProject}
          className='p-3 bg-gray-200 rounded-full mr-2 hover:bg-gray-300 transition-all duration-300'
          aria-label='Previous Project'
        >
          <img src={assets.left_arrow} alt='Previous' className='w-5 h-5' />
        </button>
        <button
          onClick={nextProject}
          className='p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition-all duration-300'
          aria-label='Next Project'
        >
          <img src={assets.right_arrow} alt='Next' className='w-5 h-5' />
        </button>
      </div>

      {/* Project Slider Container */}
      <div className='overflow-hidden'>
        <div
          className='flex gap-8 transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className='relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 transform transition-all duration-300 hover:scale-105'
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-96 object-cover rounded-lg shadow-lg mb-4' // Increased height to h-96
              />
              <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                <div className='inline-block bg-white w-5/6 px-6 py-4 shadow-lg rounded-lg text-center'>
                  <h2 className='text-xl font-semibold text-gray-800 mb-2'>{project.title}</h2>
                  <p className='text-gray-700 text-sm'>
                    {project.price} <span className='px-1'>|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;