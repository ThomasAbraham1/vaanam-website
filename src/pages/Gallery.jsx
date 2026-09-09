import React from 'react';
import { motion } from 'framer-motion';
import ImageTextSection from '../components/ImageTextSection';

import img001 from '../assets/gallery/001.webp';
import img002 from '../assets/gallery/002.webp';
import img003 from '../assets/gallery/003.webp';
import img004 from '../assets/gallery/004.webp';
import img005 from '../assets/gallery/005.webp';
import img006 from '../assets/gallery/006.webp';
import img007 from '../assets/gallery/007.webp';
import img008 from '../assets/gallery/008.webp';
import img009 from '../assets/gallery/009.webp';
import img010 from '../assets/gallery/010.webp';
import img011 from '../assets/gallery/011.webp';
import img012 from '../assets/gallery/012.webp';
import img013 from '../assets/gallery/013.webp';
import img014 from '../assets/gallery/014.webp';
import img015 from '../assets/gallery/015.webp';
import img016 from '../assets/gallery/016.webp';

// New Section (upscaled images)
import new1 from '../assets/gallery/magnific_upscale_1l7qzOEr4r.webp';
import new2 from '../assets/gallery/magnific_upscale_Tdtb85QVNR.webp';
import new3 from '../assets/gallery/magnific_upscale_fH1YndFCDY.webp';
import new4 from '../assets/gallery/magnific_upscale_s7416OCl8e.webp';

export default function Gallery() {
  return (
    <div className="flex flex-col">
       {/* Hero Heading */}
       <section className="bg-white py-48 px-6 md:px-12 text-center">
         <h1 className="text-4xl md:text-6xl font-serif font-normal tracking-wide text-brand-green mb-6">
           A Closer Look at <span className="font-serif italic text-brand-orange">Vanam</span>
         </h1>
         <p className="text-base md:text-xl text-brand-green font-medium">
           Explore the spaces, architecture, and lifestyle designed around you.
         </p>
       </section>
       
       {/* Hero Image */}
       <motion.div 
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.8 }}
         className="w-full max-w-[1920px] mx-auto"
       >
         <img src={img001} alt="Gallery Hero" className="w-full max-h-[85vh] object-cover block" />
       </motion.div>

       {/* Text 1 */}
       <ImageTextSection 
         customTitle={
           <h2 className="text-3xl md:text-5xl font-serif font-normal tracking-wide leading-tight mb-4">
             <span className="text-brand-orange italic">The home </span>
             <span className="text-brand-green">takes care of you</span>
           </h2>
         }
         description="Light where you need it.&#10;Air that moves through the home.&#10;Space for people to come together, and enough room to retreat."
       />

       {/* Collage 1 (Asymmetric) */}
       <motion.div 
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.8 }}
         className="w-full max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 pb-0"
       >
         <div className="h-full">
           <img src={img002} alt="Balcony relaxation" className="w-full h-full object-cover block" />
         </div>
         <div className="flex flex-col gap-2 md:gap-4 h-full">
           <img src={img003} alt="Kitchen" className="w-full h-1/2 object-cover block" />
           <img src={img004} alt="Bedroom" className="w-full h-1/2 object-cover block" />
         </div>
         <div className="md:col-span-2 w-full">
           <img src={img005} alt="Balcony Sunset" className="w-full max-h-[85vh] object-cover block" />
         </div>
       </motion.div>

       {/* Text 2 */}
       <ImageTextSection 
         customTitle={
           <h2 className="text-3xl md:text-5xl font-serif font-normal tracking-wide leading-tight mb-4">
             <span className="text-brand-orange italic">Two Clubhouses. </span>
             <span className="text-brand-green">More ways to live well.</span>
           </h2>
         }
         description="Social, wellness, work, and family needs find distinct settings,&#10;allowing the community to support both energy and ease."
       />

       {/* Full width clubhouses & Asymmetrical Grid Block */}
       <motion.div 
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.8 }}
         className="w-full max-w-[1920px] mx-auto flex flex-col gap-2 md:gap-4"
       >
         <img src={img006} alt="Round Clubhouse" className="w-full max-h-[85vh] object-cover block" />
         <img src={img007} alt="Rectangular Clubhouse" className="w-full max-h-[85vh] object-cover block" />
         
         {/* 4-Image Asymmetrical Grid (1/3 & 2/3) */}
         <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4">
           <img src={img008} alt="Salon" className="w-full h-full object-cover md:col-span-3" />
           <img src={img009} alt="Kids Area" className="w-full h-full object-cover md:col-span-2" />
           <img src={img011} alt="Cinema" className="w-full h-full object-cover md:col-span-2" />
           <img src={img010} alt="Dining" className="w-full h-full object-cover md:col-span-3" />
         </div>

         <img src={img012} alt="Coworking space" className="w-full max-h-[85vh] object-cover block" />
       </motion.div>

       {/* Text 3 */}
       <ImageTextSection 
         customTitle={
           <h2 className="text-3xl md:text-5xl font-serif font-normal tracking-wide leading-tight mb-4">
             <span className="text-brand-orange italic">Two Clubhouses. </span>
             <span className="text-brand-green">More ways to live well.</span>
           </h2>
         }
         description="Social, wellness, work, and family needs find distinct settings,&#10;allowing the community to support both energy and ease."
       />

       {/* Collage 2 (Asymmetric) */}
       <motion.div 
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.8 }}
         className="w-full max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 pb-0"
       >
         <div className="h-full">
           <img src={img013} alt="Baby on grass" className="w-full h-full object-cover block" />
         </div>
         <div className="flex flex-col gap-2 md:gap-4 h-full">
           <img src={img014} alt="Outdoor Stage" className="w-full h-1/2 object-cover block" />
           <img src={img015} alt="Kids slide" className="w-full h-1/2 object-cover block" />
         </div>
         <div className="md:col-span-2 w-full">
           <img src={img016} alt="Dining area" className="w-full max-h-[85vh] object-cover block" />
         </div>
       </motion.div>

       {/* New Section (Upscaled additions) */}
       <ImageTextSection 
         titlePart1="Elevated"
         titlePart2="Living Spaces"
         description="A closer look at the meticulously crafted interiors and community zones."
       />
       <motion.div 
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.8 }}
         className="w-full max-w-[1920px] mx-auto flex flex-col gap-2 md:gap-4 pb-24"
       >
         <img src={new1} alt="New Space 1" className="w-full max-h-[85vh] object-cover block" />
         <img src={new2} alt="New Space 2" className="w-full max-h-[85vh] object-cover block" />
         <img src={new3} alt="New Space 3" className="w-full max-h-[85vh] object-cover block" />
         <img src={new4} alt="New Space 4" className="w-full max-h-[85vh] object-cover block" />
       </motion.div>
    </div>
  );
}
