import React from 'react';
import { motion } from 'framer-motion';

export default function ImageTextSection({ titlePart1, titlePart2, customTitle, subTitle, description }) {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 md:px-24 text-gray-800 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-8 md:gap-16 items-start"
      >
        
        {/* Title */}
        <div className="md:w-1/3">
          {customTitle ? (
            customTitle
          ) : (
            <h2 className="text-2xl md:text-3xl font-serif font-normal tracking-wide">
              <span className="text-brand-orange italic mr-2">{titlePart1}</span>
              <span className="text-brand-green">{titlePart2}</span>
            </h2>
          )}
          {subTitle && (
            <p className="mt-4 text-sm font-semibold tracking-wider text-gray-600 uppercase">
              {subTitle}
            </p>
          )}
        </div>

        {/* Description */}
        {description && (
          <div className="md:w-2/3">
            <p className="text-gray-600 leading-relaxed max-w-2xl text-sm md:text-base whitespace-pre-wrap">
              {description}
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
}
