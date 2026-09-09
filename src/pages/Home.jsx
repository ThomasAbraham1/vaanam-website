import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ImageTextSection from '../components/ImageTextSection';
import Amenities from '../components/Amenities';

import LiveTheWayYouWant from '../components/LiveTheWayYouWant';

// All images mapped sequentially from 001 to 011
import img001 from '../assets/images/001 Photo.webp';
import img002 from '../assets/images/002 Photo.webp';
import img003 from '../assets/images/003 Photo.webp';
import img004 from '../assets/images/004 Photo.webp';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      
      {/* New Text Section under Video */}
      <ImageTextSection 
        customTitle={
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-serif italic font-normal mb-4 md:mb-6 leading-tight tracking-wide">
            <span className="text-brand-green">The care </span>
            <span className="text-brand-orange">ecosystem </span>
            <span className="text-brand-green">planned into the ground</span>
          </h2>
        }
        description="Homes, landscape, movement, play, recreation, and community spaces are brought together as one connected environment."
      />

      {/* Image 1 - Aerial */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1920px] mx-auto"
      >
        <img src={img001} alt="Aerial view of Vanam" className="w-full max-h-[85vh] object-cover block" />
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
        className="w-full max-w-[1920px] mx-auto"
      >
        <img src={img002} alt="Landscape and ground view" className="w-full max-h-[85vh] object-cover block" />
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
        className="w-full max-w-[1920px] mx-auto"
      >
        <img src={img003} alt="Vanam towers at sunset" className="w-full max-h-[85vh] object-cover block" />
      </motion.div>

      {/* Text 3 */}
      <ImageTextSection 
        titlePart1="Architecture"
        titlePart2="with space around it"
        description="VANAM rises as a distinct architectural presence, with the towers arranged around a shared community heart.&#10;&#10;The placement of the towers, their relationship to the landscape, and the movement between them are planned as one connected experience.&#10;&#10;Homes, landscape, movement, play, recreation, and community spaces are brought together as one connected environment."
      />

      {/* Image 4 - Master Plan */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[1600px] mx-auto py-6 md:py-8 lg:py-12 px-4 md:px-6"
      >
        <img src={img004} alt="Master Plan Map" className="w-full max-h-[85vh] object-contain block mx-auto" />
      </motion.div>

      {/* Amenities Section */}
      <Amenities />

      {/* Live The Way You Want Section */}
      <LiveTheWayYouWant />
    </div>
  );
}
