import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Stats() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  
  // Only play video when it scrolls into view
  const isInView = useInView(containerRef, { margin: "0px" });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(e => console.log("Autoplay blocked by browser:", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  // Cinematic interaction logic
  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleClick = () => {
    setShowControls(true);
    if (videoRef.current) {
      // Browsers require a click to unmute safely
      videoRef.current.muted = false;
      setIsMuted(false);
      // Ensure it stays playing
      videoRef.current.play().catch(e => console.log("Play blocked by browser:", e));
    }
  };

  const handleMouseLeave = () => {
    if (isMuted) {
      setShowControls(false);
    }
  };

  return (
    <section className="bg-white py-24 px-6 sm:px-12 md:px-24 text-gray-800">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* ROW 1: Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 leading-tight tracking-wide">
            <span className="text-brand-green">A New Standard of</span><br/>
            <span className="text-brand-orange italic">Care-led Living</span>
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-gray-600">
            Ultimate Architects is an award-winning modern architecture firm based in New York. We specialize in contemporary design through our signature Natural Modern approach.
          </p>
        </motion.div>

        {/* ROW 2: Video */}
        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <video 
            ref={videoRef}
            src="/src/assets/videos/vanam-compressed.mp4" 
            loop 
            muted 
            playsInline
            preload="none"
            controls={showControls}
            className="w-full h-full object-cover"
          />
          
          {/* Custom cinematic overlay when controls are hidden */}
          {!showControls && (
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center transition-opacity duration-500 group-hover:bg-black/30">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </div>
            </div>
          )}
        </motion.div>

        {/* ROW 3: Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 pt-8 border-t border-gray-200"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-normal text-brand-green mb-2">7 Acre</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Gated Community</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-normal text-brand-green mb-2">4 Towers</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest">G + 31 Floors</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-normal text-brand-green mb-2">2, 2.5 & 3</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest">BHK Residences</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-normal text-brand-green mb-2">1388-2515 <span className="text-lg">Sq.ft</span></h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Thoughtfully planned homes</p>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 text-center"
        >
          <p className="text-xs text-gray-400 uppercase tracking-[0.2em]">Bachupally, Hyderabad</p>
        </motion.div>

      </div>
    </section>
  );
}
