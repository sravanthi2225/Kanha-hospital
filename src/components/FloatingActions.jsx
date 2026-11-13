import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { contactData } from '../data/contactData';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-auto">
      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-11 h-11 rounded-full bg-white text-[#1B2A8F] shadow-lg hover:shadow-xl border border-slate-200 flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href={`https://wa.me/91${contactData.phone}?text=Hello%20Kanha%20Hospitals,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kanha Hospitals on WhatsApp"
        className="w-13 h-13 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl flex items-center justify-center border-2 border-white cursor-pointer"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </motion.a>

      {/* 24/7 Call Now Button */}
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href={`tel:${contactData.phone}`}
        aria-label="Call 24/7 Emergency Hotline"
        className="relative group flex items-center bg-gradient-to-r from-red-600 to-rose-600 text-white p-3.5 rounded-full shadow-xl hover:shadow-2xl border-2 border-white cursor-pointer pulse-emergency"
      >
        <Phone className="w-6 h-6 animate-bounce" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold px-0 group-hover:px-2">
          Call 24/7: {contactData.phone}
        </span>
      </motion.a>
    </div>
  );
}

