import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Phone,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Stethoscope,
  Award,
  Clock,
  Sparkles,
  Droplets,
  Crosshair,
  AlertTriangle,
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
  Heart,
  Percent,
  Shield,
  Feather,
  Dumbbell,
  Sun,
  User,
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

export default function SpecialityDrawer({
  isOpen,
  onClose,
  speciality,
  onBookAppointment,
}) {
  const drawerRef = useRef(null);

  // Lock body scroll and handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!speciality) return null;

  const IconComponent = iconComponents[speciality.icon] || Stethoscope;
  const theme = CATEGORY_THEMES[speciality.category] || CATEGORY_THEMES['Medical'];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Slide-In Sheet: Right Drawer (Full-screen sheet on mobile) */}
          <motion.div
            ref={drawerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative w-full sm:max-w-xl md:max-w-2xl bg-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label={`${speciality.name} details`}
          >
            {/* Drawer Header */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-[#1B2A8F] via-[#2F5BEA] to-[#5B2C83] text-white flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-md">
                  <IconComponent className="w-8 h-8" />
                </div>
                <div>
                  <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-white/20 text-xs font-semibold text-blue-100 mb-1">
                    <span>{speciality.category}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading">
                    {speciality.name}
                  </h2>
                  <p className="text-xs text-blue-100/80">
                    Kanha Hospitals • Kompally, Hyderabad
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body (Scrollable) */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
              {/* Department Overview */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Clinical Overview
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {speciality.overview || speciality.shortDescription}
                </p>
              </div>

              {/* Conditions We Treat */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Conditions We Treat
                </h3>
                <div className="flex flex-wrap gap-2">
                  {speciality.conditions.map((condition, idx) => (
                    <span
                      key={idx}
                      className="bg-[#EAF3FF] text-[#1B2A8F] text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-200/60"
                    >
                      {condition}
                    </span>
                  ))}
                </div>
              </div>

              {/* Treatments & Procedures */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Treatments &amp; Procedures
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {speciality.treatments.map((treatment, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-800 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2F5BEA] shrink-0" />
                      <span>{treatment}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Doctors Placeholder Cards */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Senior Clinical Team
                </h3>
                <div className="space-y-3">
                  {(speciality.doctors || [
                    {
                      name: 'Consultant Specialist',
                      qualification: 'MD / MS / DNB (Speciality)',
                      role: 'Senior Consultant',
                      experience: '12+ Years Clinical Experience',
                    },
                  ]).map((doc, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl border border-slate-200/80 bg-white flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1B2A8F] flex items-center justify-center font-bold">
                          <User className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 font-heading">
                            {doc.name}
                          </h4>
                          <p className="text-xs text-[#2F5BEA] font-semibold">{doc.qualification}</p>
                          <p className="text-[11px] text-slate-500">{doc.role} • {doc.experience}</p>
                        </div>
                      </div>

                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        Available for OPD
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Strip */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#2F5BEA]" />
                  <span>Class-100 Laminar Flow OTs &amp; Zero-Infection Standards</span>
                </div>
                <span className="font-bold text-[#1B2A8F]">NABH Ready</span>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="tel:9091445566"
                className="w-full sm:w-1/2 py-3.5 px-4 rounded-full border-2 border-[#1B2A8F] text-[#1B2A8F] hover:bg-[#1B2A8F] hover:text-white font-bold text-xs sm:text-sm text-center transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: 9091445566</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onBookAppointment(speciality.name);
                }}
                className="w-full sm:w-1/2 py-3.5 px-4 rounded-full bg-gradient-to-r from-[#1B2A8F] via-[#2F5BEA] to-[#5B2C83] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

