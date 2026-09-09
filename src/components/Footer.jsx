import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/Logo.webp';

export default function Footer() {
  return (
    <footer className="w-full bg-brand-green text-white">
      <div className="w-full max-w-[1920px] mx-auto px-6 py-12 md:px-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          
          {/* Column 1: Logo (Slightly larger than header logo, aligned with container) */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src={logoImg} 
                alt="Profound Vanam Logo" 
                className="h-14 md:h-20 w-auto object-contain" 
              />
            </Link>
          </div>

          {/* Column 2: Project Address & Links */}
          <div className="flex flex-col text-sm space-y-2 font-sans text-white/90">
            <p className="font-bold text-white">Project Address:</p>
            <div className="leading-relaxed font-light">
              <p>PROFOUND VANAM</p>
              <p>Pragathi Nagar</p>
              <p>Near Exit Kaman, Telangana</p>
            </div>
            <div className="pt-3 text-brand-orange space-x-2">
              <Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link>
              <span className="text-brand-orange">|</span>
              <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Column 3: Disclaimer & Copyright */}
          <div className="flex flex-col text-sm space-y-2 max-w-md font-sans text-white/90">
            <p className="leading-relaxed font-light">
              <span className="font-bold text-white">Disclaimer:</span> Images are for representation only. Specifications and details are subject to change. Please refer to the sanctioned plans for accurate project information.
            </p>
            <p className="text-brand-orange pt-3">
              Copyright © 2026 All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
