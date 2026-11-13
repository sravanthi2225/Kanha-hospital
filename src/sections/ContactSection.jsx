import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';
import { contactData } from '../data/contactData';
import SectionHeading from '../components/SectionHeading';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#fbfcfe] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Reach Our Hospital"
          title="Visit Kanha Hospitals"
          subtitle="Centrally located in Kompally / Alwal, Hyderabad with seamless connectivity from Suchitra, Medchal Highway, and Secunderabad."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards & Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF3FF] text-[#1B2A8F] flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin className="w-6 h-6 text-[#2F5BEA]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#2F5BEA] mb-1">
                    Hospital Campus Address
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-2">
                    {contactData.hospitalName}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {contactData.address}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Kanha+Hospitals+Kompally+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-[#1B2A8F] hover:text-[#2F5BEA]"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Helpline & Emergency Numbers */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 shadow-xs">
                  <Phone className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-red-600 mb-1">
                    24/7 Casualty &amp; Helpline
                  </div>
                  <a
                    href={`tel:${contactData.phone}`}
                    className="text-xl sm:text-2xl font-black text-[#1B2A8F] hover:text-[#2F5BEA] block font-heading mb-1"
                  >
                    {contactData.phone}
                  </a>
                  <p className="text-xs text-slate-500">
                    Round-the-clock emergency admission, ambulance dispatch &amp; pharmacy.
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EAF3FF] text-[#1B2A8F] flex items-center justify-center shrink-0 shadow-xs">
                  <Clock className="w-6 h-6 text-[#2F5BEA]" />
                </div>
                <div className="w-full">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#2F5BEA] mb-1">
                    Operating Schedule
                  </div>
                  <div className="space-y-2 mt-2 text-xs sm:text-sm">
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-600 font-medium">Emergency &amp; Trauma:</span>
                      <span className="font-bold text-red-600">{contactData.hours.emergency}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-600 font-medium">In-House Pharmacy:</span>
                      <span className="font-bold text-emerald-700">{contactData.hours.pharmacy}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-1.5">
                      <span className="text-slate-600 font-medium">Dialysis Unit:</span>
                      <span className="font-bold text-[#1B2A8F]">{contactData.hours.dialysis}</span>
                    </div>
                    <div className="pt-1">
                      <span className="text-slate-500 text-xs">{contactData.hours.opd}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100 h-[480px] lg:h-[540px] relative">
              <iframe
                title="Kanha Hospitals Location Map"
                src={contactData.googleMapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-[1.05]"
              ></iframe>

              {/* Overlay location pill */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-200 text-xs flex items-center space-x-2">
                <Navigation className="w-4 h-4 text-[#2F5BEA]" />
                <div>
                  <span className="font-bold text-slate-900">Kanha Hospitals</span>
                  <span className="text-slate-500 block text-[10px]">Opp. O'rica Café, Kompally</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

