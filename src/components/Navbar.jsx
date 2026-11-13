import React, { useState, useEffect } from 'react';
import { Search, Phone, Calendar, Menu, X, ChevronDown, Shield, Stethoscope, Building2, MapPin } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function Navbar({ onOpenAppointment, onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [facilitiesDropdown, setFacilitiesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-2 z-40 px-3 sm:px-6 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl md:rounded-full transition-all duration-300 px-4 md:px-8 py-3 flex items-center justify-between ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border border-slate-200/80'
            : 'bg-white shadow-sm border border-slate-100'
        }`}
      >
        {/* Left Navigation Links */}
        <div className="hidden lg:flex items-center space-x-7 text-[15px] font-medium text-slate-700">
          <a
            href="#specialities"
            className="hover:text-[#1b4332] transition-colors relative group py-1"
          >
            Specialities
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2d6a4f] transition-all group-hover:w-full"></span>
          </a>

          <div
            className="relative"
            onMouseEnter={() => setFacilitiesDropdown(true)}
            onMouseLeave={() => setFacilitiesDropdown(false)}
          >
            <a
              href="#facilities"
              className="hover:text-[#1b4332] transition-colors flex items-center space-x-1 py-1"
            >
              <span>Facilities</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${facilitiesDropdown ? 'rotate-180' : ''}`} />
            </a>

            {facilitiesDropdown && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <a href="#facilities" className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-emerald-50 text-slate-800 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">3 Laminar Flow OTs</div>
                    <div className="text-xs text-slate-500">Sterile airflow & modular setup</div>
                  </div>
                </a>
                <a href="#facilities" className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-emerald-50 text-slate-800 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-800">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Dialysis & Urology</div>
                    <div className="text-xs text-slate-500">16+ High-flux dialysis stations</div>
                  </div>
                </a>
                <a href="#facilities" className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-emerald-50 text-slate-800 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">CT Scan & 24/7 ICU</div>
                    <div className="text-xs text-slate-500">Multi-slice rapid diagnostics</div>
                  </div>
                </a>
              </div>
            )}
          </div>

          <a
            href="#how-it-works"
            className="hover:text-[#1b4332] transition-colors relative group py-1"
          >
            How It Works
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2d6a4f] transition-all group-hover:w-full"></span>
          </a>

          <a
            href="#doctors"
            className="hover:text-[#1b4332] transition-colors relative group py-1"
          >
            Doctors
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2d6a4f] transition-all group-hover:w-full"></span>
          </a>
        </div>

        {/* Center: Brand Logo */}
        <a href="#" className="flex items-center space-x-3 focus:outline-none py-1">
          <img
            src="/images/kanha-logo.png"
            alt="Kanha Hospitals Logo"
            className="h-9 sm:h-11 w-auto object-contain hover:scale-102 transition-transform"
          />
        </a>

        {/* Right Controls */}
        <div className="hidden sm:flex items-center space-x-3 md:space-x-4">
          <button
            onClick={onOpenSearch}
            className="p-2.5 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            title="Search specialities or doctors"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <a
            href="tel:9091445566"
            className="hidden xl:flex items-center space-x-2 text-xs font-semibold text-emerald-900 bg-emerald-50 border border-emerald-200/70 px-3.5 py-2 rounded-full hover:bg-emerald-100 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-700 animate-bounce" />
            <span>24/7: 9091445566</span>
          </a>

          <button
            onClick={onOpenAppointment}
            className="flex items-center space-x-2 bg-slate-900 hover:bg-[#1b4332] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-slate-900/10 transition-all duration-200 hover:shadow-lg hover:scale-102 cursor-pointer"
          >
            <span>Book Appointment</span>
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
              →
            </span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={onOpenSearch}
            className="p-2 rounded-full text-slate-600 hover:bg-slate-100"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white rounded-3xl p-6 shadow-2xl border border-slate-200/80 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4 text-base font-medium text-slate-800">
            <a
              href="#specialities"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl hover:bg-slate-50"
            >
              Specialities (24+ Departments)
            </a>
            <a
              href="#facilities"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl hover:bg-slate-50"
            >
              State-of-the-Art Facilities
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl hover:bg-slate-50"
            >
              How It Works
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl hover:bg-slate-50"
            >
              Health Recovery Calculator
            </a>
            <a
              href="#doctors"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl hover:bg-slate-50"
            >
              Our Medical Team
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl hover:bg-slate-50"
            >
              Hospital Location & Map
            </a>

            <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
              <a
                href="tel:9091445566"
                className="flex items-center justify-center space-x-2 text-emerald-800 bg-emerald-50 py-3 rounded-2xl font-semibold"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Emergency: 9091445566</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full bg-slate-900 text-white py-3.5 rounded-2xl font-semibold flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Book Appointment</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
