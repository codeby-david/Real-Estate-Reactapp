import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Header = () => {
  // Array of background image URLs (replace with your own images)
  const backgroundImages = [
    '/header_img.png',  
    '/header_img2.png', 
    '/header_img3.png', 
    '/header_img4.png', 
    '/header_img5.png', 
  ];

  // Array of text corresponding to each background image
const headerTexts = [
    'Explore Homes that fit your Dreams', // Text for the first image
    'Discover Your Perfect Home',        // Text for the second image
    'Find Your Dream Property',          // Text for the third image
    'Live in Luxury and Comfort',        // Text for the fourth image
    'Your Ideal Home Awaits You',        // Text for the fifth image
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentText, setCurrentText] = useState(headerTexts[0]);
  const [isTextVisible, setIsTextVisible] = useState(true);

  // Automatically change the background image and text every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTextVisible(false); // Hide text before changing
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setCurrentText(headerTexts[(currentImageIndex + 1) % headerTexts.length]);
        setIsTextVisible(true); // Show text after changing
      }, -200); // Delay to allow fade-out effect
    }, 27000); // Change image and text every 15 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentImageIndex, backgroundImages.length, headerTexts]);

  return (
    <div
      className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden transition-all duration-30000 ease-in-out'
      style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
      id='Header'
    >
      {/* Apply blur effect conditionally */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-10000 ease-in-out ${
          currentImageIndex !== 0 ? 'backdrop-blur-sm' : '' // Apply blur only for images 2-5
        }`}
        style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
      ></div>
      <Navbar />
      <div className='container text-center mx-auto px-6 py-4 md:px-20 lg:px-32 text-white relative z-10'>
        <h2
          className={`text-5xl sm:text-6xl md:text-[82px] in-block max-w-3xl font-semibold pt-20 transition-opacity duration-1000 ease-in-out ${
            isTextVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {currentText}
        </h2>
        <div className='space-x-6 mt-16'>
          <a href="#Projects" className='border border-white px-8 py-3 rounded hover:bg-black cursor-pointer'>
            Projects
          </a>
          <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded hover:bg-black cursor-pointer'>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;