import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Calendar,
  PhoneCall,
  Clock,
  Stethoscope,
  Users,
  Search,
  Ambulance,
  Pill,
  ShieldCheck,
  Navigation,
  ChevronDown,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import HeroVideo from '../components/HeroVideo';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const QUICK_FILTER_CHIPS = ['Urology', 'Cardiology', 'Dialysis', 'Emergency'];

const QUICK_ACCESS_TILES = [
  {
    id: 'appointment',
    label: 'Book Appointment',
    sub: 'Instant Slot Confirmation',
    icon: Calendar,
    type: 'action',
    accent: 'bg-blue-500/20 text-blue-300',
  },
  {
    id: 'emergency',
    label: '24/7 Emergency',
    sub: 'Immediate Trauma Care',
    icon: PhoneCall,
    href: 'tel:9091445566',
    accent: 'bg-red-500/20 text-red-300',
  },
  {
    id: 'ambulance',
    label: 'Ambulance',
    sub: 'ICU on Wheels',
    icon: Ambulance,
    href: 'tel:9091445566',
    accent: 'bg-amber-500/20 text-amber-300',
  },
  {
    id: 'find-doctor',
    label: 'Find a Doctor',
    sub: '24+ Specialities',
    icon: Stethoscope,
    href: '#specialities',
    accent: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    id: 'pharmacy',
    label: '24/7 Pharmacy',
    sub: 'Genuine Medicines',
    icon: Pill,
    href: '#facilities',
    accent: 'bg-purple-500/20 text-purple-300',
  },
  {
    id: 'insurance',
    label: 'Cashless TPA',
    sub: '30+ Insurance Partners',
    icon: ShieldCheck,
    href: '#facilities',
    accent: 'bg-sky-500/20 text-sky-300',
  },
  {
    id: 'directions',
    label: 'Get Directions',
    sub: 'Hi Tension Rd, Kompally',
    icon: Navigation,
    href: 'https://maps.google.com/?q=Kanha+Hospitals+Kompally+Hyderabad',
    accent: 'bg-indigo-500/20 text-indigo-300',
  },
];

