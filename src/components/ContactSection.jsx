import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Send, CheckCircle2 } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "Where is Profound Vanam located?",
    answer: "Profound Vanam is located in Bachupally, Hyderabad. The area is well connected to Miyapur, Kukatpally, and the major IT hubs of West Hyderabad."
  },
  {
    id: 2,
    question: "What configurations are available in Profound Vanam?",
    answer: "Profound Vanam offers well-planned residential units designed for comfortable family living, with spacious layouts, good ventilation, and Vastu-friendly options."
  },
  {
    id: 3,
    question: "What makes the Bachupally location attractive for homebuyers?",
    answer: "Bachupally has become one of the fastest-growing residential areas in West Hyderabad, with excellent connectivity, reputed schools, hospitals, and easy access to the IT corridor."
  },
  {
    id: 4,
    question: "Are schools and colleges available near Profound Vanam?",
    answer: "Yes, many reputed institutions such as Oakridge International School, Delhi Public School, and VNR Vignan Jyothi Engineering College are located within a short driving distance."
  },
  {
    id: 5,
    question: "How far is Profound Vanam from major IT hubs?",
    answer: "The project offers convenient access to major employment hubs like Hitech City, Gachibowli, and Financial District, making it ideal for working professionals."
  }
];

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <div className="w-full bg-white text-gray-800">

      {/* CALLBACK FORM & CONTACT / MAP SECTION */}
      <section className="pt-4 md:pt-8 pb-16 md:pb-24 px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

          {/* Left Column: Request Callback Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 bg-[#F8F7F3] rounded-2xl p-6 sm:p-10 border border-[#E6E3DB] shadow-sm"
          >
            <h3 className="text-xl sm:text-2xl font-serif italic text-brand-orange mb-6 tracking-wide">
              REQUEST CALLBACK TODAY!
            </h3>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl flex flex-col items-center text-center space-y-3">
                <CheckCircle2 size={44} className="text-emerald-600" />
                <h4 className="font-semibold text-lg">Thank You!</h4>
                <p className="text-sm text-emerald-700">
                  Your request has been received. Our sales executive will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">First Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-brand-green focus:outline-none text-sm text-gray-800"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-brand-green focus:outline-none text-sm text-gray-800"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">E-mail *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-brand-green focus:outline-none text-sm text-gray-800"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-brand-green focus:outline-none text-sm text-gray-800"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-brand-green focus:outline-none text-sm text-gray-800 resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-green hover:bg-brand-orange text-white font-semibold text-sm tracking-wider uppercase transition-colors duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={16} /> Submit Request
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Address & Satellite Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-between h-full space-y-6"
          >
            {/* Address Details */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-green mb-1">Contact:</h4>
                <a href="tel:+919342370007" className="text-lg font-semibold text-brand-orange hover:underline">
                  +91 9342370007
                </a>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-green mb-1">Project Address:</h4>
                <div className="text-sm text-gray-700 leading-relaxed font-normal">
                  <p className="font-semibold text-brand-green">PROFOUND VANAM</p>
                  <p>Pragathi Nagar</p>
                  <p>Near Exit Kaman, Telangana</p>
                </div>
              </div>
            </div>

            {/* Satellite Map Embed */}
            <div className="relative w-full flex-1 min-h-[300px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100">
              <iframe
                title="Profound Vanam Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1599.4946702525208!2d78.39825812901017!3d17.542761573186926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f00515479ed%3A0x2445302897578c6b!2sProfound%20Vanam!5e0!3m2!1sen!2sin!4v1788960718389!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="py-12 md:py-20 px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1400px] mx-auto border-t border-gray-100 lg:pb-48">

        {/* Title (No Subheading) */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic font-normal text-brand-green">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-3 max-w-4xl mx-auto">
          {faqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-xl bg-white overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-gray-800 hover:text-brand-orange transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-brand-green">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </section>

    </div>
  );
}
