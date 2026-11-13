import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Calendar, Clock, ChevronRight, ShieldCheck } from 'lucide-react';
import { navigationLinks, emergencyContact } from '../data/navigationData';
import { useScrollSpy } from '../hooks/useScrollSpy';

export default function Navbar({ onOpenAppointment }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Section IDs to spy on
  const sectionIds = ['home', 'about', 'facilities', 'specialities', 'chairman', 'why-choose-us', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 100);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-2.5 shadow-md shadow-blue-950/5'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-3 shrink-0 focus:outline-none">
              <img
                src="/images/kanha-logo.png"
                alt="Kanha Hospitals Logo"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 hover:scale-102"
              />
            </a>

            {/* Desktop Navigation Links with Active Indicator */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200/60 shadow-xs">
              {navigationLinks.map((link) => {
                const targetId = link.href.replace('#', '');
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-700 hover:text-[#1B2A8F]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-[#1B2A8F] rounded-full -z-10 shadow-sm"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right CTAs: 24/7 Emergency Chip + Book Appointment Button */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* 24/7 Emergency Call Chip */}
              <a
                href={`tel:${emergencyContact.phone}`}
                className="flex items-center space-x-2 bg-[#EAF3FF] hover:bg-blue-100 text-[#1B2A8F] px-3.5 py-2 rounded-full border border-[#2F5BEA]/20 transition-all duration-200 group shadow-xs"
              >
                <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center pulse-emergency">
                  <Phone className="w-3 h-3 animate-bounce" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-red-600 leading-none">
                    24/7 Emergency
                  </div>
                  <div className="text-xs font-black text-[#1B2A8F] leading-tight">
                    {emergencyContact.displayPhone}
                  </div>
                </div>
              </a>

              {/* Book Appointment Button */}
              <button
                onClick={onOpenAppointment}
                className="flex items-center space-x-2 bg-gradient-to-r from-[#1B2A8F] via-[#2F5BEA] to-[#5B2C83] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md shadow-blue-900/20 hover:shadow-lg hover:scale-103 transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              <a
                href={`tel:${emergencyContact.phone}`}
                className="p-2 rounded-full bg-red-50 text-red-600 sm:hidden"
                aria-label="Call Emergency"
              >
                <Phone className="w-5 h-5 animate-pulse" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-2xl bg-white text-slate-800 shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 bg-white/95 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-slate-200 lg:hidden"
          >
            <div className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-slate-800 font-semibold hover:bg-[#EAF3FF] hover:text-[#1B2A8F] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}

              <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
                <a
                  href={`tel:${emergencyContact.phone}`}
                  className="flex items-center justify-center space-x-2 bg-red-50 text-red-600 py-3 rounded-2xl font-bold text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>24/7 Emergency: {emergencyContact.displayPhone}</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointment();
                  }}
                  className="w-full bg-gradient-to-r from-[#1B2A8F] to-[#2F5BEA] text-white py-3.5 rounded-2xl font-bold text-sm shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment Now</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

