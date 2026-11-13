import React from 'react';
import { Stethoscope, ShieldPlus, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function KineticStatement() {
  return (
    <section className="py-16 sm:py-24 px-3 sm:px-6 bg-[#f8faf9]">
      <div className="max-w-7xl mx-auto">
        {/* Kinetic Typography Statement with Inline Avatar Pills matching Frame 11 */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-slate-800 leading-[1.3] tracking-tight">
            A medical approach to personalized health,
            <br className="hidden sm:inline" />
            {' '}offering{' '}
            <span className="inline-flex items-center align-middle mx-1.5 px-3 py-1 bg-white rounded-full shadow-sm border border-slate-200">
              <span className="flex -space-x-1.5 mr-2">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=80&auto=format&fit=crop&q=80"
                  alt="Doctor"
                  className="w-6 h-6 rounded-full border border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1594824813572-c0fb2ef0a282?w=80&auto=format&fit=crop&q=80"
                  alt="Doctor"
                  className="w-6 h-6 rounded-full border border-white object-cover"
                />
              </span>
              <span className="text-xs font-semibold text-slate-900">expert-backed</span>
            </span>
            {' '}solutions for long-term wellness and{' '}
            <span className="inline-flex items-center align-middle mx-1.5 px-3 py-1 bg-white rounded-full shadow-sm border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=80&auto=format&fit=crop&q=80"
                alt="Patient Care"
                className="w-6 h-6 rounded-full border border-white object-cover mr-2"
              />
              <span className="text-xs font-semibold text-emerald-800">sustainable</span>
            </span>
            {' '}results.
          </h2>
        </div>

        {/* 3-Card Bento Row matching Frame 11 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Dark Emerald Green Card with organic decorative shapes */}
          <div className="relative rounded-3xl bg-[#1b4332] text-white p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-lg min-h-[360px] group hover:scale-[1.01] transition-transform">
            {/* Background organic SVG shapes matching video frame 11 */}
            <div className="absolute -right-8 -bottom-8 w-48 h-48 opacity-15 pointer-events-none">
              <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-emerald-200">
                <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C86.9,14.6,81.2,29.1,72.4,41.2C63.6,53.2,51.8,62.8,38.3,70.1C24.8,77.4,9.6,82.4,-5.2,81.4C-20,80.4,-34.5,73.4,-47.4,64.8C-60.3,56.2,-71.7,46,-78.9,33.2C-86.1,20.4,-89.2,5,-86.6,-9.4C-84.1,-23.7,-75.9,-37.1,-65.2,-47.2C-54.6,-57.4,-41.4,-64.3,-28.1,-71.9C-14.8,-79.6,-1.3,-88,12.7,-87.3C26.8,-86.5,41.8,-76.6,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>

            <div>
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-8 border border-white/30 text-white">
                <Stethoscope className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
                Expert-Led Care
              </h3>
            </div>

            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed relative z-10">
              Our medical team ensures you receive evidence-based health solutions tailored to your needs. Led by renowned urologists, nephrologists, and trauma surgeons.
            </p>
          </div>

          {/* Card 2: Center Image Card with Floating White Pill (Frame 11) */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg min-h-[360px] group hover:scale-[1.01] transition-transform flex flex-col justify-end p-6">
            <img
              src="/images/frames/frame_011.jpg"
              alt="Medical Care Team"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

            {/* Floating White Pill Message matching video frame 11 */}
            <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/60">
              <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                From consultation to discharge, our streamlined process makes accessing super-speciality care effortless.
              </p>
            </div>
          </div>

          {/* Card 3: Support at Every Step Card (Frame 11) */}
          <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-10 flex flex-col justify-between shadow-lg min-h-[360px] group hover:scale-[1.01] transition-transform">
            <div>
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center mb-8 border border-emerald-100">
                <ShieldPlus className="w-6 h-6 text-emerald-600" />
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-3">
                Support At Every Step
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We're here for you throughout your health journey, from your first consultation to ongoing care. Our experts provide guidance, check-ins, and tailored solutions to help you stay on track.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center space-x-3">
              <div className="flex -space-x-1.5">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">24</div>
                <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">7</div>
              </div>
              <span className="text-xs font-semibold text-slate-700">Dedicated Patient Coordination Desk</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
