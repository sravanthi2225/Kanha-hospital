import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Stethoscope,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Sparkles,
} from 'lucide-react';
import { specialitiesData } from '../data/specialitiesData';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

export default function BookAppointment({ selectedDepartment = '' }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      department: selectedDepartment || 'Urology',
      date: new Date().toISOString().split('T')[0],
      message: '',
    },
  });

  const onSubmit = (data) => {
    // Front-end structure phase: console.log and show success animation
    console.log('Book Appointment Submitted Data:', data);
    setSubmittedData(data);
    setIsSuccess(true);
  };

  const handleBookAnother = () => {
    reset();
    setIsSuccess(false);
    setSubmittedData(null);
  };

  return (
    <section id="appointment" className="py-20 sm:py-28 bg-[#fbfcfe] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Direct Doctor Scheduling"
          title="Book Your Hospital Appointment"
          subtitle="Reserve priority consultation with leading consultants at Kanha Hospitals, Kompally, Hyderabad."
        />

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                /* Success Animation Screen */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-4 py-1 rounded-full border border-emerald-200">
                    Appointment Request Received
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-4 mb-2 font-heading">
                    Thank You, {submittedData?.name}!
                  </h3>

                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">
                    Your appointment for <span className="font-bold text-[#1B2A8F]">{submittedData?.department}</span> on{' '}
                    <span className="font-bold text-[#1B2A8F]">{submittedData?.date}</span> has been logged. Our patient care desk will call you at{' '}
                    <span className="font-bold text-slate-900">{submittedData?.phone}</span> within 15 minutes to confirm the exact time slot.
                  </p>

                  <div className="bg-slate-50 rounded-2xl p-4 max-w-sm mx-auto text-left text-xs text-slate-600 mb-8 border border-slate-200/80 space-y-1.5">
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-500">Department:</span>
                      <span className="font-bold text-slate-800">{submittedData?.department}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-500">Hospital Location:</span>
                      <span className="font-bold text-slate-800">Kompally, Hyderabad</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-500">Helpline:</span>
                      <span className="font-bold text-[#2F5BEA]">9091445566</span>
                    </div>
                  </div>

                  <Button variant="primary" onClick={handleBookAnother}>
                    Book Another Appointment
                  </Button>
                </motion.div>
              ) : (
                /* Appointment Form */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Patient Full Name */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="e.g. Ramesh Kumar"
                          {...register('name', { required: 'Patient name is required' })}
                          className={`w-full bg-slate-50 pl-11 pr-4 py-3 rounded-xl text-sm text-slate-900 border focus:outline-none focus:ring-2 ${
                            errors.name
                              ? 'border-red-400 focus:ring-red-400'
                              : 'border-slate-200 focus:ring-[#2F5BEA]'
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1 font-medium">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          placeholder="e.g. 9091445566"
                          {...register('phone', {
                            required: 'Phone number is required',
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message: 'Please enter a valid 10-digit phone number',
                            },
                          })}
                          className={`w-full bg-slate-50 pl-11 pr-4 py-3 rounded-xl text-sm text-slate-900 border focus:outline-none focus:ring-2 ${
                            errors.phone
                              ? 'border-red-400 focus:ring-red-400'
                              : 'border-slate-200 focus:ring-[#2F5BEA]'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Department Dropdown */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                        Department / Speciality *
                      </label>
                      <div className="relative">
                        <Stethoscope className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <select
                          {...register('department', { required: 'Please select a department' })}
                          className="w-full bg-slate-50 pl-11 pr-4 py-3 rounded-xl text-sm text-slate-900 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2F5BEA] appearance-none"
                        >
                          <option value="Urology">Urology &amp; Kidney Stones</option>
                          <option value="Nephrology">Nephrology &amp; Dialysis Unit</option>
                          <option value="Andrology">Andrology &amp; Men's Health</option>
                          <option value="Cardiology">Cardiology</option>
                          <option value="Orthopaedics">Orthopaedics &amp; Joint Replacement</option>
                          <option value="General Surgery">General &amp; Laparoscopic Surgery</option>
                          <option value="Gastroenterology">Gastroenterology &amp; Endoscopy</option>
                          <option value="Obstetrics & Gynaecology">Obstetrics &amp; Gynaecology</option>
                          <option value="General Medicine">General Medicine</option>
                          <option value="Pulmonology">Pulmonology &amp; Respiratory</option>
                          <option value="Neurology">Neurology</option>
                          <option value="CT-Scan Diagnostics">CT-Scan &amp; 3D Imaging</option>
                          <option value="Emergency Care">24/7 Casualty &amp; Emergency</option>
                        </select>
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <Calendar className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          type="date"
                          {...register('date', { required: 'Please select a preferred date' })}
                          className="w-full bg-slate-50 pl-11 pr-4 py-3 rounded-xl text-sm text-slate-900 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2F5BEA]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message / Symptoms Notes */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                      Brief Symptoms or Medical History (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
                      <textarea
                        rows="3"
                        placeholder="e.g. Kidney stone pain, burning urination, dialysis enquiry, second opinion..."
                        {...register('message')}
                        className="w-full bg-slate-50 pl-11 pr-4 py-3 rounded-xl text-sm text-slate-900 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#2F5BEA]"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#1B2A8F] via-[#2F5BEA] to-[#5B2C83] text-white py-4 rounded-full font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Confirm &amp; Book Appointment</span>
                    </button>
                  </div>

                  {/* Security & Confidentiality Notice */}
                  <div className="flex items-center justify-center space-x-2 text-xs text-slate-500 pt-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>100% Confidential • NABH Accredited Patient Care</span>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

