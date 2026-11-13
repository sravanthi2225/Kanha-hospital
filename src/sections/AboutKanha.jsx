import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, ShieldCheck, Headphones, CheckCircle2, Award } from 'lucide-react';
import { aboutData } from '../data/aboutData';
import SectionHeading from '../components/SectionHeading';

const iconMap = {
  Users,
  Heart,
  ShieldCheck,
  Headphones,
};

export default function AboutKanha() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#fbfcfe] relative overflow-hidden">
      {/* Background Soft Blobs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#EAF3FF] rounded-full blur-3xl -translate-y-1/2 -z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="About Our Hospital"
          title={aboutData.mainHeading}
          subtitle={aboutData.sectionSubtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-900 group"
            >
              <img
                src={aboutData.aboutImage}
                alt="Kanha Hospitals Facilities & Patient Care"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A8F]/90 via-transparent to-transparent"></div>

              {/* Floating Quality Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/60">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#1B2A8F] to-[#2F5BEA] text-white flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#1B2A8F]">Centre of Clinical Excellence</div>
                    <div className="text-xs text-slate-500">Urology • Nephrology • Andrology</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Mission Text + 4 Trust Icons Animating One by One */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed mb-4">
                {aboutData.leadParagraph}
              </p>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-8">
                {aboutData.description}
              </p>
            </motion.div>

            {/* 4 Trust Icons Grid animating in one by one with stagger */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {aboutData.trustPillars.map((pillar, idx) => {
                const IconComponent = iconMap[pillar.icon] || ShieldCheck;

                return (
                  <motion.div
                    key={pillar.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }} // Animating in one by one
                    className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-[#2F5BEA]/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-3.5">
                      <div className="w-11 h-11 rounded-xl bg-[#EAF3FF] group-hover:bg-[#1B2A8F] text-[#1B2A8F] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300 shadow-xs">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#1B2A8F] transition-colors mb-1 font-heading">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

