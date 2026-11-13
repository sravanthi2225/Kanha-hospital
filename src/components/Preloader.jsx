import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete();
    }, 1200); // 1.2s preloader as requested

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="flex flex-col items-center text-center p-6"
          >
            {/* Real Logo from uploaded file */}
            <div className="relative mb-6">
              <img
                src="/images/kanha-logo.png"
                alt="Kanha Hospitals"
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-md"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border border-dashed border-[#2F5BEA]/40 -z-10"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xs sm:text-sm font-semibold tracking-widest text-[#1B2A8F] uppercase"
            >
              Your Health, Our Priority
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 140 }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              className="h-1 bg-gradient-to-r from-[#1B2A8F] via-[#2F5BEA] to-[#5B2C83] rounded-full mt-4"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

