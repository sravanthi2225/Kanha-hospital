import React from 'react';
import { motion } from 'framer-motion';
import {
  Stethoscope,
  HeartPulse,
  Ribbon,
  Brain,
  Activity,
  Smile,
  Ear,
  Wind,
  AlertTriangle,
  Baby,
  Droplets,
  Crosshair,
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
  ChevronRight,
} from 'lucide-react';

const iconMap = {
  Stethoscope,
  HeartPulse,
  Ribbon,
  Brain,
  Activity,
  Smile,
  Ear,
  Wind,
  AlertTriangle,
  Baby,
  Droplets,
  Crosshair,
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

export default function SpecialityTile({ speciality, onSelect }) {
  const IconComponent = iconMap[speciality.iconName] || Stethoscope;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={() => onSelect(speciality)}
      className="group relative bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl border border-slate-100 hover:border-[#2F5BEA]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
    >
      {/* Top soft ambient background glow on hover */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#EAF3FF] rounded-full blur-2xl group-hover:bg-[#2F5BEA]/15 transition-colors -z-0"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#EAF3FF] group-hover:bg-gradient-to-br group-hover:from-[#1B2A8F] group-hover:to-[#2F5BEA] text-[#1B2A8F] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 group-hover:bg-blue-50 text-slate-600 group-hover:text-[#1B2A8F] transition-colors">
            {speciality.category}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#1B2A8F] transition-colors mb-1.5 font-heading">
          {speciality.name}
        </h3>
        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
          {speciality.desc}
        </p>
      </div>

      <div className="relative z-10 pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#2F5BEA]">
        <span>Explore Treatments</span>
        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
}

