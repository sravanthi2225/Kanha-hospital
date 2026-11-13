import React from 'react';
import { motion } from 'framer-motion';
import {
  Droplets,
  Crosshair,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Users,
} from 'lucide-react';

export default function FeaturedCard({ onSelectSpeciality, onOpenAppointment }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14">
      {/* 1. Urology & Andrology (Largest, 2x Size Bento Hero Card) */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="lg:col-span-8 rounded-[32px] bg-gradient-to-br from-[#101b63] via-[#1B2A8F] to-[#2F5BEA] text-white p-7 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between group border border-white/20"
      >
        {/* Soft decorative background ambient orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-400/30 transition-all duration-700"></div>
        <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-[#5B2C83]/30 rounded-full blur-3xl pointer-events-none"></div>

        {/* Top Badges */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/25 text-xs font-semibold text-blue-100 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Centre of Excellence • Flagship</span>
          </div>
          <span className="text-xs font-bold bg-white/90 text-[#1B2A8F] px-3 py-1 rounded-full shadow-sm">
            Super Speciality
          </span>
        </div>

        {/* Content & Illustration Layout */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
          <div className="md:col-span-7">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white mb-3 font-heading leading-tight">
              Urology &amp; Andrology
            </h3>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed mb-6 font-normal">
              Pioneering 100W Holmium laser kidney stone pulverization (RIRS), HoLEP prostate enucleation, laparoscopic reconstructive urology, and confidential men's health sanctuary under Dr. Deepak Bachu.
            </p>

            {/* Treatment Chips */}
            <div className="flex flex-wrap gap-2">
              {[
                'Laser Stone Surgery',
                'TURP & Laser Prostate',
                'Laparoscopic Urology',
                'Uro-Oncology',
                'Paediatric Urology',
                "Men's Health",
              ].map((chip) => (
                <span
                  key={chip}
                  className="bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20 transition-all cursor-default"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Kidney / Urology Medical Illustration with Hover Zoom & Glow */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-3xl overflow-hidden border-2 border-white/30 shadow-2xl bg-white/10 backdrop-blur-md group-hover:scale-105 transition-transform duration-500">
              <img
                src="/images/kidney-urology.jpg"
                alt="Kidney and Urology Illustration"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A8F]/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-center bg-black/40 backdrop-blur-md rounded-xl py-1 px-2 text-[10px] text-blue-100 font-semibold border border-white/20">
                100W Laser Technology • Day-Care
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons: Meet Our Urologists + Book Appointment */}
        <div className="relative z-10 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-blue-200">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>15+ Years Clinical Leadership in Urology</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#chairman"
              className="bg-white/15 hover:bg-white/25 text-white border border-white/30 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 cursor-pointer"
            >
              <Users className="w-4 h-4" />
              <span>Meet our Urologists</span>
            </a>

            <button
              onClick={() => {
                onSelectSpeciality('urology-andrology');
                onOpenAppointment();
              }}
              className="bg-white text-[#1B2A8F] hover:bg-blue-50 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-lg transition-all hover:scale-103 flex items-center space-x-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Right Column: 2 Cards (1x each: Nephrology & Dialysis + Critical Care & Emergency) */}
      <div className="lg:col-span-4 flex flex-col justify-between gap-6">
        {/* Card 2: Nephrology & Dialysis (1x) */}
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.25 }}
          onClick={() => onSelectSpeciality('nephrology')}
          className="flex-1 rounded-[28px] bg-white p-7 shadow-sm hover:shadow-xl border border-slate-200/90 hover:border-[#2F5BEA]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#EAF3FF] rounded-full blur-2xl group-hover:bg-[#2F5BEA]/10 transition-colors -z-0"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF3FF] text-[#2F5BEA] group-hover:bg-[#1B2A8F] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                <Crosshair className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#1B2A8F] px-2.5 py-1 rounded-full border border-blue-100">
                24/7 Renal Care
              </span>
            </div>

            <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#1B2A8F] transition-colors mb-2 font-heading">
              Nephrology &amp; Dialysis
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
              Comprehensive renal replacement therapy equipped with a 16-bed high-flux dialysis unit and dual-pass RO purification.
            </p>

            <div className="space-y-1.5 mb-4">
              {['16+ High-Flux Hemodialysis Beds', 'Dual-Stage RO Water Standard', 'Diabetic Kidney Care'].map((trt, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2F5BEA] shrink-0" />
                  <span>{trt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2F5BEA] group-hover:translate-x-1 transition-transform">
            <span>Learn more &amp; Protocols</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Card 3: Critical Care & Emergency (1x) */}
        <motion.div
          whileHover={{ y: -5 }}
          transition={{ duration: 0.25 }}
          onClick={() => onSelectSpeciality('critical-care')}
          className="flex-1 rounded-[28px] bg-white p-7 shadow-sm hover:shadow-xl border border-slate-200/90 hover:border-red-400/50 transition-all duration-300 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-2xl group-hover:bg-red-100 transition-colors -z-0"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-red-50 text-red-700 px-2.5 py-1 rounded-full border border-red-200">
                24/7 Tertiary ICU
              </span>
            </div>

            <h4 className="text-xl font-bold text-slate-900 group-hover:text-red-700 transition-colors mb-2 font-heading">
              Critical Care &amp; Emergency
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
              Level-3 multidisciplinary ICU with round-the-clock intensivists, advanced mechanical ventilators, and priority resuscitation.
            </p>

            <div className="space-y-1.5 mb-4">
              {['Level-3 ICU Ventilator Fleet', 'Rapid Cardiac Trauma Response', 'Arterial Blood Gas Lab'].map((trt, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span>{trt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-red-600 group-hover:translate-x-1 transition-transform">
            <span>Learn more &amp; Triage</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

