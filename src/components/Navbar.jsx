import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import SignUpModal from './SignUpModal';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [showMobileMenu]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openSignUpModal = () => {
    setShowSignUpModal(true);
    setShowMobileMenu(false);
  };

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className='container mx-auto flex justify-between items-center px-6 md:px-20 lg:px-32'>
          <a href="#Header" className='flex items-center'>
            <img 
              src={assets.logo} 
              alt="Company Logo" 
              className={`h-10 ${isScrolled ? '' : 'brightness-0 invert'}`} 
            />
          </a>

          <ul className='hidden md:flex space-x-8'>
            <li><a href="#Header" className={`font-medium ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-300'} transition`}>Home</a></li>
            <li><a href="#About" className={`font-medium ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-300'} transition`}>About</a></li>
            <li><a href="#Projects" className={`font-medium ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-300'} transition`}>Projects</a></li>
            <li><a href="#Testimonials" className={`font-medium ${isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-300'} transition`}>Testimonials</a></li>
          </ul>

          <button
            onClick={openSignUpModal}
            className={`hidden md:block px-6 py-2 rounded-full font-medium transition ${isScrolled ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-gray-800 hover:bg-gray-100'}`}
          >
            Sign Up
          </button>

          <button 
            onClick={() => setShowMobileMenu(true)}
            className='md:hidden focus:outline-none'
            aria-label="Open menu"
          >
            <img 
              src={assets.menu_icon} 
              className={`w-7 ${isScrolled ? '' : 'brightness-0 invert'}`} 
              alt="Menu" 
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-white z-50 transition-all duration-300 ease-in-out ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='container mx-auto px-6 py-4'>
          <div className='flex justify-between items-center'>
            <img src={assets.logo} alt="Company Logo" className='h-10' />
            <button 
              onClick={() => setShowMobileMenu(false)}
              className='focus:outline-none'
              aria-label="Close menu"
            >
              <img src={assets.cross_icon} className='w-6' alt="Close" />
            </button>
          </div>

          <ul className='flex flex-col space-y-4 mt-10 text-lg font-medium'>
            <li><a onClick={() => setShowMobileMenu(false)} href="#Header" className='block py-2 hover:text-blue-600 transition'>Home</a></li>
            <li><a onClick={() => setShowMobileMenu(false)} href="#About" className='block py-2 hover:text-blue-600 transition'>About</a></li>
            <li><a onClick={() => setShowMobileMenu(false)} href="#Projects" className='block py-2 hover:text-blue-600 transition'>Projects</a></li>
            <li><a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className='block py-2 hover:text-blue-600 transition'>Testimonials</a></li>
            <li className='mt-6'>
              <button
                onClick={openSignUpModal}
                className='w-full bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition'
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div>

      {showSignUpModal && <SignUpModal onClose={() => setShowSignUpModal(false)} />}
    </>
  );
};

export default Navbar;