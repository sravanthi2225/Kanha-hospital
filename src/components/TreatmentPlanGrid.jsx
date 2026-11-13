import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { specialitiesData } from '../data/hospitalData';

export default function TreatmentPlanGrid({ onSelectSpecialty, onOpenAllSpecialties }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  const filters = ['All', 'Primary Speciality', 'Renal Speciality', 'Surgical', 'Women\'s Health'];

  const filteredSpecialities = activeFilter === 'All'
    ? specialitiesData
    : specialitiesData.filter(s => s.category === activeFilter);

  return (
    <section id="specialities" className="py-16 sm:py-24 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header matching video frame 7 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full text-xs font-semibold mb-3 border border-emerald-200/60">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Personalized Clinical Care</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Get a treatment plan for:
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Whatever your condition, get expert help to reach your goal. Access world-class surgical precision, advanced renal care, and 24+ multi-specialities at Kanha Hospitals.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={onOpenAllSpecialties}
              className="bg-slate-900 hover:bg-[#1b4332] text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-md transition-all hover:scale-103 cursor-pointer"
            >
              <span>View All 24 Specialities</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
                →
              </div>
            </button>
          </div>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/70'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 8-Card Grid matching the video layout and interactive flip/hover state */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSpecialities.map((item, index) => {
            const isHovered = hoveredCard === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => onSelectSpecialty(item)}
                className="group relative h-[360px] rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-slate-100"
              >
                {/* Default Visual Side */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${
                    isHovered ? 'scale-105 filter blur-[1px] brightness-75' : 'scale-100'
                  }`}
                >
                  <img
                    src={item.bgImage}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/85 backdrop-blur-md text-slate-800 text-[11px] font-semibold px-3 py-1 rounded-full shadow-sm">
                    {item.badge}
                  </span>
                </div>

                {/* Bottom Normal Label & Arrow (Video matching) */}
                <div className={`absolute bottom-4 inset-x-4 flex items-center justify-between z-10 transition-opacity duration-300 ${
                  isHovered ? 'opacity-0' : 'opacity-100'
                }`}>
                  <div className="bg-slate-950 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full shadow-md">
                    {item.name.split('&')[0]}
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-md group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover Reveal Card (matching video frame 7 Weight Loss hover box) */}
                <div
                  className={`absolute inset-0 p-6 flex flex-col justify-between z-20 transition-all duration-300 ${
                    isHovered ? 'opacity-100 translate-y-0 bg-[#0e382f]/92 text-white' : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-300 mb-1 block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold leading-snug mb-3">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-200 line-clamp-4 leading-relaxed mb-4">
                      {item.shortDesc}
                    </p>
                    <div className="space-y-1.5">
                      {item.keyTreatments.slice(0, 2).map((trt, i) => (
                        <div key={i} className="flex items-center space-x-2 text-[11px] text-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{trt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] text-slate-300 font-medium">Lead Specialist</div>
                      <div className="text-xs font-bold text-white truncate max-w-[140px]">{item.doctor.split(',')[0]}</div>
                    </div>
                    <div className="flex items-center space-x-1 text-xs font-semibold text-emerald-300 bg-white/10 px-3 py-1.5 rounded-full hover:bg-white/20">
                      <span>Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
