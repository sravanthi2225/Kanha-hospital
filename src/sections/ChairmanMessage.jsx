import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Award, CheckCircle2, ShieldCheck, Stethoscope, Sparkles } from 'lucide-react';
import { chairmanData } from '../data/chairmanData';
import SectionHeading from '../components/SectionHeading';

export default function ChairmanMessage({ onOpenAppointment }) {
  return (
    <section id="chairman" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#EAF3FF] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Leadership & Vision"
          title="Chairman's Message"
          subtitle="A personal commitment to transformative care, patient dignity, and world-class clinical outcomes."
        />

        {/* Elegant Two-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait with Animated Gradient Ring + Credentials */}
          <div className="lg:col-span-5 flex flex-col items-center text-center lg:text-left lg:items-start sticky top-28">
            <div className="relative mb-6">
              {/* Animated Gradient Ring around Portrait */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 bg-gradient-to-tr from-[#1B2A8F] via-[#2F5BEA] to-[#5B2C83] rounded-3xl blur-md opacity-70"
              />

              {/* Portrait Frame */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-92 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <img
                  src={chairmanData.portraitPlaceholder}
                  alt={chairmanData.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-3 left-3 right-3 text-white text-center">
                  <div className="text-xs font-bold font-heading">{chairmanData.name}</div>
                  <div className="text-[10px] text-blue-200">{chairmanData.designation}</div>
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="w-full max-w-sm">
              <h3 className="text-xl sm:text-2xl font-black text-[#1B2A8F] font-heading">
                {chairmanData.name}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-[#2F5BEA] mb-1">
                {chairmanData.designation}
              </p>
              <p className="text-xs text-slate-600 font-semibold mb-3">
                {chairmanData.credentials}
              </p>

              {/* Experience Badge */}
              <div className="inline-flex items-center space-x-2 bg-[#EAF3FF] text-[#1B2A8F] px-3.5 py-1.5 rounded-full text-xs font-bold mb-4">
                <Award className="w-4 h-4 text-[#2F5BEA]" />
                <span>{chairmanData.experience}</span>
              </div>

              {/* Memberships */}
              <div className="text-left bg-slate-50 p-4 rounded-2xl border border-slate-200/80 w-full">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Professional Memberships:
                </div>
                <div className="space-y-1.5">
                  {chairmanData.memberships.map((membership, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2F5BEA] shrink-0" />
                      <span className="font-medium">{membership}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Message Text with Large Quote Mark Revealing Line by Line */}
          <div className="lg:col-span-7">
            {/* Large Decorative Quote Icon */}
            <div className="text-[#2F5BEA]/20 mb-2">
              <Quote className="w-16 h-16 fill-current" />
            </div>

            {/* Message Paragraphs Revealing Line by Line on Scroll */}
            <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
              {chairmanData.messageParagraphs.map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="relative pl-4 border-l-2 border-[#2F5BEA]/40 font-normal text-slate-600"
                >
                  "{paragraph}"
                </motion.p>
              ))}
            </div>

            {/* Dr. Deepak Bachu's Expertise Chips Section */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-4 h-4 text-[#2F5BEA]" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1B2A8F] font-heading">
                  Dr. Deepak Bachu's Clinical Expertise
                </h4>
              </div>

              {/* 9 Expertise Chips */}
              <div className="flex flex-wrap gap-2.5">
                {chairmanData.expertiseChips.map((chip, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="bg-[#EAF3FF] hover:bg-blue-100 text-[#1B2A8F] text-xs font-semibold px-3.5 py-2 rounded-full border border-blue-200/60 shadow-2xs hover:scale-103 transition-all cursor-default"
                  >
                    {chip}
                  </motion.div>
                ))}
              </div>

              {/* Consultation prompt */}
              <div className="mt-8">
                <button
                  onClick={onOpenAppointment}
                  className="bg-gradient-to-r from-[#1B2A8F] via-[#2F5BEA] to-[#5B2C83] text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-lg hover:shadow-xl hover:scale-103 transition-all cursor-pointer flex items-center space-x-2"
                >
                  <Stethoscope className="w-4 h-4" />
                  <span>Book Consultation with Dr. Deepak Bachu</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

