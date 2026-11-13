import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Stethoscope, ChevronRight, Sparkles } from 'lucide-react';

export default function SearchBar({
  value,
  onChange,
  onClear,
  specialities,
  onSelectSpeciality,
}) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef(null);

  // Filter live suggestions based on input
  const suggestions = value.trim().length > 1
    ? specialities
        .filter((spec) => {
          const q = value.toLowerCase();
          const matchName = spec.name.toLowerCase().includes(q);
          const matchCondition = spec.conditions.some((c) =>
            c.toLowerCase().includes(q)
          );
          const matchTreatment = spec.treatments.some((t) =>
            t.toLowerCase().includes(q)
          );
          return matchName || matchCondition || matchTreatment;
        })
        .slice(0, 5)
    : [];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full lg:w-96">
      <div className="relative">
        <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Search condition or treatment (e.g. kidney stone, asthma, knee)..."
          className="w-full bg-white pl-11 pr-10 py-3 rounded-full text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2F5BEA] shadow-xs transition-all"
          aria-label="Search specialities and treatments"
        />

        {value && (
          <button
            onClick={() => {
              onClear();
              setShowSuggestions(false);
            }}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Live Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-slate-200/80 p-2 z-40 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 py-1.5 flex items-center justify-between">
            <span>Matching Specialities &amp; Treatments</span>
            <Sparkles className="w-3 h-3 text-[#2F5BEA]" />
          </div>

          <div className="space-y-1">
            {suggestions.map((spec) => (
              <button
                key={spec.id}
                type="button"
                onClick={() => {
                  onSelectSpeciality(spec.id);
                  setShowSuggestions(false);
                }}
                className="w-full text-left p-2.5 rounded-xl hover:bg-[#EAF3FF] transition-colors flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#1B2A8F] flex items-center justify-center shrink-0">
                    <Stethoscope className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#1B2A8F]">
                      {spec.name}
                    </div>
                    <div className="text-[10px] text-slate-500 line-clamp-1">
                      {spec.conditions.slice(0, 3).join(', ')}
                    </div>
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#2F5BEA] group-hover:translate-x-0.5 transition-transform shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

