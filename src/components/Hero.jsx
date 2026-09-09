import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/images/Hero-Illustration.webp';

export default function Hero() {
  return (
    <div className="w-full bg-brand-green overflow-hidden relative">
      <section className="w-full max-w-[1920px] mx-auto text-white flex flex-col lg:flex-row items-center lg:items-end justify-between pt-8 md:pt-12 lg:pt-16">
        
        {/* Left Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:pl-20 lg:pr-8 py-8 md:py-12 lg:py-24 lg:self-center z-10 text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif italic font-normal tracking-wide leading-[1.15] mb-4 md:mb-6">
            <span className="text-brand-orange block">Rooted in Green,</span>
            <span className="text-white block">Rising in Style.</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-xl">
            Profound VANAM is a presence, a landmark, and a sanctuary that quietly commands attention.
          </p>
        </motion.div>

        {/* Right Prop Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end mt-auto pointer-events-none self-end"
        >
          <img 
            src={heroImg} 
            alt="Profound Vanam Towers" 
            className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-none h-auto object-contain object-bottom block" 
          />
        </motion.div>

      </section>
    </div>
  );
}

