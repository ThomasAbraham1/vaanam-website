import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';
import plan1Img from '../assets/images/007 Photo.webp';
import plan2Img from '../assets/images/011 Photo.webp';

const floorPlans = [
  {
    id: 1,
    label: "Plan 1",
    subtitle: "Tower 1 & 4 | Typical Floor Plans",
    image: plan1Img,
    // Replace with your actual Google Drive PDF share link
    pdfUrl: "https://drive.google.com/file/d/1J1obqgyDyCgmEoooLT5hc_bJe_XNpWg8/view?usp=drive_link",
  },
  {
    id: 2,
    label: "Plan 2",
    subtitle: "Tower 2 & 3 | Typical Floor Plans",
    image: plan2Img,
    // Replace with your actual Google Drive PDF share link
    pdfUrl: "https://drive.google.com/file/d/1HlqqHCWwUu7hoIMsKnKAw6I8KOzrzpHz/view?usp=drive_link",
  },
];

export default function LiveTheWayYouWant() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-48 w-full text-gray-800">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 lg:py-0 ">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic font-normal mb-4 md:mb-6 leading-tight tracking-wide"
          >
            <span className="text-brand-orange mr-2">Live The Way</span>
            <span className="text-brand-green">You Want</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base lg:text-lg text-brand-green/80 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Thoughtfully designed floor plans that maximize space, comfort, and functionality for modern living.
          </motion.p>
        </div>

        {/* 2 Plan Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 max-w-6xl mx-auto">
          {floorPlans.map((plan, index) => (
            <motion.a
              key={plan.id}
              href={plan.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative flex flex-col bg-[#F5F4F0] hover:bg-[#EFECE5] rounded-2xl p-6 sm:p-8 transition-all duration-300 border border-[#E6E3DB] hover:border-brand-orange/40 hover:shadow-xl cursor-pointer"
            >
              {/* Header Label (Plan 1 / Plan 2) */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif italic text-brand-green group-hover:text-brand-orange transition-colors">
                    {plan.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">
                    {plan.subtitle}
                  </p>
                </div>
                
                {/* PDF View Icon Badge */}
                <div className="w-10 h-10 rounded-full bg-white group-hover:bg-brand-orange group-hover:text-white text-brand-green flex items-center justify-center transition-all duration-300 shadow-sm flex-shrink-0">
                  <ExternalLink size={18} />
                </div>
              </div>

              {/* Preview Image Container */}
              <div className="relative w-full aspect-[4/3] bg-white rounded-xl overflow-hidden border border-[#EAE7DF] flex items-center justify-center p-3 shadow-inner">
                <img 
                  src={plan.image} 
                  alt={plan.label} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                />
                
                {/* Overlay Hint on Hover */}
                <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-brand-green/90 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 backdrop-blur-sm">
                    <FileText size={16} /> Click to View PDF
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
