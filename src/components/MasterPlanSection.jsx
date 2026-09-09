import React from 'react';
import { motion } from 'framer-motion';
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
  return (
    <section className="bg-white py-12 md:py-24 lg:py-36 px-6 sm:px-12 md:px-24 w-full text-gray-800">
      <div className="max-w-[1600px] mx-auto w-full">
        
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                {legends.map((item) => (
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

          </motion.div>

          {/* Right Column: Master Plan Numbered Map */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-7 flex justify-center items-center"
          >
            <div className="relative w-full max-w-3xl mx-auto flex justify-center">
              <img 
                src={masterPlanImg} 
                alt="Vanam Master Plan with numbered amenities and towers" 
                className="w-full h-auto max-h-[85vh] lg:max-h-[92vh] object-contain block drop-shadow-sm" 
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
