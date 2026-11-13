import React from 'react';
import { motion } from 'framer-motion';
import {
  Droplets,
  Crosshair,
  AlertTriangle,
  Stethoscope,
  HeartPulse,
  Ribbon,
  Brain,
  Activity,
  Smile,
  Ear,
  Wind,
  Baby,
  Flame,
  Scissors,
  Bone,
  Zap,
  Sparkles,
  Heart,
  Percent,
  Shield,
  Feather,
  Dumbbell,
  Sun,
  ArrowRight,
} from 'lucide-react';
import { CATEGORY_THEMES } from '../../data/specialities';

const iconComponents = {
  Droplets,
  Crosshair,
  AlertTriangle,
  Stethoscope,
  HeartPulse,
  Ribbon,
  Brain,
  Activity,
  Smile,
  Ear,
  Wind,
  Baby,
  Flame,
  Scissors,
  Bone,
  Zap,
  Sparkles,
  Heart,
  Percent,
  Shield,
  Feather,
  Dumbbell,
  Sun,
};

export default function SpecialityCard({
  speciality,
  onSelect,
  isListView = false,
}) {
  const IconComponent = iconComponents[speciality.icon] || Stethoscope;
  const theme = CATEGORY_THEMES[speciality.category] || CATEGORY_THEMES['Medical'];

  if (isListView) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        whileHover={{ y: -2 }}
        onClick={() => onSelect(speciality)}
        className="group bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 hover:border-[#2F5BEA] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div className="flex items-start sm:items-center space-x-4">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-105"
            style={{ backgroundColor: theme.bg, color: theme.color }}
          >
            <IconComponent className="w-6 h-6" />
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className={`w-2 h-2 rounded-full ${theme.dot}`}></span>
              <span className="text-xs font-semibold text-slate-500">
                {speciality.category}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1B2A8F] transition-colors font-heading">
              {speciality.name}
            </h3>
            <p className="text-xs text-slate-600 line-clamp-1 mt-0.5">
              {speciality.shortDescription}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
          <div className="hidden md:flex flex-wrap gap-1.5 max-w-xs">
            {speciality.treatments.slice(0, 2).map((t, i) => (
              <span
                key={i}
                className="bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="w-8 h-8 rounded-full bg-[#EAF3FF] group-hover:bg-[#1B2A8F] text-[#1B2A8F] group-hover:text-white flex items-center justify-center transition-colors">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      onClick={() => onSelect(speciality)}
      className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-transparent shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden min-h-[240px]"
    >
      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br from-[#1B2A8F] via-[#2F5BEA] to-[#5B2C83] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-0">
        <div className="w-full h-full bg-white rounded-[22px]"></div>
      </div>

      {/* Top Header: Soft Color-Coded Icon Bubble + Category Dot */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div
            className="w-13 h-13 rounded-2xl flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: theme.bg, color: theme.color }}
          >
            <IconComponent className="w-6 h-6" />
          </div>

          {/* Category Dot + Text */}
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs">
            <span className={`w-2 h-2 rounded-full ${theme.dot}`}></span>
            <span className="font-semibold text-slate-600 text-[11px]">
              {speciality.category}
            </span>
          </div>
        </div>

        {/* Speciality Name in Bold 18px */}
        <h3 className="text-[18px] font-bold text-slate-900 group-hover:text-[#1B2A8F] transition-colors mb-2 font-heading leading-snug">
          {speciality.name}
        </h3>

        {/* ONE Clean Line Description (max 2 lines, no truncation) */}
        <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
          {speciality.shortDescription}
        </p>
      </div>

      {/* Bottom Area: Hover reveal sliding treatment chips + arrow */}
      <div className="relative z-10 pt-4 mt-4 border-t border-slate-100">
        {/* Default bottom view */}
        <div className="flex items-center justify-between group-hover:hidden transition-all">
          <span className="text-[11px] font-semibold text-slate-400">
            {speciality.treatments.length} Procedures Offered
          </span>
          <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Hover / Active Slide-Up: Treatment Chips + View Details */}
        <div className="hidden group-hover:flex flex-col space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex flex-wrap gap-1">
            {speciality.treatments.slice(0, 3).map((trt, idx) => (
              <span
                key={idx}
                className="bg-blue-50 text-[#1B2A8F] text-[10px] font-medium px-2 py-0.5 rounded-md truncate max-w-[170px]"
              >
                {trt}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs font-bold text-[#2F5BEA] pt-1">
            <span>View department details</span>
            <ArrowRight className="w-4 h-4 translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

