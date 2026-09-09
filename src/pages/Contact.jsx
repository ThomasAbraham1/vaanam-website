import React from 'react';
import ContactSection from '../components/ContactSection';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Heading */}
      <section className="bg-white py-12 md:py-24 lg:py-36 px-6 md:px-12 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-serif italic font-normal tracking-wide text-brand-green mb-3 md:mb-6">
          Get in Touch with <span className="text-brand-orange">Vanam</span>
        </h1>
        <p className="text-sm md:text-base lg:text-xl text-brand-green font-medium">
          We're here to answer your questions and help you find your dream home.
        </p>
      </section>

      <ContactSection />
    </div>
  );
}
