{/*import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties to Your Vision</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.brand_img} alt=""className='w-full sm:w-1/2 max-w-lg' />
           <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl pr-28'>
              <div>
                <p className='text-4xl font-medium text-gray-800'>10+</p>
                <p>Years of Excellence</p>
              </div>
               <div>
                <p className='text-4xl font-medium text-gray-800'>12+</p>
                <p>Projects Completed</p>
              </div>
               <div>
                <p className='text-4xl font-medium text-gray-800'>20+</p>
                <p>Mn. Sq. Ft. Delivered.</p>
              </div>
               <div>
                <p className='text-4xl font-medium text-gray-800'>30+</p>
                <p>Ongoing Projects</p>
              </div>

            </div>
            <p className='my-10 max-w-lg'>
              From the very first meeting, they understood my vision and 
              helped me find the perfect property. Their attention 
              to detail and commitment to client satisfaction is unmatched.
             
            </p>
             <button className='bg-blue-600 text-white px-8 py-2 rounded hover:bg-black cursor-pointer'>Learn more</button>

           </div>
      </div>
      
      
    </div>
  )
}

export default About


*/}
import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className='container mx-auto py-20 px-4 sm:px-8 lg:px-16 w-full overflow-hidden' id='About'>
      {/* Heading Section */}
      <div className='text-center mb-16'>
        <h1 className='text-3xl sm:text-5xl font-bold text-gray-800 mb-4'>
          About <span className='underline underline-offset-8 decoration-2 decoration-red-500 font-light'>Our Brand</span>
        </h1>
        <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
          Passionate About Properties, Devoted to Your Vision
        </p>
      </div>

      {/* Content Section */}
      <div className='flex flex-col lg:flex-row items-center gap-12 xl:gap-20'>
        {/* Image Section */}
        <div className='w-full lg:w-1/2 relative group'>
          <img 
            src={assets.brand_img} 
            alt='Our Brand' 
            className='w-full h-[500px] object-cover rounded-xl shadow-xl transform transition-all duration-500 group-hover:scale-102'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent rounded-xl' />
        </div>

        {/* Stats and Description Section */}
        <div className='w-full lg:w-1/2'>
          {/* Stats Grid */}
          <div className='grid grid-cols-2 gap-8 mb-12'>
            {[
              { number: '10+', label: 'Years of Excellence' },
              { number: '12+', label: 'Projects Completed' },
              { number: '20+', label: 'Mn. Sq. Ft. Delivered' },
              { number: '30+', label: 'Ongoing Projects' },
            ].map((item, index) => (
              <div key={index} className='p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all'>
                <p className='text-4xl font-bold text-red-500 mb-2'>{item.number}</p>
                <p className='text-gray-700'>{item.label}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className='text-gray-600 text-lg leading-relaxed mb-8 border-l-4 border-red-500 pl-6'>
            From the very first meeting, we prioritize understanding your vision and transforming it 
            into reality. Our commitment to detail and client satisfaction has established us as 
            leaders in property development and management.
          </p>

          {/* Learn More Button */}
          <button className='bg-red-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-600 transition-all transform hover:-translate-y-1'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;