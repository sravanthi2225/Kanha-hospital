import React from 'react';
import { Phone, ShieldCheck, Clock, Award } from 'lucide-react';

export default function AnnouncementBar() {
  const announcements = [
    { text: "Registered Super-Specialist Medical Team", icon: ShieldCheck },
    { text: "24/7 Emergency, Trauma & Ambulance Services: 9091445566", icon: Phone },
    { text: "Advanced Dialysis Unit with Dual-Stage RO Water", icon: Award },
    { text: "3 Laminar Flow Modular OTs (Zero Infection Standard)", icon: ShieldCheck },
    { text: "Cashless Insurance & TPA Tie-Ups with 30+ Providers", icon: Award },
    { text: "24/7 In-House Temperature-Controlled Pharmacy", icon: Clock },
    { text: "Located in Kompally / Alwal, Hyderabad (Opp O'rica Café)", icon: Phone },
  ];

  return (
    <div className="pt-2 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-full bg-[#1b4332] text-[#d8f3dc] py-1.5 px-4 shadow-sm border border-[#2d6a4f]/40">
        <div className="flex items-center space-x-6 text-xs sm:text-[13px] font-medium tracking-wide animate-marquee">
          {announcements.concat(announcements).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center space-x-2 shrink-0">
                <Icon className="w-3.5 h-3.5 text-[#52b788]" />
                <span>{item.text}</span>
                <span className="text-[#74c69d]/60 pl-3">•</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
