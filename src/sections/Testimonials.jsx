import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Star, Quote, ChevronLeft, ChevronRight, Award, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';
import SectionHeading from '../components/SectionHeading';

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Patient Stories"
          title="Words of Trust and Healing"
          subtitle="Real recovery experiences from patients and families treated at Kanha Hospitals, Kompally, Hyderabad."
        />

        {/* Swiper Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-14"
          >
            {testimonialsData.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="h-full rounded-3xl bg-[#f8faff] p-8 sm:p-10 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    {/* Stars and Quote */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-1 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-[#2F5BEA]/20" />
                    </div>

                    {/* Review text */}
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                      "{item.review}"
                    </p>
                  </div>

                  {/* Patient Info & Outcome Badge */}
                  <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 font-heading">
                        {item.patientName}
                      </h4>
                      <div className="text-xs text-slate-500">
                        {item.treatment} • {item.location}
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80 shrink-0">
                      {item.outcome}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

