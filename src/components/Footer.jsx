import React from 'react';
import { Phone, MapPin, Mail, Clock, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { hospitalInfo } from '../data/hospitalData';

export default function Footer({ onOpenAppointment }) {
  return (
    <footer className="mt-12 px-3 sm:px-6 pb-6">
      <div className="max-w-7xl mx-auto rounded-[36px] sm:rounded-[44px] bg-[#0c3127] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
        {/* Top Trust & Accreditation Badges matching video frame 34 */}
        <div className="pb-8 border-b border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-emerald-200/80 font-medium">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-white font-semibold">NABH Accredited Hospital</span>
          </div>
          <div>ISO 9001:2015 Certified</div>
          <div>30+ Cashless TPA Tie-Ups</div>
          <div>Bio-Safety Level 3 OTs</div>
          <div className="flex items-center space-x-1.5 text-white bg-white/10 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>24/7 Trauma &amp; Emergency</span>
          </div>
        </div>

        {/* 3-Column Navigation matching video frame 34 */}
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Column 1: Hospital Links */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Hospital
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#specialities" className="hover:text-white transition-colors">Specialities (24+ Depts)</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">Medical Facilities</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-white transition-colors">Our Medical Team</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">Recovery Calculator</a>
              </li>
            </ul>
            <div className="pt-2 text-[11px] text-slate-400">
              © 2026 Kanha Hospitals. All Rights Reserved.
            </div>
          </div>

          {/* Center Column: Mission Statement & CTA Button matching video frame 34 */}
          <div className="md:col-span-5 flex flex-col items-center text-center px-4">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-3 max-w-sm">
              Personalized Health Solutions for Every Stage of Your Journey
            </h3>
            <p className="text-xs text-emerald-200/80 max-w-sm mb-6 leading-relaxed">
              Expanding our commitment to better healthcare across Urology, Nephrology, Andrology &amp; Multi-Speciality Care.
            </p>
            <button
              onClick={onOpenAppointment}
              className="bg-white text-slate-900 hover:bg-emerald-50 px-7 py-3 rounded-full text-xs sm:text-sm font-bold shadow-xl transition-all hover:scale-105 flex items-center space-x-2 cursor-pointer group"
            >
              <span>Get Started</span>
              <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] group-hover:translate-x-0.5 transition-transform">
                →
              </div>
            </button>
          </div>

          {/* Column 3: Contact & Emergency Information */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Location &amp; Helpline
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <p className="leading-relaxed">
                  Panchsheel Enclave Road No. 5, Hi Tension Road, Alwal, Opp O'rica Café, Kompally, Hyderabad
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:9091445566" className="text-white font-bold hover:underline">
                  Ph: 9091445566 (24/7 Support)
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24 Hours Emergency, Pharmacy &amp; Ambulance</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>care@kanhahospitals.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Giant Watermarked Typography matching video frame 34 */}
        <div className="pt-10 border-t border-white/10 flex flex-col items-center justify-center select-none opacity-20 pointer-events-none">
          <div className="flex items-center space-x-4">
            <img
              src="/images/kanha-logo.png"
              alt="Kanha Watermark"
              className="h-14 sm:h-20 w-auto invert grayscale"
            />
          </div>
          <span className="text-4xl sm:text-7xl lg:text-9xl font-black tracking-widest text-center mt-2">
            KANHA HOSPITALS
          </span>
        </div>
      </div>
    </footer>
  );
}
