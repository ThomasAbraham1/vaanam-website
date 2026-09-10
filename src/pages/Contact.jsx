import React from 'react';
import ContactSection from '../components/ContactSection';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Heading */}
      <section className="bg-white pt-10 md:pt-16 lg:pt-20 pb-4 md:pb-6 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-serif italic font-normal tracking-wide text-brand-green mb-3 md:mb-5">
          Secure Your Future At <span className="text-brand-orange">Vanam</span>
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-brand-green/90 font-medium leading-relaxed max-w-2xl mx-auto">
          We believe in complete regulatory compliance and open communication. We're here to answer your questions and help you find your dream home.
        </p>
      </section>

      <ContactSection />
    </div>
  );
}
