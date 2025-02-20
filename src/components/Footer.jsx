import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 pb-20 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={assets.logo_dark} alt="" />
          <p className='text-gray-200 mt-4'>At our company, we are committed
             to helping you find the perfect property or sell your home with
              ease. Whether youre buying, selling, or investing, our experienced team is here
               to guide you every step of the way. Explore our listings, discover expert advice, 
               and let us turn your real estate dreams 
            into reality.</p>
        </div>
        <div className='w-full md:1/5 mb-8 md:mb-0 my-5'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-200'>
            <a href="#Header" className='hover:text-white'>Home</a>
            <a href="#About" className='hover:text-white'>About Us</a>
            <a href="#Contact" className='hover:text-white'>Contact Us</a>
            <a href="#Header" className='hover:text-white'>Privacy Policy</a>
          </ul>
        </div>
        <div></div>
      </div>
      <div></div>
      
    </div>
  )
}

export default Footer
