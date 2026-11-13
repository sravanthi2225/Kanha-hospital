import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  LayoutGrid,
  List,
  Phone,
  Calendar,
  Plus,
  Stethoscope,
  HeartPulse,
  Clock,
  Users,
  ShieldCheck,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';
import {
  specialitiesList,
  SPECIALITY_CATEGORIES,
} from '../data/specialities';
import FeaturedCard from '../components/specialities/FeaturedCard';
import SearchBar from '../components/specialities/SearchBar';
import CategoryTabs from '../components/specialities/CategoryTabs';
import SpecialityCard from '../components/specialities/SpecialityCard';
import SpecialityDrawer from '../components/specialities/SpecialityDrawer';

export default function SpecialitiesGrid({ onSelectSpeciality, onOpenAppointment }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isListView, setIsListView] = useState(false);
  const [activeDrawerSpeciality, setActiveDrawerSpeciality] = useState(null);

  // Compute category counts dynamically
  const categoryCounts = useMemo(() => {
    const counts = { All: specialitiesList.length };
    SPECIALITY_CATEGORIES.forEach((cat) => {
      if (cat !== 'All') {
        counts[cat] = specialitiesList.filter((s) => s.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filter specialities by category and search query (matches name, description, conditions, treatments)
  const filteredSpecialities = useMemo(() => {
    return specialitiesList.filter((spec) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        spec.name.toLowerCase().includes(q) ||
        spec.shortDescription.toLowerCase().includes(q) ||
        spec.conditions.some((c) => c.toLowerCase().includes(q)) ||
        spec.treatments.some((t) => t.toLowerCase().includes(q));

      const matchesCategory =
        activeCategory === 'All' || spec.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const handleCardClick = (speciality) => {
    setActiveDrawerSpeciality(speciality);
    if (onSelectSpeciality) onSelectSpeciality(speciality);
  };

  const handleSelectFromSuggestion = (specialityId) => {
    const found = specialitiesList.find((s) => s.id === specialityId);
    if (found) {
      setActiveDrawerSpeciality(found);
      if (onSelectSpeciality) onSelectSpeciality(found);
    }
  };

  return (
    <section id="specialities" className="py-20 sm:py-28 bg-[#fbfcfe] relative overflow-hidden">
      {/* Background soft ambient orbs & medical-cross patterns */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#EAF3FF] rounded-full blur-3xl opacity-80"></div>
        <div className="absolute top-1/2 right-5 w-96 h-96 bg-[#2F5BEA]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#5B2C83]/5 rounded-full blur-3xl"></div>

        {/* Faint decorative medical cross shapes */}
        <div className="absolute top-28 left-8 text-blue-900/5">
          <Plus className="w-24 h-24" strokeWidth={3} />
        </div>
        <div className="absolute top-96 right-12 text-[#2F5BEA]/5">
          <Plus className="w-32 h-32" strokeWidth={3} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-4 bg-[#EAF3FF] text-[#1B2A8F] border border-blue-200/60 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#2F5BEA] animate-pulse"></span>
            <span>MULTIDISCIPLINARY CARE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1B2A8F] font-heading leading-tight"
          >
            Our Medical Specialities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            24 specialised departments, one trusted hospital.
          </motion.p>

          {/* Animated Count-Up Banner: 24 Specialities · 24/7 Emergency · Expert Doctors */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full border border-slate-200 shadow-xs text-xs sm:text-sm font-semibold text-slate-700"
          >
            <div className="flex items-center space-x-1.5 text-[#1B2A8F]">
              <Stethoscope className="w-4 h-4 text-[#2F5BEA]" />
              <span className="font-bold">24 Specialities</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center space-x-1.5 text-red-600">
              <Clock className="w-4 h-4" />
              <span className="font-bold">24/7 Emergency</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center space-x-1.5 text-emerald-700">
              <Users className="w-4 h-4" />
              <span className="font-bold">Expert Doctors</span>
            </div>
          </motion.div>
        </div>

        {/* 2. CENTERS OF EXCELLENCE BENTO GRID (3 Large Cards) */}
        <FeaturedCard
          onSelectSpeciality={(id) => {
            const found = specialitiesList.find((s) => s.id === id);
            if (found) handleCardClick(found);
          }}
          onOpenAppointment={onOpenAppointment}
        />

        {/* 3. FIND YOUR SPECIALITY TOOLBAR (Sticky below navbar) */}
        <div className="sticky top-20 z-30 py-4 mb-8 bg-[#fbfcfe]/95 backdrop-blur-md border-y border-slate-200/80 transition-all">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Search Input with Auto-Suggestions */}
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
              specialities={specialitiesList}
              onSelectSpeciality={handleSelectFromSuggestion}
            />

            {/* Category Tabs */}
            <div className="w-full lg:w-auto flex-1 max-w-2xl">
              <CategoryTabs
                categories={SPECIALITY_CATEGORIES}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
                counts={categoryCounts}
              />
            </div>

            {/* View Mode & Count Indicator */}
            <div className="flex items-center justify-between w-full lg:w-auto space-x-4 shrink-0 text-xs text-slate-500 font-medium">
              <span>
                Showing <strong className="text-slate-900">{filteredSpecialities.length}</strong> of 24
              </span>

              {/* Grid / List Toggle */}
              <div className="flex items-center bg-white rounded-xl p-1 border border-slate-200 shadow-2xs">
                <button
                  onClick={() => setIsListView(false)}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    !isListView
                      ? 'bg-[#1B2A8F] text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                  aria-label="Grid view"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsListView(true)}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    isListView
                      ? 'bg-[#1B2A8F] text-white shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4. SPECIALITY GRID / LIST (4 cols desktop, 2 tablet, 1 mobile) */}
        <motion.div
          layout
          className={
            isListView
              ? 'space-y-3'
              : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'
          }
        >
          <AnimatePresence mode="popLayout">
            {filteredSpecialities.map((speciality) => (
              <SpecialityCard
                key={speciality.id}
                speciality={speciality}
                onSelect={handleCardClick}
                isListView={isListView}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredSpecialities.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 px-6 bg-white rounded-3xl border border-slate-200 max-w-lg mx-auto shadow-sm my-8"
          >
            <div className="w-16 h-16 rounded-full bg-blue-50 text-[#1B2A8F] flex items-center justify-center mx-auto mb-4">
              <Stethoscope className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 font-heading mb-1">
              No matching specialities found
            </h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              We couldn't find a department matching "{searchQuery}". Please call our medical desk or book a general consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:9091445566"
                className="w-full sm:w-auto bg-[#1B2A8F] text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#2F5BEA] transition-colors flex items-center justify-center space-x-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us: 9091445566</span>
              </a>
              <button
                onClick={onOpenAppointment}
                className="w-full sm:w-auto bg-slate-100 text-slate-800 hover:bg-slate-200 px-5 py-2.5 rounded-full text-xs font-bold transition-colors cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}

        {/* 6. HELP CTA CARD (End of Section) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-[#1B2A8F] via-[#2F5BEA] to-[#5B2C83] text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10 text-center lg:text-left">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white shrink-0">
                <HelpCircle className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading mb-1">
                  Not sure which speciality you need?
                </h3>
                <p className="text-xs sm:text-sm text-blue-100/90 max-w-xl">
                  Our patient care team and medical triage coordinators are available round-the-clock to guide you to the right specialist.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="tel:9091445566"
                className="w-full sm:w-auto bg-white text-[#1B2A8F] hover:bg-blue-50 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-lg transition-all hover:scale-103 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping mr-1"></div>
                <Phone className="w-4 h-4 text-[#1B2A8F]" />
                <span>Talk to our care team (9091445566)</span>
              </a>

              <button
                onClick={onOpenAppointment}
                className="w-full sm:w-auto bg-white/15 hover:bg-white/25 border border-white/30 text-white px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 5. DETAIL DRAWER (Right-side slide-in / full-screen on mobile) */}
      <SpecialityDrawer
        isOpen={!!activeDrawerSpeciality}
        onClose={() => setActiveDrawerSpeciality(null)}
        speciality={activeDrawerSpeciality}
        onBookAppointment={(specialityName) => {
          if (onOpenAppointment) onOpenAppointment(specialityName);
        }}
      />
    </section>
  );
}
