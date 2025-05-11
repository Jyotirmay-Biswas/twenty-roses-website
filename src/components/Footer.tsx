
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-8 border-t border-birthday-pink border-opacity-30">
      <div className="birthday-container">
        <div className="text-center">
          <p className="font-dancing text-2xl text-birthday-rose mb-2">
            Happy 20th Birthday!
          </p>
          <p className="text-gray-600">
            Made with love for my wonderful wife
          </p>
          <p className="text-sm text-gray-500 mt-4">
            © {currentYear} | Your special birthday website
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
