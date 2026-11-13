import React, { useState } from 'react';
import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import StatsStrip from '../sections/StatsStrip';
import AboutKanha from '../sections/AboutKanha';
import FacilitiesHorizontal from '../sections/FacilitiesHorizontal';
import SpecialitiesGrid from '../sections/SpecialitiesGrid';
import ChairmanMessage from '../sections/ChairmanMessage';
import WhyChooseUs from '../sections/WhyChooseUs';
import EmergencyCtaBand from '../sections/EmergencyCtaBand';
import BookAppointment from '../sections/BookAppointment';
import Testimonials from '../sections/Testimonials';
import ContactSection from '../sections/ContactSection';
import Footer from '../sections/Footer';
import ScrollProgressBar from '../components/ScrollProgressBar';
import FloatingActions from '../components/FloatingActions';
import SpecialtyDetailModal from '../components/SpecialtyDetailModal';
import AppointmentModal from '../components/AppointmentModal';
import { useLenis } from '../hooks/useLenis';

export default function Home() {
  // Initialize Lenis smooth scroll synced with GSAP
  useLenis();

  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedSpeciality, setSelectedSpeciality] = useState(null);
  const [specialityModalOpen, setSpecialityModalOpen] = useState(false);

  const handleOpenAppointment = () => {
    setAppointmentModalOpen(true);
  };

  const handleSelectSpeciality = (speciality) => {
    setSelectedSpeciality(speciality);
    setSpecialityModalOpen(true);
  };

  const handleBookFromModal = () => {
    setSpecialityModalOpen(false);
    setAppointmentModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* 1. Scroll Progress Bar at Top */}
      <ScrollProgressBar />

      {/* 2. Sticky Navbar */}
      <Navbar onOpenAppointment={handleOpenAppointment} />

      {/* 3. Hero Section (id="home") */}
      <Hero onOpenAppointment={handleOpenAppointment} />

      {/* 4. Stats Strip */}
      <StatsStrip />

      {/* 5. About Kanha (id="about") */}
      <AboutKanha />

      {/* 6. Facilities (GSAP Pinned Horizontal-Scroll Section) (id="facilities") */}
      <FacilitiesHorizontal onOpenAppointment={handleOpenAppointment} />

      {/* 7. Specialities (24 Departments Animated Grid) (id="specialities") */}
      <SpecialitiesGrid
        onSelectSpeciality={handleSelectSpeciality}
        onOpenAppointment={handleOpenAppointment}
      />

      {/* 8. Chairman's Message (id="chairman") */}
      <ChairmanMessage onOpenAppointment={handleOpenAppointment} />

      {/* 9. Why Choose Us (id="why-choose-us") */}
      <WhyChooseUs onOpenAppointment={handleOpenAppointment} />

      {/* 10. Emergency CTA Band */}
      <EmergencyCtaBand />

      {/* 11. Book Appointment Form (id="appointment") */}
      <BookAppointment />

      {/* 12. Patient Testimonials Swiper Carousel */}
      <Testimonials />

      {/* 13. Contact & Map Section (id="contact") */}
      <ContactSection />

      {/* 14. Footer */}
      <Footer onOpenAppointment={handleOpenAppointment} />

      {/* Floating Action Buttons: WhatsApp, Call 24/7, Back to Top */}
      <FloatingActions />

      {/* Modals */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        preselectedSpecialty={selectedSpeciality}
      />

      {selectedSpeciality && (
        <SpecialtyDetailModal
          isOpen={specialityModalOpen}
          onClose={() => setSpecialityModalOpen(false)}
          specialty={selectedSpeciality}
          onBookSpecialty={handleBookFromModal}
        />
      )}
    </div>
  );
}

