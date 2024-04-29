


import React from 'react';
// 
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="footer-section mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className='italic'>Welcome to Brite, your ultimate guide to exploring the world's most magnificent destinations.</p>
        </div>
        <div className="footer-section mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p>Email: info@brite.com</p>
          <p>Phone: +01999-654658</p>
        </div>
        <div className="footer-section">
          <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
          <div className="social-links">
            <a href="#" target="_blank" className="mr-4"> <FaFacebook className="text-white text-3xl hover:text-blue-500" /></a>
            <a href="#" target="_blank" className="mr-4"><FaTwitter className="text-white text-3xl hover:text-blue-400" /></a>
            <a href="#" target="_blank" className="mr-4"> <FaInstagram className="text-white text-3xl hover:text-pink-500" /></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className=" italic text-lg">&copy; 2024 Brite. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

