import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { testimonials } from '../data/hospitalData';

export default function OutcomeStatsSection({ onOpenAppointment }) {
  const [counter, setCounter] = useState(58);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Counter animation from 58 to 98 (as seen in video frame 31 to 32)
  useEffect(() => {
    let current = 58;
    const interval = setInterval(() => {
      if (current < 98) {
        current += 1;
        setCounter(current);
      } else {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-24 px-3 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Section Layout matching video frame 31 & 32 */}
        <div className="rounded-[36px] bg-[#f8faf9] border border-slate-200/80 p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                  Kanha – Your <span className="text-emerald-700">trusted partner</span>
                  <br />
                  in healthcare
                </h2>
                <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
                  Take control, make health your goal
                </p>
              </div>

              {/* Stats & Mini thumbnail block matching Frame 31 & 32 */}
              <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Mini card with image matching video frame 32 */}
                <div className="sm:col-span-6 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-3">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                    <img
                      src="/images/frames/frame_032.jpg"
                      alt="Care Support"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800 leading-snug">
                      Caring for yourself has never felt so good. Let's get going
                    </p>
                    <span className="text-[10px] text-emerald-700 font-bold mt-1 inline-block">
                      Kompally, Hyderabad
                    </span>
                  </div>
                </div>

                {/* Animated 98% counter (Frame 31 & 32) */}
                <div className="sm:col-span-6 flex items-baseline space-x-3">
                  <div className="text-6xl sm:text-7xl font-extrabold text-slate-900 tracking-tight flex items-baseline">
                    <span>{counter}</span>
                    <span className="text-4xl text-emerald-700 font-bold">%</span>
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed font-medium">
                    of patients report faster recovery with our personalized clinical programmes.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Large Image Card (matching Frame 32) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/3 group">
                <img
                  src="/images/frames/frame_004.jpg"
                  alt="Happy Recovered Patients"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full px-3 py-1 text-[11px] font-bold text-slate-800 shadow-sm">
                  ★ 4.9/5 Google Rating
                </div>

                <div className="absolute bottom-6 inset-x-6 text-white">
                  <p className="text-sm sm:text-base font-semibold drop-shadow-md">
                    "From laser stone removal to post-op recovery, Kanha gave me my life back."
                  </p>
                  <span className="text-xs text-emerald-200 block mt-1">
                    — Patient recovery verified by NABH safety standards
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Patient Testimonial Slider */}
          <div className="mt-12 pt-8 border-t border-slate-200/80">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Patient Recovery Stories
              </div>
              <div className="flex space-x-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      activeTestimonial === i ? 'w-8 bg-[#1b4332]' : 'bg-slate-300'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-1">
                  <Quote className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-bold text-slate-900">
                      {testimonials[activeTestimonial].name}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-emerald-700 font-semibold">
                      {testimonials[activeTestimonial].speciality}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    "{testimonials[activeTestimonial].review}"
                  </p>
                </div>
              </div>

              <div className="shrink-0">
                <span className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-100">
                  {testimonials[activeTestimonial].outcome}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