export default function Hero({ onOpenAppointment }) {
  const [searchQuery, setSearchQuery] = useState('');
  const heroRef = useRef(null);
  const videoWrapperRef = useRef(null);

  // GSAP ScrollTrigger subtle video parallax
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !heroRef.current || !videoWrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(videoWrapperRef.current, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    const target = document.getElementById('specialities');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChipClick = (term) => {
    setSearchQuery(term);
    const target = document.getElementById('specialities');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const stats = document.getElementById('about') || document.querySelector('section:nth-of-type(2)');
    if (stats) {
      stats.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full h-[100svh] min-h-[580px] lg:h-screen lg:min-h-[660px] max-h-[1100px] overflow-hidden flex flex-col justify-between"
    >
      {/* 1. BACKGROUND VIDEO LAYER WITH RESPONSIVE PARALLAX */}
      <div
        ref={videoWrapperRef}
        className="hero-video-container absolute inset-0 -top-[10%] w-full h-[120%] pointer-events-none z-0 will-change-transform"
      >
        <HeroVideo />
      </div>

      {/* 2. GRADIENT OVERLAYS FOR OPTIMAL TEXT READABILITY & PRESERVING KIDNEYS ON RIGHT */}
      {/* Desktop overlay: Left-to-right navy gradient with soft fade on right */}
      <div className="absolute inset-0 z-1 pointer-events-none hidden lg:block bg-gradient-to-r from-[#1B2A8F]/95 via-[#1B2A8F]/85 to-transparent"></div>

      {/* Mobile / Tablet overlay: Top-to-bottom navy gradient fading softly toward bottom */}
      <div className="absolute inset-0 z-1 pointer-events-none lg:hidden bg-gradient-to-b from-[#1B2A8F]/95 via-[#1B2A8F]/85 to-[#1B2A8F]/60"></div>

      {/* Ambient Radial Vignette & Bottom Section Blend */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-radial from-transparent via-[#1B2A8F]/20 to-[#1B2A8F]/50"></div>
      <div className="absolute bottom-0 inset-x-0 h-28 z-1 pointer-events-none bg-gradient-to-t from-[#1B2A8F] via-[#1B2A8F]/60 to-transparent"></div>

      {/* 3. HERO CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center pt-24 sm:pt-28 lg:pt-32 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-8 text-left">
            {/* Glass Location Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 px-3.5 sm:px-4 py-1.5 rounded-full shadow-lg mb-4 sm:mb-5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white tracking-wide flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-300 shrink-0" />
                Kanha Hospitals · Kompally, Hyderabad
              </span>
            </motion.div>

            {/* H1 Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[30px] sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white font-heading tracking-tight leading-[1.12] mb-3 sm:mb-4 drop-shadow-md"
            >
              Care that's always here.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-blue-100 to-white">
                Your Health, Our Priority.
              </span>
            </motion.h1>

            {/* Sub-line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-blue-100/95 max-w-2xl font-normal leading-relaxed mb-5 sm:mb-6"
            >
              Expert, high-quality and compassionate healthcare across multiple specialties. Advanced Urology,
              Nephrology, Dialysis &amp; 24/7 Emergency Care with cutting-edge medical technology.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6"
            >
              <button
                type="button"
                onClick={onOpenAppointment}
                className="min-h-[48px] px-7 py-3.5 rounded-xl bg-white text-[#1B2A8F] font-bold text-sm sm:text-base shadow-xl hover:bg-sky-50 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-[#2F5BEA]" />
                Book Appointment
              </button>

              <a
                href="tel:9091445566"
                className="min-h-[48px] px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/30 backdrop-blur-md shadow-lg hover:border-white/50 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <PhoneCall className="w-4 h-4 text-red-400 group-hover:rotate-12 transition-transform duration-200" />
                <span className="hidden sm:inline">24/7 Emergency:</span>
                <span className="sm:hidden">Call Emergency:</span>
                <span className="text-sky-200 font-extrabold tracking-wide">9091445566</span>
              </a>
            </motion.div>

            {/* Three Glass Chips */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none py-1 mb-5 sm:mb-6 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              <div className="shrink-0 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-sm">
                <Clock className="w-4 h-4 text-red-300" />
                <span>24/7 Emergency</span>
              </div>
              <div className="shrink-0 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-sm">
                <Stethoscope className="w-4 h-4 text-sky-300" />
                <span>24+ Specialities</span>
              </div>
              <div className="shrink-0 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-sm">
                <Users className="w-4 h-4 text-emerald-300" />
                <span>Expert Medical Team</span>
              </div>
            </motion.div>

            {/* Hero Quick Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-xl"
            >
              <form
                onSubmit={handleSearchSubmit}
                className="relative flex items-center bg-white/15 backdrop-blur-xl border border-white/30 rounded-2xl p-1.5 shadow-2xl focus-within:border-sky-300 focus-within:bg-white/25 transition-all"
              >
                <Search className="w-5 h-5 text-sky-200 ml-3 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search doctors, specialities, services…"
                  className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-blue-200/70 focus:outline-hidden font-normal"
                />
                <button
                  type="submit"
                  className="shrink-0 px-4 py-2 bg-white text-[#1B2A8F] font-bold text-xs sm:text-sm rounded-xl hover:bg-sky-50 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Quick Filter Chips below search */}
              <div className="flex items-center gap-2 mt-2.5 text-xs text-blue-100/90 overflow-x-auto scrollbar-none pb-1">
                <span className="font-semibold text-white/80 shrink-0">Popular:</span>
                {QUICK_FILTER_CHIPS.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => handleChipClick(chip)}
                    className="shrink-0 bg-white/10 hover:bg-white/25 border border-white/20 rounded-lg px-2.5 py-0.5 text-blue-100 hover:text-white transition-colors cursor-pointer"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN (DESKTOP): Keeps the glowing kidneys video clean & unobstructed */}
          <div className="hidden lg:block lg:col-span-4 pointer-events-none"></div>
        </div>
      </div>

      {/* 4. QUICK-ACCESS TILES STRIP OVERLAPPING HERO BOTTOM */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-3 sm:pb-4">
        <div className="flex items-center gap-2.5 overflow-x-auto scrollbar-none py-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {QUICK_ACCESS_TILES.map((tile) => {
            const Icon = tile.icon;

            if (tile.type === 'action') {
              return (
                <button
                  key={tile.id}
                  type="button"
                  onClick={onOpenAppointment}
                  className="shrink-0 flex items-center gap-3 bg-white/15 hover:bg-white/25 backdrop-blur-xl border border-white/25 hover:border-white/40 rounded-xl px-3.5 py-2.5 shadow-lg transition-all duration-200 hover:-translate-y-0.5 group text-left cursor-pointer min-h-[48px]"
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${tile.accent} transition-transform group-hover:scale-110`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-tight group-hover:text-sky-200 transition-colors">
                      {tile.label}
                    </div>
                    <div className="text-[10px] text-blue-200/80">{tile.sub}</div>
                  </div>
                </button>
              );
            }

            return (
              <a
                key={tile.id}
                href={tile.href}
                target={tile.href.startsWith('http') ? '_blank' : undefined}
                rel={tile.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="shrink-0 flex items-center gap-3 bg-white/15 hover:bg-white/25 backdrop-blur-xl border border-white/25 hover:border-white/40 rounded-xl px-3.5 py-2.5 shadow-lg transition-all duration-200 hover:-translate-y-0.5 group text-left cursor-pointer min-h-[48px]"
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${tile.accent} transition-transform group-hover:scale-110`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight group-hover:text-sky-200 transition-colors">
                    {tile.label}
                  </div>
                  <div className="text-[10px] text-blue-200/80">{tile.sub}</div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Animated Scroll Down Indicator */}
        <div className="hidden sm:flex items-center justify-center pt-1">
          <button
            type="button"
            onClick={scrollToNext}
            aria-label="Scroll down"
            className="inline-flex items-center gap-1.5 text-xs text-blue-200/80 hover:text-white transition-colors cursor-pointer"
          >
            <span className="text-[11px] font-medium tracking-wider uppercase">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 text-sky-300 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
