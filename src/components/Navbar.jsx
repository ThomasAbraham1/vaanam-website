import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/Logo.webp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="w-full bg-brand-green z-50 relative">
      <header className="w-full max-w-[2560px] mx-auto px-6 py-6 md:px-12 md:py-8 lg:px-20 xl:px-28 2xl:px-36 flex justify-between items-center text-white">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 z-50">
          <img src={logoImg} alt="Profound Vanam Logo" className="h-10 md:h-14 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.href} 
              className="text-xs font-semibold tracking-widest uppercase hover:text-brand-orange transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-brand-green/95 backdrop-blur-md flex flex-col items-center py-8 space-y-8 md:hidden border-t border-white/10 shadow-2xl"
          >
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.href} 
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold tracking-widest uppercase hover:text-brand-orange transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </header>
    </div>
  );
}
