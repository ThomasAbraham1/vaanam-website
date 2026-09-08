import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ImageTextSection from '../components/ImageTextSection';

// All images mapped sequentially from 001 to 011
import img001 from '../assets/images/001 Photo.webp';
import img002 from '../assets/images/002 Photo.webp';
import img003 from '../assets/images/003 Photo.webp';
import img004 from '../assets/images/004 Photo.webp';
import img005 from '../assets/images/005 Photo.webp';
import img006 from '../assets/images/006 Photo.webp';
import img007 from '../assets/images/007 Photo.webp';
import img008 from '../assets/images/008 Photo.webp';
import img009 from '../assets/images/009 Photo.webp';
import img010 from '../assets/images/010 Photo.webp';
import img011 from '../assets/images/011 Photo.webp';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      
      {/* Image 1 - Aerial */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1920px] mx-auto h-auto"
      >
        <img src={img001} alt="Aerial view of Vanam" className="w-full h-full object-cover block" />
      </motion.div>

      {/* Text 1 */}
      <ImageTextSection 
        titlePart1="The Forest"
        titlePart2="beside you."
        description="Care begins with the world around you.&#10;At VANAM, the relationship with nature extends beyond a view.&#10;It brings a sense of openness, calm, and distance from the&#10;intensity of the city."
      />

      {/* Image 2 - Landscape */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1920px] mx-auto h-auto"
      >
        <img src={img002} alt="Landscape and ground view" className="w-full h-full object-cover block" />
      </motion.div>

      {/* Text 2 */}
      <ImageTextSection 
        titlePart1="A central heart"
        titlePart2="for the community"
        description="The landscape brings movement, play, rest, and connection&#10;into one shared setting. It gives families places to meet while&#10;preserving the freedom to find a quiet corner of their own."
      />

      {/* Image 3 - Sunset */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1920px] mx-auto h-auto"
      >
        <img src={img003} alt="Vanam towers at sunset" className="w-full h-full object-cover block" />
      </motion.div>

      {/* Text 3 */}
      <ImageTextSection 
        titlePart1="Architecture"
        titlePart2="with space around it"
        description="VANAM rises as a distinct architectural presence, with the towers&#10;arranged around a shared community heart.&#10;&#10;The placement of the towers, their relationship to the landscape,&#10;and the movement between them are planned as one connected&#10;experience."
      />

      {/* Text 4 */}
      <ImageTextSection 
        customTitle={
          <h2 className="text-2xl md:text-3xl font-serif font-normal tracking-wide">
            <span className="text-brand-green">The care </span>
            <span className="text-brand-orange italic">ecosystem </span>
            <span className="text-brand-green">planned into the ground</span>
          </h2>
        }
        description="Homes, landscape, movement, play, recreation, and community&#10;spaces are brought together as one connected environment."
      />

      {/* Image 4 - Master Plan */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1600px] mx-auto h-auto py-12 px-6"
      >
        <img src={img004} alt="Master Plan Map" className="w-full h-auto object-contain block mx-auto" />
      </motion.div>

      {/* Text 5 - T1&4 Floor plans */}
      <ImageTextSection 
        titlePart1="Typical"
        titlePart2="floor plans"
        subTitle="TOWER 1 & 4 | 2nd Floor to 31st Floors"
      />

      {/* Image 5 - Outline Site Plan T1&4 */}
      <div className="w-full max-w-[1600px] mx-auto h-auto px-6 pb-12">
        <img src={img005} alt="Outline Site Plan Tower 1 and 4" className="w-full h-auto object-contain mx-auto max-w-4xl block" />
      </div>

      {/* Image 6 - Area Table T1&4 */}
      <div className="w-full max-w-[1600px] mx-auto h-auto px-6 pb-12">
        <img src={img006} alt="Area Table Tower 1 and 4" className="w-full h-auto object-contain mx-auto max-w-4xl block" />
      </div>

      {/* Image 7 - Floor Plan T1&4 */}
      <div className="w-full max-w-[1600px] mx-auto h-auto px-6 pb-24">
        <img src={img007} alt="Detailed Floor Plan Tower 1 and 4" className="w-full h-auto object-contain mx-auto max-w-4xl block" />
      </div>

      {/* Text 6 - T2&3 Floor plans */}
      <ImageTextSection 
        titlePart1="Typical"
        titlePart2="floor plans"
        subTitle="TOWER 2 & 3 | 2nd Floor to 31st Floors"
      />

      {/* Images 008 & 009 - Outline Site Plan T2&3 with Compass */}
      <div className="w-full max-w-[1600px] mx-auto h-auto px-6 pb-12">
        <div className="relative w-full max-w-4xl mx-auto">
          <img src={img008} alt="Outline Site Plan Tower 2 and 3" className="w-full h-auto object-contain block mx-auto" />
          <img src={img009} alt="Compass" className="absolute top-0 right-0 w-20 md:w-32 h-auto object-contain" />
        </div>
      </div>

      {/* Image 010 - Area Table T2&3 */}
      <div className="w-full max-w-[1600px] mx-auto h-auto px-6 pb-12">
        <img src={img010} alt="Area Table Tower 2 and 3" className="w-full h-auto object-contain mx-auto max-w-4xl block" />
      </div>

      {/* Image 011 - Floor Plan T2&3 */}
      <div className="w-full max-w-[1600px] mx-auto h-auto px-6 pb-24">
        <img src={img011} alt="Detailed Floor Plan Tower 2 and 3" className="w-full h-auto object-contain mx-auto max-w-4xl block" />
      </div>
    </div>
  );
}
