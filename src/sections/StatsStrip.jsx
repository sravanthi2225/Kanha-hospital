import React from 'react';
import { motion } from 'framer-motion';
import { statsData } from '../data/statsData';
import CountUpStat from '../components/CountUpStat';

export default function StatsStrip() {
  return (
    <section className="relative py-10 sm:py-14 bg-white z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-r from-[#EAF3FF] via-white to-[#EAF3FF] p-6 sm:p-8 lg:p-10 border border-blue-100 shadow-xl shadow-blue-900/5"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-blue-200/60">
            {statsData.map((stat, idx) => (
              <div key={idx} className={idx > 0 ? 'pt-6 sm:pt-0' : ''}>
                <CountUpStat
                  number={stat.number}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  label={stat.label}
                  description={stat.description}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

