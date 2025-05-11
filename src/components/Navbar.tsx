
import React from 'react';
import { heart } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white bg-opacity-80 backdrop-blur-sm shadow-sm py-2">
      <div className="birthday-container flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-2xl font-dancing font-bold text-birthday-rose">Happy 20th Birthday!</span>
        </a>
        <ul className="hidden md:flex items-center space-x-8">
          <li><a href="#home" className="text-gray-700 hover:text-birthday-rose transition-colors">Home</a></li>
          <li><a href="#gallery" className="text-gray-700 hover:text-birthday-rose transition-colors">Gallery</a></li>
          <li><a href="#message" className="text-gray-700 hover:text-birthday-rose transition-colors">Message</a></li>
          <li><a href="#countdown" className="text-gray-700 hover:text-birthday-rose transition-colors">Countdown</a></li>
        </ul>
        <a 
          href="#card" 
          className="btn-birthday text-sm py-2 px-4 md:py-3 md:px-6 flex items-center"
        >
          <span>Birthday Card</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
