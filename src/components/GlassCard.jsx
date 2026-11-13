import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  className = '',
  dark = false,
  hoverEffect = true,
  onClick,
}) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={
        hoverEffect
          ? {
              y: -5,
              boxShadow: dark
                ? '0 20px 30px -10px rgba(27, 42, 143, 0.4)'
                : '0 20px 30px -10px rgba(47, 91, 234, 0.15)',
            }
          : {}
      }
      transition={{ duration: 0.3 }}
      className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
        dark ? 'glass-card-dark text-white' : 'glass-card text-slate-800'
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

