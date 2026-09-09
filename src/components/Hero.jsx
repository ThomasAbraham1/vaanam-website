import React from 'react';
import buildingsImg from '../assets/images/Buildings-Illustration.webp';
import sunImg from '../assets/images/Ellipse-Sun.webp';

export default function Hero() {
  return (
    <div className="w-full bg-brand-green overflow-hidden">
      <section className="w-full max-w-[1920px] mx-auto text-white flex flex-col justify-end pt-12 md:pt-0">
        
        {/* Image Wrapper - relative layout forces the section to naturally fit the image's height without needing h-screen */}
        <div className="relative w-full flex justify-center items-end pointer-events-none mt-auto">
          
          {/* Background Sun */}
          <div className="absolute bottom-0 w-[90%] md:w-[85%] lg:w-[80%] z-0 flex justify-center">
            <img src={sunImg} alt="Sun background" className="w-full h-auto object-contain object-bottom block translate-y-[15%] translate-x-[-3%]" />
          </div>

          {/* Foreground Buildings */}
          <div className="relative z-10 w-full flex justify-center">
            <img src={buildingsImg} alt="Vanam Buildings" className="w-full h-auto object-contain object-bottom block translate-x-[0%]" />
          </div>

        </div>
      </section>
    </div>
  );
}
