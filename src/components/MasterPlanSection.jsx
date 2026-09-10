import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ExternalLink } from 'lucide-react';
import masterPlanImg from '../assets/images/Master-Plan-Numbered.webp';

const legends = [
  { num: '01', name: 'DRIVEWAY' },
  { num: '02', name: 'SECURITY CABIN' },
  { num: '03', name: 'GRAND PAVING' },
  { num: '04', name: 'CYCLE TRACK' },
  { num: '05', name: 'JOGGING TRACK' },
  { num: '06', name: 'ENTRANCE PLAZA' },
  { num: '07', name: 'PLAY AREA' },
  { num: '08', name: 'LAWN' },
  { num: '09', name: 'OUTDOOR CAFETERIA' },
  { num: '10', name: 'AMPHITHEATRE' },
  { num: '11', name: 'BUTTERFLY GARDEN' },
  { num: '12', name: 'YOGA LAWN' },
  { num: '13', name: 'SKATING RINK' },
  { num: '14', name: 'BASKET BALL COURT' },
  { num: '15', name: 'CRICKET PRACTICE NET' },
  { num: '16', name: 'OUTDOOR GYM' },
  { num: '17', name: 'PLAZA' },
  { num: '18', name: 'PICKLE BALL COURT' },
  { num: '19', name: 'COWORKING ZONE' },
  { num: '20', name: 'DECK' },
  { num: '21', name: 'WATER FEATURE' },
  { num: '22', name: 'MOUNDS' },
  { num: '23', name: 'SCULPTURE GARDEN' },
  { num: '24', name: 'SENIOR CITIZEN COURT' },
  { num: '25', name: 'CENTRAL LAWN' },
  { num: '26', name: 'TROPICAL PLANTATION' },
  { num: '27', name: 'TRANSFORMER YARD' },
];

export default function MasterPlanSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Split legends into 2 columns for natural vertical descending order (01-14 in Col 1, 15-27 in Col 2)
  const midpoint = Math.ceil(legends.length / 2);
  const col1 = legends.slice(0, midpoint);
  const col2 = legends.slice(midpoint);

  // Handle ESC key to close modal & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section className="bg-white py-12 md:py-20 lg:pt-48 lg:pb-0 w-full text-gray-800">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading, Descriptions & Legends */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-start"
          >
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-normal mb-6 md:mb-8 leading-tight tracking-wide">
              <span className="text-brand-orange mr-2">Architecture</span>
              <span className="text-brand-green">with space around it</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-brand-green/85 font-normal leading-relaxed mb-8 md:mb-10">
              <p>
                VANAM rises as a distinct architectural presence, with the towers arranged around a shared community heart.
              </p>
              <p>
                The placement of the towers, their relationship to the landscape, and the movement between them are planned as one connected experience.
              </p>
              <p>
                Homes, landscape, movement, play, recreation, and community spaces are brought together as one connected environment.
              </p>
            </div>

            {/* Legends */}
            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-xs sm:text-sm font-bold text-brand-green tracking-wider uppercase mb-4">
                LEGENDS:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 sm:gap-y-0">
                {/* Column 1: 01 to 14 */}
                <div className="space-y-1.5">
                  {col1.map((item) => (
                    <div key={item.num} className="text-[11px] sm:text-xs text-gray-700 tracking-wide flex items-center">
                      <span className="font-bold text-brand-green mr-1.5 w-6 flex-shrink-0">
                        {item.num}.
                      </span>
                      <span className="uppercase text-gray-600 font-medium">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Column 2: 15 to 27 */}
                <div className="space-y-1.5">
                  {col2.map((item) => (
                    <div key={item.num} className="text-[11px] sm:text-xs text-gray-700 tracking-wide flex items-center">
                      <span className="font-bold text-brand-green mr-1.5 w-6 flex-shrink-0">
                        {item.num}.
                      </span>
                      <span className="uppercase text-gray-600 font-medium">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Master Plan Numbered Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-7 flex justify-center items-center"
          >
            <div 
              onClick={() => setIsModalOpen(true)}
              className="relative w-full max-w-3xl mx-auto flex justify-center cursor-zoom-in group rounded-2xl overflow-hidden"
              role="button"
              tabIndex={0}
              aria-label="Click to enlarge Master Plan"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsModalOpen(true); }}
            >
              <img 
                src={masterPlanImg} 
                alt="Vanam Master Plan with numbered amenities and towers" 
                className="w-full h-auto max-h-[85vh] lg:max-h-[92vh] object-contain block drop-shadow-sm transition-transform duration-500 group-hover:scale-[1.02]" 
              />

              {/* Hover Badge */}
              <div className="absolute bottom-4 right-4 bg-brand-green/90 backdrop-blur-md text-white text-xs font-medium px-3.5 py-2 rounded-full shadow-lg flex items-center gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-1">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Click to expand</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10"
          >
            {/* Action Buttons Top Right */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
              <a 
                href={masterPlanImg} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 backdrop-blur-md flex items-center gap-1.5 text-xs font-medium px-3"
                title="Open raw image in new tab"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">Open original</span>
              </a>

              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 backdrop-blur-md"
                aria-label="Close fullscreen view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Expanded Image Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[95vw] max-h-[92vh] flex items-center justify-center"
            >
              <img 
                src={masterPlanImg} 
                alt="Vanam Master Plan Full Size" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
