import React, { useState } from 'react';
import { ShieldCheck, Activity, Award, CheckCircle2, ChevronRight, Eye } from 'lucide-react';
import { facilitiesList } from '../data/hospitalData';

export default function FacilitiesShowcase({ onOpenAppointment }) {
  const [selectedFacility, setSelectedFacility] = useState(facilitiesList[0]);

  return (
    <section id="facilities" className="py-16 sm:py-24 px-3 sm:px-6 bg-[#f4f7f5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full text-xs font-semibold mb-3 border border-emerald-200/60">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Infrastructure of Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            State-of-the-Art Medical Facilities
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Equipped with ultra-modern diagnostic and surgical technology to ensure sterile safety, precision diagnosis, and rapid recovery.
          </p>
        </div>

        {/* Interactive Master-Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Facilities Selector list on left */}
          <div className="lg:col-span-5 space-y-3">
            {facilitiesList.map((facility) => {
              const isSelected = selectedFacility.id === facility.id;
              return (
                <div
                  key={facility.id}
                  onClick={() => setSelectedFacility(facility)}
                  className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                    isSelected
                      ? 'bg-white shadow-md border-emerald-500/50 scale-[1.02]'
                      : 'bg-white/70 hover:bg-white border-slate-200/70 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {facility.badge}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mt-1">
                        {facility.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {facility.tagline}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${
                      isSelected ? 'text-emerald-700 translate-x-1' : 'text-slate-400'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Facility Detailed Preview on right */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-xl border border-slate-200/80 overflow-hidden">
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-6">
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {selectedFacility.badge}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold">{selectedFacility.title}</h3>
                  <p className="text-xs text-emerald-200 font-medium">{selectedFacility.tagline}</p>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {selectedFacility.description}
              </p>

              <div className="mb-6">
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                  Technical Specifications &amp; Capabilities:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedFacility.specs.map((spec, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-800">NABH Safety Standards:</span> 100% Compliant
                </div>
                <button
                  onClick={onOpenAppointment}
                  className="bg-slate-900 hover:bg-[#1b4332] text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center space-x-2 shadow-sm transition-all hover:scale-102 cursor-pointer"
                >
                  <span>Book Facility Appointment</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
