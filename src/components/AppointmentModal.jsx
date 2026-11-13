import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Stethoscope, Video, Building2, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { specialitiesData, hospitalInfo } from '../data/hospitalData';

export default function AppointmentModal({ isOpen, onClose, preselectedSpecialty }) {
  const [step, setStep] = useState(1);
  const [speciality, setSpeciality] = useState(preselectedSpecialty ? preselectedSpecialty.name : 'Urology & Endourology');
  const [consultType, setConsultType] = useState('in-person'); // 'in-person' or 'video'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '10:30 AM',
    notes: '',
  });
  const [confirmed, setConfirmed] = useState(false);
  const [refId, setRefId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = 'KANHA-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(id);
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-[32px] shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-[#113f36] text-white p-6 sm:p-7 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/images/kanha-logo.png" alt="Kanha Logo" className="h-8 w-auto brightness-0 invert" />
            <div>
              <h3 className="text-lg font-bold">Book Medical Consultation</h3>
              <p className="text-xs text-emerald-200">Kanha Hospitals • Kompally, Hyderabad</p>
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
          {confirmed ? (
            /* Confirmation Screen */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
                Appointment Confirmed
              </span>
              <h4 className="text-2xl font-bold text-slate-900 mt-2 mb-1">
                Thank You, {formData.name || 'Patient'}!
              </h4>
              <p className="text-xs text-slate-500 mb-6">
                Booking Reference ID: <span className="font-mono font-bold text-slate-900">{refId}</span>
              </p>

              <div className="bg-slate-50 rounded-2xl p-4 text-left text-xs space-y-2 border border-slate-200/80 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-500">Speciality:</span>
                  <span className="font-bold text-slate-900">{speciality}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Consultation Mode:</span>
                  <span className="font-bold text-emerald-800 uppercase">
                    {consultType === 'in-person' ? 'In-Person (Hospital Visit)' : 'HD Video OPD'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Date &amp; Slot:</span>
                  <span className="font-bold text-slate-900">{formData.date} at {formData.timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Contact Number:</span>
                  <span className="font-bold text-slate-900">{formData.phone || '9091445566'}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-bold text-slate-900 truncate max-w-[240px]">Kompally, Opp O'rica Café, Hyderabad</span>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-2 text-xs text-slate-600 mb-6">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>SMS and WhatsApp confirmation sent. Zero cancellation fee.</span>
              </div>

              <button
                onClick={handleReset}
                className="w-full bg-[#113f36] hover:bg-[#0c3127] text-white py-3 rounded-full text-sm font-semibold transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            /* Multi-step Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Consultation Type Selector */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  1. Select Consultation Mode
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setConsultType('in-person')}
                    className={`p-3.5 rounded-2xl border text-left flex items-center space-x-3 transition-all cursor-pointer ${
                      consultType === 'in-person'
                        ? 'border-emerald-600 bg-emerald-50/60 shadow-sm'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      consultType === 'in-person' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Hospital Visit</div>
                      <div className="text-[10px] text-slate-500">Kompally OPD Desk</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setConsultType('video')}
                    className={`p-3.5 rounded-2xl border text-left flex items-center space-x-3 transition-all cursor-pointer ${
                      consultType === 'video'
                        ? 'border-emerald-600 bg-emerald-50/60 shadow-sm'
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      consultType === 'video' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <Video className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Video Consultation</div>
                      <div className="text-[10px] text-slate-500">Online HD Call</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Speciality Selector */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  2. Department / Speciality
                </label>
                <select
                  value={speciality}
                  onChange={(e) => setSpeciality(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {specialitiesData.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.doctor.split(',')[0]})
                    </option>
                  ))}
                  <option value="General Medicine">General Medicine &amp; Health Checkup</option>
                  <option value="Advanced Dialysis">Advanced Dialysis Unit Session</option>
                  <option value="CT-Scan Diagnostics">CT-Scan &amp; 3D Imaging</option>
                  <option value="Emergency Trauma">Emergency / Casualty Walk-in</option>
                </select>
              </div>

              {/* Patient Details */}
              <div className="space-y-4">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  3. Patient Contact Information
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-600 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-600 block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9091445566"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-600 block mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-600 block mb-1">Time Slot</label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    >
                      <option>10:00 AM - 11:30 AM (Morning)</option>
                      <option>11:30 AM - 01:00 PM (Noon)</option>
                      <option>04:00 PM - 05:30 PM (Evening)</option>
                      <option>06:00 PM - 08:00 PM (Night OPD)</option>
                      <option>Immediate Emergency Walk-in</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-600 block mb-1">Brief Symptoms or Notes (Optional)</label>
                  <textarea
                    rows="2"
                    placeholder="e.g. Kidney stone pain, burning urination, dialysis consultation..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-[#113f36] text-white py-3.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Confirm &amp; Book Appointment</span>
                <span>→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
