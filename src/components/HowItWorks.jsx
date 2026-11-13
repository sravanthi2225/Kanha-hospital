import React from 'react';
import { ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { stepsData } from '../data/hospitalData';

export default function HowItWorks({ onOpenAppointment }) {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title matching video frame 16 */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            How It Works:{' '}
            <span className="inline-flex items-center align-middle mx-1 px-3 py-1 bg-white rounded-full shadow-sm border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1594824813572-c0fb2ef0a282?w=80&auto=format&fit=crop&q=80"
                alt="Doctor"
                className="w-6 h-6 rounded-full object-cover mr-1.5"
              />
              <span className="text-xs font-semibold text-slate-800">Simple Steps</span>
            </span>{' '}
            to Better Health
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            From initial enquiry to post-recovery wellness, our patient pathway is transparent, efficient, and compassionate.
          </p>
        </div>

        {/* 3 Step Cards matching video frame 16 & 20 */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-[110px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-slate-200 z-0"></div>

          {stepsData.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              {/* Step number badge */}
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-slate-900 border border-slate-200 text-sm font-bold shadow-sm group-hover:bg-[#1b4332] group-hover:text-white transition-colors duration-300">
                {step.step}
              </div>

              {/* Circular Image Container matching video frame 16 */}
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden p-1.5 bg-gradient-to-b from-slate-200 to-slate-100 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-103 mb-6">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="absolute bottom-2 inset-x-0 flex justify-center">
                  <span className="bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                    {step.time}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm max-w-xs leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA banner below */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenAppointment}
            className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-[#1b4332] text-white px-7 py-3.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-103 transition-all cursor-pointer"
          >
            <span>Start Your Assessment Today</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
