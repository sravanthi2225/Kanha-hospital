import React, { useState } from 'react';
import { ArrowRight, Sparkles, Activity, ShieldCheck, HeartPulse } from 'lucide-react';

export default function HealthDialCalculator({ onOpenAppointment }) {
  const [metricMode, setMetricMode] = useState('weight'); // 'weight' or 'kidney' or 'recovery'
  const [sliderValue, setSliderValue] = useState(95); // default 95 kg

  // Calculation parameters
  const weightLoss = Math.round(sliderValue * 0.18);
  const targetWeight = sliderValue - weightLoss;
  const percentageImprovement = 20;

  // Arc calculation for the dial
  const minVal = 60;
  const maxVal = 140;
  const normalized = (sliderValue - minVal) / (maxVal - minVal);
  const strokeDashoffset = 440 - (normalized * 280);

  return (
    <section id="calculator" className="py-12 sm:py-20 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Card matching video frame 22 */}
        <div className="relative rounded-[36px] sm:rounded-[44px] overflow-hidden bg-gradient-to-br from-[#0c3127] via-[#113f36] to-[#155e4b] text-white p-6 sm:p-10 lg:p-14 shadow-2xl">
          {/* Top Badge matching video frame 20 & 22 */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <span className="bg-white text-slate-900 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
              Most Popular
            </span>

            {/* Mode toggles */}
            <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-md p-1 rounded-full border border-white/10 text-xs">
              <button
                onClick={() => { setMetricMode('weight'); setSliderValue(95); }}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  metricMode === 'weight' ? 'bg-white text-slate-900 font-semibold shadow-sm' : 'text-emerald-100 hover:text-white'
                }`}
              >
                Weight & Metabolic
              </button>
              <button
                onClick={() => { setMetricMode('kidney'); setSliderValue(105); }}
                className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                  metricMode === 'kidney' ? 'bg-white text-slate-900 font-semibold shadow-sm' : 'text-emerald-100 hover:text-white'
                }`}
              >
                Laser Stone Recovery
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Interactive Speedometer / Dial Gauge (Frame 20 & 22) */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center">
                {/* SVG Dial Gauge */}
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 200 200">
                  {/* Gauge background track with tick marks */}
                  <circle
                    cx="100"
                    cy="100"
                    r="75"
                    className="text-white/20 stroke-current"
                    strokeWidth="10"
                    strokeDasharray="4 6"
                    fill="none"
                  />
                  {/* Active Green Arc */}
                  <circle
                    cx="100"
                    cy="100"
                    r="75"
                    className="text-emerald-400 stroke-current transition-all duration-300"
                    strokeWidth="12"
                    strokeDasharray="440"
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>

                {/* Dial Content overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <span className="text-xs sm:text-sm text-emerald-200 font-medium mb-1">
                    {metricMode === 'weight' ? 'Your Starting Weight:' : 'Clinical Stone Index:'}
                  </span>
                  
                  <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white my-1 flex items-baseline space-x-1">
                    <span>{sliderValue}</span>
                    <span className="text-lg sm:text-xl font-normal text-emerald-300">
                      {metricMode === 'weight' ? 'kg' : 'score'}
                    </span>
                  </div>

                  {/* Horizontal slider control */}
                  <div className="w-36 sm:w-44 my-2">
                    <input
                      type="range"
                      min={minVal}
                      max={maxVal}
                      value={sliderValue}
                      onChange={(e) => setSliderValue(Number(e.target.value))}
                      className="w-full accent-white h-1.5 bg-white/30 rounded-lg cursor-pointer"
                    />
                  </div>

                  <span className="text-xs text-emerald-200/90 font-medium">
                    {metricMode === 'weight' ? 'In one year, you could lose:' : 'Target wellness restoration:'}
                  </span>
                  <div className="text-2xl sm:text-3xl font-bold text-white mt-0.5">
                    {metricMode === 'weight' ? `${weightLoss} kg` : '98% Clear'}
                  </div>
                </div>
              </div>

              {/* Sub-indicator */}
              <div className="mt-4 text-center">
                <span className="text-xs text-emerald-200/80 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  Target Goal: {targetWeight} kg • Personalized Protocol
                </span>
              </div>
            </div>

            {/* Right Column: Title, Floating Metric Glass Card & Portrait matching Video */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4 leading-snug">
                  Achieve your health &amp; recovery goals with Kanha
                </h2>
                <p className="text-emerald-100/85 text-sm sm:text-base leading-relaxed mb-6">
                  Whether recovering from complex kidney stones, undergoing dialysis, or seeking metabolic lifestyle health, our evidence-backed treatment plans deliver measurable clinical outcomes.
                </p>
              </div>

              {/* Floating Glass Metric Card & Portrait matching Video Frame 22 */}
              <div className="relative flex flex-col sm:flex-row items-center gap-6 mt-4">
                {/* Floating Glass Card (Frame 22) */}
                <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl flex-1 w-full sm:w-auto">
                  <div className="text-4xl sm:text-5xl font-black text-white mb-1">
                    {percentageImprovement}%
                  </div>
                  <p className="text-xs text-emerald-100 mb-4 leading-relaxed font-medium">
                    Average health recovery acceleration in a 6-month clinical care period
                  </p>
                  <button
                    onClick={onOpenAppointment}
                    className="w-full bg-white text-slate-900 hover:bg-emerald-50 py-2.5 px-4 rounded-full text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 shadow-md transition-all hover:scale-102 cursor-pointer"
                  >
                    <span>Get Started</span>
                    <span>→</span>
                  </button>
                </div>

                {/* Happy Patient / Specialist Portrait (Frame 22) */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden shadow-xl shrink-0 border-2 border-white/30">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80"
                    alt="Happy Patient"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Bottom disclaimer from video */}
              <p className="text-[11px] text-emerald-200/70 mt-6 italic">
                * Based on retrospective clinical recovery data across over 15,000 surgical and outpatient treatments at Kanha Hospitals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
