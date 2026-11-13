import React from 'react';
import { ArrowRight, ShieldCheck, Heart, Users, Sparkles, Activity, Clock, Award } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function HeroSection({ onOpenAppointment }) {
  return (
    <section className="relative px-3 sm:px-6 pt-3 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Card Container matching the video layout */}
        <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-slate-900 min-h-[560px] md:min-h-[640px] lg:min-h-[680px] flex items-center shadow-2xl">
          {/* Background Image with Cinematic Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/frames/frame_001.jpg"
              alt="Kanha Hospitals Care"
              className="w-full h-full object-cover object-center brightness-[0.78] contrast-[1.05] scale-102 transition-transform duration-1000"
            />
            {/* Soft modern gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/20"></div>
          </div>

          {/* Content Overlays */}
          <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 py-16 sm:py-20 flex flex-col justify-between">
            <div className="max-w-2xl">
              {/* Pillar badges matching flyer: CARE • COMPASSION • TRUST */}
              <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                <span className="flex items-center space-x-1 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
                  <Heart className="w-3.5 h-3.5 fill-emerald-400" />
                  <span>Care</span>
                </span>
                <span className="text-white/40">•</span>
                <span className="flex items-center space-x-1 text-sky-300 text-xs font-semibold tracking-wider uppercase">
                  <Users className="w-3.5 h-3.5" />
                  <span>Compassion</span>
                </span>
                <span className="text-white/40">•</span>
                <span className="flex items-center space-x-1 text-amber-300 text-xs font-semibold tracking-wider uppercase">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Trust</span>
                </span>
              </div>

              {/* Main Headline exact match from video */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-5">
                Personalized Health <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-100 to-white">
                  Solutions for Every
                </span>{" "}
                <br />
                Stage of Your Journey
              </h1>

              {/* Tagline from Kanha Hospital flyer */}
              <p className="text-slate-200 text-base sm:text-lg md:text-xl font-normal max-w-xl leading-relaxed mb-8 drop-shadow-sm">
                Expanding our commitment to better healthcare. State-of-the-art Urology, Nephrology, Andrology & 24+ Multi-Specialities with 24/7 Emergency Care in Kompally, Hyderabad.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenAppointment}
                  className="bg-white text-slate-900 hover:bg-emerald-50 px-7 py-3.5 rounded-full text-base font-semibold shadow-xl hover:shadow-2xl hover:scale-103 transition-all duration-200 flex items-center space-x-3 cursor-pointer group"
                >
                  <span>Book Consultation</span>
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">
                    →
                  </div>
                </button>

                <a
                  href="#specialities"
                  className="bg-white/15 backdrop-blur-md hover:bg-white/25 text-white border border-white/30 px-6 py-3.5 rounded-full text-base font-medium transition-all duration-200 flex items-center space-x-2"
                >
                  <span>Explore Specialities</span>
                </a>
              </div>

              {/* Highlights row */}
              <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-300 font-medium">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-white font-semibold">3 Laminar Flow OTs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-emerald-300" />
                  <span>16+ Bed Dialysis Unit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-emerald-300" />
                  <span>24/7 Emergency & ICU</span>
                </div>
              </div>
            </div>

            {/* Floating Trust Card (matching video frame 2 bottom-right floating badge) */}
            <div className="hidden lg:block absolute bottom-12 right-12 z-20">
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-3xl shadow-2xl border border-white/60 max-w-xs transition-all hover:scale-103 duration-300">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&auto=format&fit=crop&q=80"
                      alt="Doctor"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1594824813572-c0fb2ef0a282?w=100&auto=format&fit=crop&q=80"
                      alt="Doctor"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=100&auto=format&fit=crop&q=80"
                      alt="Doctor"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">25,000+</div>
                    <div className="text-[11px] font-medium text-slate-500">Happy Patients Treated</div>
                  </div>
                </div>
                <div className="text-xs text-slate-600 bg-slate-50 rounded-xl p-2 font-medium flex items-center justify-between">
                  <span>NABH Accredited Safety</span>
                  <span className="text-emerald-600 font-bold">✓ Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
