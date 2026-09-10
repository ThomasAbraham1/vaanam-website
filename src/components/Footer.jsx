import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Map, Phone, Clock, ArrowRight } from 'lucide-react';
import logoImg from '../assets/images/Logo.webp';
import adityaBirlaLogo from '../assets/images/aditya-birla-logo.webp';

export default function Footer() {
  return (
    <footer className="w-full bg-brand-green text-white">
      <div className="w-full max-w-[1600px] mx-auto px-6 py-14 md:px-12 lg:px-20 md:py-20">
        
        {/* Top 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 items-stretch">
          
          {/* Column 1: Logos & tagline */}
          <div className="flex flex-col justify-between md:pr-10 lg:pr-16 md:border-r md:border-white/20">
            <div>
              <Link to="/" className="inline-block mb-4">
                <img 
                  src={logoImg} 
                  alt="Profound Vanam Logo" 
                  className="h-14 md:h-16 w-auto object-contain" 
                />
              </Link>
              <p className="text-white/80 text-sm md:text-base leading-relaxed font-light max-w-sm">
                Thoughtfully designed homes surrounded by comfort, connectivity and calm.
              </p>
            </div>
            <div className="pt-6 self-start">
              <img
                src={adityaBirlaLogo}
                alt="Aditya Birla Group"
                className="h-24 md:h-24 w-auto object-contain object-left"
              />
            </div>
          </div>

          {/* Column 2: Project Address */}
          <div className="flex flex-col justify-start md:px-10 lg:px-16 md:border-r md:border-white/20">
            <h3 className="text-xl md:text-2xl font-serif text-white font-normal mb-6 tracking-wide">
              Project Address
            </h3>

            <div className="flex items-start gap-3.5 mb-6">
              <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
              <div className="text-sm md:text-base text-white/85 leading-relaxed font-light">
                <p className="font-semibold text-white tracking-wide">PROFOUND VANAM</p>
                <p>Pragathi Nagar</p>
                <p>Near Exit Kaman,</p>
                <p>Telangana</p>
              </div>
            </div>

            <div className="mt-auto pt-2">
              <a 
                href="https://maps.google.com/?q=Profound+Vanam+Pragathi+Nagar+Bachupally+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-white transition-colors group"
              >
                <Map className="w-4 h-4 text-brand-orange group-hover:text-white transition-colors" />
                <span className="underline underline-offset-4 decoration-brand-orange/60 group-hover:decoration-white font-medium">
                  View on Google Maps
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Column 3: Get in Touch & CTA */}
          <div className="flex flex-col justify-start md:pl-10 lg:pl-16">
            <h3 className="text-xl md:text-2xl font-serif text-white font-normal mb-6 tracking-wide">
              Get in Touch
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-full border border-brand-orange/40 flex items-center justify-center flex-shrink-0 text-brand-orange">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a 
                  href="tel:+919342370007" 
                  className="text-sm md:text-base text-white/90 hover:text-brand-orange transition-colors font-light"
                >
                  +91 93423 70007
                </a>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-full border border-brand-orange/40 flex items-center justify-center flex-shrink-0 text-brand-orange">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a 
                  href="tel:+919502966999" 
                  className="text-sm md:text-base text-white/90 hover:text-brand-orange transition-colors font-light"
                >
                  +91 9502966999
                </a>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="w-7 h-7 rounded-full border border-brand-orange/40 flex items-center justify-center flex-shrink-0 text-brand-orange">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <p className="text-sm md:text-base text-white/90 font-light">
                  Mon - Sat, 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            <div className="mt-auto">
              <Link 
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-orange hover:bg-brand-orange/90 text-brand-green font-semibold py-3 px-7 rounded-lg shadow-md transition-all duration-300 transform hover:translate-y-[-1px] group text-sm md:text-base"
              >
                <span>Explore Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-white/20 my-10 md:my-14" />

        {/* Bottom Disclaimer & Copyright */}
        <div className="text-center space-y-3">
          <p className="text-xs md:text-sm text-white/65 font-light leading-relaxed max-w-5xl mx-auto">
            Disclaimer: Images are for representation only. Specifications and details are subject to change. Please refer to the sanctioned plans for accurate project information.
          </p>
          <p className="text-xs md:text-sm text-white/80 font-normal tracking-wide">
            ©2026 | Profound Vanam (Project RERA NO.:P02200009840) by Profound Group
          </p>
        </div>

      </div>
    </footer>
  );
}
