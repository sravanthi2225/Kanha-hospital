import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Activity,
  Microscope,
  Scan,
  HeartPulse,
  Sparkles,
  ShieldAlert,
  Clock,
  Pill,
  Truck,
  Bed,
  FileCheck,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { facilitiesData } from '../data/facilitiesData';
import SectionHeading from '../components/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  Activity,
  Microscope,
  Scan,
  HeartPulse,
  Sparkles,
  ShieldAlert,
  Clock,
  Pill,
  Truck,
  Bed,
  FileCheck,
};

export default function FacilitiesHorizontal({ onOpenAppointment }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    // Only apply GSAP pinned horizontal scroll on desktop (screens > 1024px)
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const scrollDistance = track.scrollWidth - window.innerWidth + 120;

      const tween = gsap.to(track, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${scrollDistance}`,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="facilities"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-[#1B2A8F] text-white overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2F5BEA]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5B2C83]/25 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 lg:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            badge="Infrastructure & Technology"
            title="State-of-the-Art Medical Facilities"
            subtitle="Explore our advanced diagnostic, surgical, and inpatient infrastructure engineered for zero-infection and maximum patient safety."
            align="left"
            light={true}
          />

          <div className="hidden lg:flex items-center space-x-2 text-xs font-semibold text-blue-200 bg-white/10 px-4 py-2 rounded-full border border-white/20 shrink-0 mb-8">
            <span>Scroll Horizontally to Explore</span>
            <ArrowRight className="w-4 h-4 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Horizontal Cards Container (Pinned on Desktop, Overflow-X on Mobile) */}
      <div className="w-full overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 scrollbar-none px-4 sm:px-6 lg:px-8">
        <div
          ref={trackRef}
          className="flex space-x-6 min-w-max lg:pr-24"
        >
          {facilitiesData.map((facility, index) => {
            const IconComponent = iconMap[facility.icon] || ShieldCheck;

            return (
              <div
                key={facility.id}
                className="w-[300px] sm:w-[360px] lg:w-[400px] rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:bg-white/15 hover:border-white/40 hover:-translate-y-2 group shrink-0"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden mb-5 bg-slate-800">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#1B2A8F] text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                      {facility.badge}
                    </div>

                    {/* Icon Circle */}
                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-[#2F5BEA] to-[#5B2C83] text-white flex items-center justify-center shadow-lg">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-heading">
                    {facility.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed">
                    {facility.shortDesc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/15 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-blue-200">
                    NABH Ready • 24/7 Available
                  </span>
                  <button
                    onClick={onOpenAppointment}
                    className="text-xs font-bold text-white hover:text-blue-300 flex items-center space-x-1 cursor-pointer group-hover:translate-x-1 transition-transform"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

