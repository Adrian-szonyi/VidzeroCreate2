import React, { useState, useEffect } from 'react';
import { Menu, X, Camera } from 'lucide-react';
import { Link } from './ui/Link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Camera className="h-8 w-8 text-blue-600 mr-4" />
            <span className="text-xl font-bold text-blue-600">Vidzero Creator</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500`}>
              Features
            </Link>
            <Link href="#benefits" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500`}>
              Benefits
            </Link>
            <Link href="#how-it-works" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500`}>
              How It Works
            </Link>
            <Link href="#faq" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500`}>
              FAQ
            </Link>
          </nav>

          <button 
            className="md:hidden text-blue-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-screen bg-white shadow-lg' : 'max-h-0'
      }`}>
        <div className="container mx-auto px-4 py-4 space-y-4">
          <Link 
            href="#features" 
            className="block text-gray-800 hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link 
            href="#benefits" 
            className="block text-gray-800 hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Benefits
          </Link>
          <Link 
            href="#how-it-works" 
            className="block text-gray-800 hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </Link>
          <Link 
            href="#faq" 
            className="block text-gray-800 hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;