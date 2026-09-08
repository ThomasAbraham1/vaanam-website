import React from 'react';
import { motion } from 'framer-motion';
import buildingsImg from '../assets/images/Buildings-Illustration.webp';
import sunImg from '../assets/images/Ellipse-Sun.webp';

export default function Hero() {
  return (
    <section className="w-full max-w-[1920px] mx-auto bg-brand-green overflow-hidden text-white flex flex-col justify-end pt-12 md:pt-0">
      
      {/* Image Wrapper - relative layout forces the section to naturally fit the image's height without needing h-screen */}
      <div className="relative w-full flex justify-center items-end pointer-events-none mt-auto">
        
        {/* Background Sun */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute bottom-0 w-[90%] md:w-[85%] lg:w-[80%] z-0 flex justify-center"
        >
          <img src={sunImg} alt="Sun background" className="w-full h-auto object-contain object-bottom block translate-y-[15%] translate-x-[-3%]" />
        </motion.div>

        {/* Foreground Buildings */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="relative z-10 w-full flex justify-center"
        >
          <img src={buildingsImg} alt="Vanam Buildings" className="w-full h-auto object-contain object-bottom block translate-x-[0%]" />
        </motion.div>

      </div>
    </section>
  );
}
