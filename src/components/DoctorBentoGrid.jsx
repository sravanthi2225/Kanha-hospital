import React, { useState } from 'react';
import { Video, Mic, MicOff, Camera, CameraOff, PhoneCall, CheckCircle, Award, Sparkles, Heart, Activity } from 'lucide-react';

export default function DoctorBentoGrid({ onOpenAppointment }) {
  const [micMuted, setMicMuted] = useState(false);
  const [cameraOff, setCameraOff] = useState(false);
  const [activeDoctor, setActiveDoctor] = useState(0);

  const teamCards = [
    {
      name: "Dr. K. Srinivas Rao",
      role: "Chief Urologist & Laser Surgeon",
      experience: "18+ Yrs",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80",
    },
    {
      name: "Dr. A. Sudheer Kumar",
      role: "Lead Nephrologist & Renal Specialist",
      experience: "15+ Yrs",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&auto=format&fit=crop&q=80",
    },
    {
      name: "Dr. B. Shravanthi",
      role: "Senior Consultant Gynaecologist",
      experience: "14+ Yrs",
      image: "https://images.unsplash.com/photo-1594824813572-c0fb2ef0a282?w=400&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section id="doctors" className="py-16 sm:py-24 px-3 sm:px-6 bg-[#f4f7f5]">
      <div className="max-w-7xl mx-auto">
        {/* Title matching video frame 24 & 27 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Doctor-Trusted Solutions,
            <br />
            Personalized To You
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base">
            Consult leading super-specialists in Hyderabad with state-of-the-art clinical infrastructure and transparent patient care.
          </p>
        </div>

        {/* 4-Card Bento Grid matching video frame 27 & 28 & 30 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1 (Top Left): Medical Team with Stacked Doctor Cards (Frame 27) */}
          <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-sm border border-slate-200/80 flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  The Kanha Medical Team
                </h3>
                <span className="flex -space-x-1">
                  <img
                    src={teamCards[0].image}
                    alt="Doctor"
                    className="w-6 h-6 rounded-full border border-white object-cover"
                  />
                  <img
                    src={teamCards[1].image}
                    alt="Doctor"
                    className="w-6 h-6 rounded-full border border-white object-cover"
                  />
                </span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm mb-6">
                All our medical team are certified and experts in all the areas we operate.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Feature pills on left */}
              <div className="sm:col-span-6 space-y-3">
                <div className="flex items-center space-x-3 bg-amber-50/80 text-slate-800 p-3 rounded-2xl border border-amber-100">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold">Personalized care</span>
                </div>

                <div className="flex items-center space-x-3 bg-emerald-50/80 text-slate-800 p-3 rounded-2xl border border-emerald-100">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold">Proven treatments</span>
                </div>

                <div className="flex items-center space-x-3 bg-sky-50/80 text-slate-800 p-3 rounded-2xl border border-sky-100">
                  <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold">Expert support</span>
                </div>
              </div>

              {/* Stacked Cards Deck on right matching video frame 27 */}
              <div className="sm:col-span-6 flex justify-center py-4">
                <div className="relative w-44 h-56">
                  {/* Card 3 (back) */}
                  <div className="absolute inset-0 bg-slate-200 rounded-2xl transform rotate-6 translate-x-2 translate-y-2 border border-slate-300/60 shadow-sm"></div>
                  {/* Card 2 (middle) */}
                  <div className="absolute inset-0 bg-slate-100 rounded-2xl transform -rotate-3 -translate-x-1 translate-y-1 border border-slate-300/80 shadow-md"></div>
                  {/* Card 1 (front) */}
                  <div className="absolute inset-0 bg-white rounded-2xl p-3 border border-slate-200 shadow-xl flex flex-col justify-between">
                    <div className="w-full h-32 rounded-xl overflow-hidden bg-slate-100">
                      <img
                        src={teamCards[activeDoctor].image}
                        alt="Doctor"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-slate-900 truncate">
                        {teamCards[activeDoctor].name}
                      </div>
                      <div className="text-[9px] text-slate-500 truncate">
                        {teamCards[activeDoctor].role}
                      </div>
                      <div className="text-[9px] text-emerald-600 font-semibold mt-0.5">
                        {teamCards[activeDoctor].experience}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 (Top Right): Connect With An Expert + Concentric Radar Orbit (Frame 27 & 28) */}
          <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-sm border border-slate-200/80 flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Connect With An Expert
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mb-6">
                Be it a senior urologist, nephrologist, surgeon, or general physician, get the support and answers you need.
              </p>
            </div>

            {/* Radar / Orbital Rings matching video frame 27 & 28 */}
            <div className="relative h-64 flex items-center justify-center overflow-hidden">
              {/* Outer ring */}
              <div className="absolute w-60 h-60 rounded-full border border-slate-200/80 animate-orbit">
                {/* Doctor Avatar positioned on outer ring */}
                <div className="absolute top-2 left-10 -translate-x-1/2 -translate-y-1/2 group/avatar">
                  <img
                    src="https://images.unsplash.com/photo-1594824813572-c0fb2ef0a282?w=80&auto=format&fit=crop&q=80"
                    alt="Doctor"
                    className="w-8 h-8 rounded-full border-2 border-white shadow-md object-cover cursor-pointer hover:scale-125 transition-transform"
                    title="Dr. B. Shravanthi - Gynaecology"
                  />
                </div>
                <div className="absolute bottom-4 right-12 translate-x-1/2 translate-y-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=80&auto=format&fit=crop&q=80"
                    alt="Doctor"
                    className="w-8 h-8 rounded-full border-2 border-white shadow-md object-cover cursor-pointer hover:scale-125 transition-transform"
                    title="Dr. V. Radhakrishna - Cardiology"
                  />
                </div>
              </div>

              {/* Middle ring */}
              <div className="absolute w-44 h-44 rounded-full border border-slate-200 animate-orbit-reverse">
                <div className="absolute top-0 right-8">
                  <img
                    src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=80&auto=format&fit=crop&q=80"
                    alt="Doctor"
                    className="w-9 h-9 rounded-full border-2 border-white shadow-md object-cover cursor-pointer hover:scale-125 transition-transform"
                    title="Dr. A. Sudheer Kumar - Nephrology"
                  />
                </div>
                <div className="absolute bottom-2 left-6">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&auto=format&fit=crop&q=80"
                    alt="Doctor"
                    className="w-8 h-8 rounded-full border-2 border-white shadow-md object-cover cursor-pointer hover:scale-125 transition-transform"
                    title="Dr. P. Rajesh Varma - Andrology"
                  />
                </div>
              </div>

              {/* Inner ring */}
              <div className="absolute w-28 h-28 rounded-full border border-emerald-300/70 bg-emerald-50/30 flex items-center justify-center">
                {/* Center Lead Specialist Avatar */}
                <div className="relative group/center cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=120&auto=format&fit=crop&q=80"
                    alt="Chief Urologist"
                    className="w-14 h-14 rounded-full border-2 border-emerald-500 shadow-xl object-cover hover:scale-110 transition-transform"
                  />
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full whitespace-nowrap shadow-sm">
                    Chief
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={onOpenAppointment}
                className="text-xs font-semibold text-slate-800 hover:text-emerald-700 underline underline-offset-4 cursor-pointer"
              >
                Schedule Direct Consultation with a Specialist →
              </button>
            </div>
          </div>

          {/* Card 3 (Bottom Left): Video Consultation Live Mockup (Frame 28 & 30) */}
          <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-sm border border-slate-200/80 flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Video Consultation
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mb-6">
                Chat one-to-one with a registered medical professional to really deep dive into your condition and diagnostic scans.
              </p>
            </div>

            {/* Video Call Interface Card matching video frame 28 & 30 */}
            <div className="relative bg-slate-900 rounded-3xl p-4 text-white shadow-xl overflow-hidden border border-slate-800">
              {/* Doctor Video Feed */}
              <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&auto=format&fit=crop&q=80"
                  alt="Dr. James Carter"
                  className={`w-full h-full object-cover transition-opacity ${cameraOff ? 'opacity-20' : 'opacity-100'}`}
                />
                
                {/* Live Badge */}
                <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center space-x-1 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  <span>LIVE OPD</span>
                </div>

                {/* Patient PiP Thumbnail */}
                <div className="absolute top-3 right-3 w-16 h-20 rounded-xl overflow-hidden border-2 border-white shadow-lg bg-slate-700">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80"
                    alt="Patient"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Interactive In-call Buttons */}
                <div className="absolute bottom-3 inset-x-0 flex justify-center space-x-2">
                  <button
                    onClick={() => setMicMuted(!micMuted)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-colors cursor-pointer ${
                      micMuted ? 'bg-red-500 text-white' : 'bg-white/25 backdrop-blur-md text-white hover:bg-white/40'
                    }`}
                  >
                    {micMuted ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => setCameraOff(!cameraOff)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-colors cursor-pointer ${
                      cameraOff ? 'bg-red-500 text-white' : 'bg-white/25 backdrop-blur-md text-white hover:bg-white/40'
                    }`}
                  >
                    {cameraOff ? <CameraOff className="w-3.5 h-3.5" /> : <Camera className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={onOpenAppointment}
                    className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs shadow-md cursor-pointer hover:bg-emerald-600"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Chat Message Bubble matching video frame 30 */}
              <div className="mt-3 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10">
                <div className="text-xs font-bold text-white">Dr. K. Srinivas Rao</div>
                <div className="text-[10px] text-slate-300 font-medium">Chief Urologist &amp; Surgeon</div>
                <div className="mt-2 bg-emerald-950/60 p-2 rounded-xl text-[11px] text-emerald-200 border border-emerald-500/30">
                  "I've evaluated your ultrasound scan. The stone is 6mm and can be treated non-invasively with laser."
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 (Bottom Right): Fast And Discreet Delivery / Patient Services (Frame 28 & 30) */}
          <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-sm border border-slate-200/80 flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Fast And Discreet Delivery
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mb-6">
                All medications and surgical care handled with utmost privacy, speed, and sterile protocols.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Progress over time bar chart widget (Frame 28 & 30) */}
              <div className="sm:col-span-6 bg-slate-800 text-white p-5 rounded-3xl shadow-xl border border-slate-700">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mb-3">
                  Progress over time
                </div>
                
                {/* Simulated bar chart matching video */}
                <div className="flex items-end space-x-2 h-20 pt-2 pb-1">
                  <div className="flex-1 bg-emerald-500/40 rounded-t-lg h-[40%] hover:bg-emerald-400 transition-all"></div>
                  <div className="flex-1 bg-emerald-500/60 rounded-t-lg h-[65%] hover:bg-emerald-400 transition-all"></div>
                  <div className="flex-1 bg-emerald-500/80 rounded-t-lg h-[80%] hover:bg-emerald-400 transition-all"></div>
                  <div className="flex-1 bg-emerald-400 rounded-t-lg h-[100%] shadow-lg"></div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700 flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold text-white">25k+</div>
                    <div className="text-[10px] text-slate-400">Treated patients</div>
                  </div>
                  <div className="flex -space-x-1.5">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&auto=format&fit=crop&q=80" alt="Avatar" className="w-6 h-6 rounded-full border border-slate-800 object-cover" />
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80" alt="Avatar" className="w-6 h-6 rounded-full border border-slate-800 object-cover" />
                  </div>
                </div>
              </div>

              {/* Image of patient & nurse support (Frame 30) */}
              <div className="sm:col-span-6 h-48 rounded-3xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&auto=format&fit=crop&q=80"
                  alt="Compassionate Medical Support"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="pt-4 text-xs text-slate-500 font-medium flex items-center justify-between">
              <span>24/7 In-House Pharmacy Available</span>
              <span className="text-emerald-700 font-semibold">Zero-Wait Protocol</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
