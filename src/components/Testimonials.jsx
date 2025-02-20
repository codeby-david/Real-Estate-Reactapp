{/*import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='container mx-auto py-10 sm:px-5 lg:px-2 w-full overflow-hidden' id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Customer
         <span className='underline underline-offset-4 decoration-1 under font-light'> Testimonials</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories from Those who found Home with Us</p>

        <div className='flex flex-wrap justify-center gap-3'>
          {testimonialsData.map((testimonial, index)=>(
            <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
              <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
              <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
              <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
              <div className='flex justify-center gap-1 text-red-500 mb-4'>
                {Array.from({length: testimonial.rating},(item, index)=>(
                <img key={index} src={assets.star_icon} alt="" />
                ))}
              </div>
              <p className='text-gray-600'>{testimonial.text}</p>
          </div>
          ))}
      </div>
    </div>
  )
}

export default Testimonials
*/}
import React from 'react';
import { assets, testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (
    <div className='container mx-auto py-20 sm:px-5 lg:px-2 w-full overflow-hidden' id='Testimonials'>
      <h1 className='text-3xl sm:text-5xl font-bold mb-4 text-center text-gray-800'>
        Customer
        <span className='underline underline-offset-8 decoration-2 decoration-red-500 font-light'> Testimonials</span>
      </h1>
      <p className='text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg'>
        Real Stories from Those Who Found Home with Us
      </p>

      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
