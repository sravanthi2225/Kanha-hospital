import React from 'react';
import { motion } from 'framer-motion';
import { SPECIALITY_CATEGORIES } from '../../data/specialities';

export default function CategoryTabs({
  categories = SPECIALITY_CATEGORIES,
  activeCategory,
  onSelectCategory,
  counts = {},
}) {
  return (
    <div className="w-full overflow-x-auto scrollbar-none py-1">
      <div className="flex items-center space-x-2 min-w-max">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const count = counts[category] || 0;

          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-200 cursor-pointer flex items-center space-x-1.5 focus:outline-none focus:ring-2 focus:ring-[#2F5BEA] focus:ring-offset-1 ${
                isActive
                  ? 'text-white'
                  : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="categoryHighlight"
                  className="absolute inset-0 bg-[#1B2A8F] rounded-full -z-10 shadow-sm"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
              <span
                className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

