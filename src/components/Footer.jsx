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
          <div className="flex flex-col text-sm space-y-3 font-sans">
            <p className="font-bold text-brand-orange uppercase tracking-wider text-xs">
              Project Address:
            </p>
            <div className="text-white/90 leading-relaxed font-light">
              <p className="font-semibold text-white">PROFOUND VANAM</p>
              <p>Pragathi Nagar</p>
              <p>Near Exit Kaman, Telangana</p>
            </div>
            <div className="pt-2 text-xs font-semibold uppercase tracking-wider text-brand-orange space-x-3">
              <Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link>
              <span>|</span>
              <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Column 3: Disclaimer & Copyright */}
          <div className="flex flex-col text-xs space-y-3 max-w-md font-sans text-white/80">
            <p className="leading-relaxed">
              <span className="font-bold text-white">Disclaimer:</span> Images are for representation only. Specifications and details are subject to change. Please refer to the sanctioned plans for accurate project information.
            </p>
            <p className="text-white/60 pt-2">
              Copyright © 2026 All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
