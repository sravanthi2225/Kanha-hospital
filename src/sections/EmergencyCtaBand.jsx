import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, Truck, ShieldAlert, ArrowRight } from 'lucide-react';
import { emergencyContact } from '../data/navigationData';

export default function EmergencyCtaBand() {
  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white overflow-hidden shadow-2xl">
      {/* Background Ambulance Icon sliding in smoothly across the band */}
      <motion.div
        animate={{ x: ['120%', '-120%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
      >
        <Truck className="w-56 h-56 text-white" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          {/* Emergency Title & Pulsing Icon */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-5">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/40 pulse-emergency shrink-0">
              <Clock className="w-8 h-8 text-white animate-spin-slow" />
            </div>

            <div>
              <div className="inline-flex items-center space-x-2 bg-black/20 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-1">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping"></span>
                <span>Immediate Trauma &amp; Casualty Response</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white font-heading">
                Need Urgent Medical Care?
              </h2>
              <p className="text-xs sm:text-sm text-red-100 max-w-xl">
                24/7 Casualty, cardiac ambulance dispatch, round-the-clock emergency doctors, and ICU on standby.
              </p>
            </div>
          </div>

          {/* Big Phone Number & Direct Call Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href={`tel:${emergencyContact.phone}`}
              className="bg-white text-red-700 hover:bg-red-50 px-8 py-4 rounded-full text-xl sm:text-2xl font-black shadow-2xl hover:scale-105 transition-all duration-200 flex items-center space-x-3 cursor-pointer group"
            >
              <Phone className="w-6 h-6 animate-bounce" />
              <span>{emergencyContact.displayPhone}</span>
            </a>

            <div className="text-xs text-red-100 font-semibold text-center sm:text-left">
              <div>Kompally, Hyderabad</div>
              <div className="text-white font-bold">Zero Admission Delay</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

