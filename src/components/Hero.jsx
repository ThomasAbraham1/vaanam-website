import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/images/Hero-Illustration.webp';

export default function Hero() {
  return (
    <div className="w-full bg-brand-green overflow-hidden relative">
      <section className="w-full max-w-[1920px] mx-auto text-white flex flex-col lg:flex-row items-center lg:items-end justify-between pt-8 md:pt-12 lg:pt-0">

        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[45%] flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:pl-10 lg:pr-6 py-8 md:py-12 lg:py-44 lg:self-start z-10"
        >
          <div className="w-full max-w-none md:max-w-3xl xl:max-w-4xl lg:ml-auto text-left">
            <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] 2xl:text-7xl font-serif font-normal tracking-wide leading-[1.12] mb-5 md:mb-8">
              <span className="block">
                <span className="text-brand-orange italic">Rooted </span>
                <span className="text-white italic">in Green,</span>
              </span>
              <span className="text-white block">Rising in Style.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 font-light leading-relaxed max-w-xl">
              Profound VANAM is a presence, a landmark, and a sanctuary that quietly commands attention.
            </p>
          </div>
        </motion.div>

        {/* Right Prop Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-[55%] flex justify-center lg:justify-end items-end mt-auto pointer-events-none self-end"
        >
          <img
            src={heroImg}
            alt="Profound Vanam Towers"
            className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-none h-auto object-contain object-bottom block"
          />
        </motion.div>

      </section>
    </div>
  );
}

