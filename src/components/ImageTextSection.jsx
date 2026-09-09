import React from 'react';
import { motion } from 'framer-motion';

export default function ImageTextSection({ titlePart1, titlePart2, customTitle, subTitle, description }) {
  return (
    <section className="bg-white pt-32 pb-12 md:pt-48 md:pb-48 px-6 sm:px-12 md:px-24 text-gray-800">
      <div className="max-w-[1600px] mx-auto w-full flex flex-col items-center text-center"> 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {customTitle ? (
            customTitle
          ) : (
            <h2 className="text-3xl md:text-5xl font-serif italic font-normal mb-6 leading-tight tracking-wide">
              <span className="text-brand-orange mr-2">{titlePart1}</span>
              <span className="text-brand-green">{titlePart2}</span>
            </h2>
          )}
          
          {subTitle && (
            <p className="mt-4 mb-6 text-sm font-semibold tracking-wider text-gray-600 uppercase">
              {subTitle}
            </p>
          )}

          {description && (
            <p className="text-sm md:text-xl leading-relaxed text-gray-600 whitespace-pre-wrap">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
