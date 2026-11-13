import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 sm:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm"
          style={{
            backgroundColor: light ? 'rgba(255, 255, 255, 0.15)' : '#EAF3FF',
            color: light ? '#EAF3FF' : '#1B2A8F',
            border: light ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(47, 91, 234, 0.2)',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[#2F5BEA] animate-pulse"></span>
          <span>{badge}</span>
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
            light ? 'text-white' : 'text-[#1B2A8F]'
          }`}
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-sm sm:text-base md:text-lg leading-relaxed ${
            light ? 'text-blue-100/80' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

