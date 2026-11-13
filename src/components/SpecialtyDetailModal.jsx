import React, { useState } from 'react';
import { X, CheckCircle2, Stethoscope, Calendar, Award, Phone, ShieldCheck, ArrowRight } from 'lucide-react';
import { all24Specialities, specialitiesData } from '../data/hospitalData';

export default function SpecialtyDetailModal({
  isOpen,
  onClose,
  specialty,
  showAllList,
  onBookSpecialty,
}) {
  const [selectedSpec, setSelectedSpec] = useState(specialty || specialitiesData[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-[32px] shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[88vh]">
        {/* Header */}
        <div className="bg-[#0c3127] text-white p-6 sm:p-7 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-300">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">
                {showAllList ? 'All 24+ Medical Specialities' : selectedSpec.name}
              </h3>
              <p className="text-xs text-emerald-200">
                Kanha Hospitals • Super-Speciality Medical Centre
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {showAllList ? (
            /* Complete 24 Specialties Directory */
            <div className="space-y-6">
              <p className="text-xs sm:text-sm text-slate-600">
                Kanha Hospitals provides comprehensive outpatient, day-care laser surgery, and inpatient tertiary healthcare across 24 distinct clinical departments:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {all24Specialities.map((spec, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      const found = specialitiesData.find(s => s.name.toLowerCase().includes(spec.name.toLowerCase()));
                      if (found) {
                        setSelectedSpec(found);
                      }
                      onBookSpecialty(spec.name);
                    }}
                    className="p-3.5 rounded-2xl border border-slate-200/80 hover:border-emerald-500 hover:bg-emerald-50/50 cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-900">
                        {spec.name}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1">
                        {spec.desc}
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center text-slate-600 transition-colors shrink-0 ml-2">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Single Specialty Deep Dive */
            <div className="space-y-6">
              {/* Doctor & Dept Banner */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex items-center space-x-3.5">
                  <img
                    src={selectedSpec.avatar}
                    alt={selectedSpec.doctor}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md"
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                      {selectedSpec.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mt-1">
                      {selectedSpec.doctor}
                    </h4>
                    <p className="text-xs text-slate-500">{selectedSpec.experience}</p>
                  </div>
                </div>

                <button
                  onClick={() => onBookSpecialty(selectedSpec.name)}
                  className="bg-slate-900 hover:bg-[#113f36] text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-md transition-all hover:scale-102 cursor-pointer shrink-0"
                >
                  Book with {selectedSpec.doctor.split(' ')[1]}
                </button>
              </div>

              {/* Clinical Description */}
              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Clinical Overview &amp; Capabilities
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedSpec.fullDesc || selectedSpec.shortDesc}
                </p>
              </div>

              {/* Treatments Offered */}
              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                  Key Procedures &amp; Interventions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedSpec.keyTreatments.map((t, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-xs text-slate-800 bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-100"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Facilities Integration */}
              <div className="bg-[#113f36] text-white p-4 rounded-2xl flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Supported by 3 Laminar Flow OTs &amp; 24/7 Diagnostics</span>
                </div>
                <a href="tel:9091445566" className="text-emerald-300 font-bold hover:underline">
                  Ph: 9091445566
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
