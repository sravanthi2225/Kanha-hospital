import React, { useState } from 'react';
import { Search, X, ChevronRight, Stethoscope, Building2, ShieldCheck, Phone } from 'lucide-react';
import { all24Specialities, facilitiesList, specialitiesData } from '../data/hospitalData';

export default function SearchModal({ isOpen, onClose, onSelectSpecialty }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredSpecialities = all24Specialities.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.desc.toLowerCase().includes(query.toLowerCase())
  );

  const filteredFacilities = facilitiesList.filter(f =>
    f.title.toLowerCase().includes(query.toLowerCase()) ||
    f.tagline.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center space-x-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search specialities (e.g. Urology, Stones, Dialysis, CT Scan, Heart)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 text-sm sm:text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 flex items-center justify-center text-slate-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* Specialities Group */}
          <div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Medical Specialities ({filteredSpecialities.length})
            </div>
            <div className="space-y-1.5">
              {filteredSpecialities.slice(0, 8).map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    const matched = specialitiesData.find(s => s.name.toLowerCase().includes(item.name.toLowerCase())) || specialitiesData[0];
                    onSelectSpecialty(matched);
                    onClose();
                  }}
                  className="flex items-center justify-between p-3 rounded-2xl hover:bg-emerald-50/70 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <Stethoscope className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-emerald-900">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 transition-transform group-hover:translate-x-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Facilities Group */}
          {filteredFacilities.length > 0 && (
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Hospital Facilities ({filteredFacilities.length})
              </div>
              <div className="space-y-1.5">
                {filteredFacilities.map((fac) => (
                  <a
                    key={fac.id}
                    href="#facilities"
                    onClick={onClose}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-800">
                          {fac.title}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {fac.tagline}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      {fac.badge}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Emergency Box */}
          <div className="bg-[#113f36] text-white p-4 rounded-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-emerald-400 animate-bounce" />
              <div>
                <div className="text-xs font-bold">24/7 Immediate Emergency Help</div>
                <div className="text-[11px] text-emerald-200">Direct Doctor &amp; Ambulance Hotline</div>
              </div>
            </div>
            <a
              href="tel:9091445566"
              className="bg-white text-slate-900 font-bold text-xs px-3.5 py-1.5 rounded-full hover:bg-emerald-50"
            >
              9091445566
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
