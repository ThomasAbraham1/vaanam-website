import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import kidsPlayIcon from '../assets/images/icons/kids_play.svg';
import badmintonIcon from '../assets/images/icons/badminton.svg';
import courtyardIcon from '../assets/images/icons/courtyard.svg';
import swimmingIcon from '../assets/images/icons/swimming.svg';
import gymIcon from '../assets/images/icons/gym.svg';
import petIcon from '../assets/images/icons/pet.svg';
import seatingIcon from '../assets/images/icons/seating.svg';
import skatingIcon from '../assets/images/icons/skating.svg';
import yogaIcon from '../assets/images/icons/yoga.svg';
import basketballIcon from '../assets/images/icons/basketball.svg';
import clubhouseIcon from '../assets/images/icons/clubhouse.svg';
import squashIcon from '../assets/images/icons/squash.svg';
import cyclingIcon from '../assets/images/icons/cycling.svg';
import cricketIcon from '../assets/images/icons/cricket.svg';

const amenities = [
  { id: 1, title: "KID'S PLAY AREA", icon: kidsPlayIcon },
  { id: 2, title: "BADMINTON COURTS", icon: badmintonIcon },
  { id: 3, title: "CENTRAL COURT YARD", icon: courtyardIcon },
  { id: 4, title: "SWIMMING POOL", icon: swimmingIcon },
  { id: 5, title: "OUTDOOR GYM", icon: gymIcon },
  { id: 6, title: "PET ZONE", icon: petIcon },
  { id: 7, title: "SEATING AREA", icon: seatingIcon },
  { id: 8, title: "SKATING RING", icon: skatingIcon },
  { id: 9, title: "YOGA AEROBICS HALL", icon: yogaIcon },
  { id: 10, title: "BASKET BALL COURT", icon: basketballIcon },
  { id: 11, title: "CLUB HOUSE", icon: clubhouseIcon },
  { id: 12, title: "SQUASH COURT", icon: squashIcon },
  { id: 13, title: "CYCLING TRACK", icon: cyclingIcon },
  { id: 14, title: "CRICKET PRACTICE NET", icon: cricketIcon },
];

export default function Amenities() {
  const scrollContainerRef = useRef(null);

  const scrollByOneColumn = (direction) => {
    if (scrollContainerRef.current) {
      const firstChild = scrollContainerRef.current.querySelector('.amenity-item');
      if (firstChild) {
        const columnWidth = firstChild.clientWidth;
        scrollContainerRef.current.scrollBy({
          left: direction === 'left' ? -columnWidth : columnWidth,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <div className="max-w-[1600px] mx-auto px-0 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 px-4 md:px-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#3A4042] mb-4 md:mb-6 leading-tight">
            Modern Living, Elevated
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-500 font-light leading-relaxed">
            A thoughtfully curated collection of amenities designed to enhance comfort, wellness, recreation, and everyday living.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full mb-10 overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="w-full overflow-x-auto snap-x snap-mandatory flex"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* We will use a grid to force 2 rows. 
                Using auto-columns for precise sizing so it flows horizontally. */}
            <style dangerouslySetInnerHTML={{__html: `
              .scrollbar-hide::-webkit-scrollbar { display: none; }
              .amenities-grid {
                display: grid;
                grid-template-rows: repeat(2, minmax(0, 1fr));
                grid-auto-flow: column;
                grid-auto-columns: 50vw;
                border-top: 1px solid #e5e7eb;
                border-left: 1px solid #e5e7eb;
              }
              @media (min-width: 640px) { .amenities-grid { grid-auto-columns: 50vw; } }
              @media (min-width: 768px) { .amenities-grid { grid-auto-columns: 33.333vw; } }
              @media (min-width: 1024px) { .amenities-grid { grid-auto-columns: 20%; } }
            `}} />
            
            <div className="amenities-grid scrollbar-hide flex-1 min-w-full bg-gray-200 gap-[1px]">
              {amenities.map((item) => {
                const iconSrc = item.icon;
                return (
                  <div 
                    key={'amenity-' + item.id} 
                    className="amenity-item snap-start flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 aspect-[4/3] lg:aspect-auto lg:h-[240px] xl:h-[280px] bg-white hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#F5F4EF] flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                      <img src={iconSrc} alt={item.title} className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 object-contain" />
                    </div>
                    <h3 className="text-[9px] sm:text-[10px] md:text-xs font-bold text-gray-600 tracking-wider text-center uppercase">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button 
            onClick={() => scrollByOneColumn('left')}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#EF5B4A] hover:bg-[#D44A3C] transition-colors flex items-center justify-center text-white cursor-pointer"
            aria-label="Previous amenities"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={() => scrollByOneColumn('right')}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#EF5B4A] hover:bg-[#D44A3C] transition-colors flex items-center justify-center text-white cursor-pointer"
            aria-label="Next amenities"
          >
            <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
