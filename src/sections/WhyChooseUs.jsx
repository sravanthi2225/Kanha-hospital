import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, ShieldCheck, Clock, CheckCircle2, Droplets, Sparkles } from 'lucide-react';
import { whyChooseData } from '../data/whyChooseData';
import SectionHeading from '../components/SectionHeading';

const iconMap = {
  Award,
  Heart,
  ShieldCheck,
  Clock,
};

export default function WhyChooseUs({ onOpenAppointment }) {
  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-[#f8faff] relative overflow-hidden">
      {/* Background soft gradients */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#2F5BEA]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Why Choose Us"
          title={whyChooseData.sectionTitle}
          subtitle={whyChooseData.lead}
        />

        {/* 4 Animated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {whyChooseData.cards.map((card, idx) => {
            const IconComponent = iconMap[card.icon] || Award;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-slate-100 hover:border-[#2F5BEA]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF3FF] group-hover:bg-gradient-to-r group-hover:from-[#1B2A8F] group-hover:to-[#2F5BEA] text-[#1B2A8F] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-[#2F5BEA]/40 transition-colors font-heading">
                      {card.number}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#2F5BEA] block mb-1">
                    {card.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1B2A8F] transition-colors mb-3 font-heading">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center text-xs font-semibold text-[#2F5BEA]">
                  <span>Verified NABH Metric</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Kidney & Urology Specialized Excellence Banner with Parallax Graphic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-gradient-to-r from-[#1B2A8F] via-[#2F5BEA] to-[#5B2C83] text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Parallax Decorative Background */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 opacity-15 pointer-events-none">
            <Droplets className="w-full h-full text-white" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center space-x-2 bg-white/15 px-3 py-1 rounded-full text-xs font-semibold text-blue-200 uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Super Speciality Focus</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-3 font-heading">
                {whyChooseData.urologySpecialtyDetail.title}
              </h3>
              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed mb-6 max-w-2xl">
                {whyChooseData.urologySpecialtyDetail.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyChooseData.urologySpecialtyDetail.points.map((pt, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs sm:text-sm text-blue-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-4">
              <button
                onClick={onOpenAppointment}
                className="w-full bg-white text-[#1B2A8F] hover:bg-blue-50 py-3.5 px-6 rounded-full text-sm font-bold shadow-xl transition-all hover:scale-103 cursor-pointer text-center"
              >
                Schedule Consultation
              </button>
              <a
                href="tel:9091445566"
                className="w-full bg-white/15 hover:bg-white/25 border border-white/30 text-white py-3.5 px-6 rounded-full text-sm font-semibold transition-all text-center"
              >
                Call: 9091445566
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

