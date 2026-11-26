import React from 'react';
import { Zap, TrendingDown, SunMedium, ShieldCheck, Layers, Building } from 'lucide-react';
import { WHY_SOLAR_REASONS } from '../../data/services';

const iconMap = {
  Zap,
  TrendingDown,
  SunMedium,
  ShieldCheck,
  Layers,
  Building
};

export default function WhyChooseSolar() {
  return (
    <section className="py-14 sm:py-24 lg:py-32 bg-[#FCFCFD] relative overflow-hidden">
      {/* Subtle Warm Background Glow at Top Right */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* Header Block matching the Reference Design */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20 space-y-2.5 sm:space-y-3.5">
          {/* Eyebrow with Flanking Orange Lines */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3">
            <span className="w-6 sm:w-14 h-0.5 bg-[#F47721] rounded-full" />
            <span className="font-eyebrow text-[10px] sm:text-xs text-[#12153D]">
              THE SOLAR ADVANTAGE
            </span>
            <span className="w-6 sm:w-14 h-0.5 bg-[#F47721] rounded-full" />
          </div>

          {/* Centered Main Headline with Orange Accent */}
          <h2 className="font-section-heading text-[#12153D] text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] leading-tight">
            Why Choose <span className="text-[#F47721]">Solar?</span>
          </h2>

          {/* Short, Elegant Subtitle */}
          <p className="font-body text-xs sm:text-base lg:text-lg text-slate-600 font-normal leading-[1.68] max-w-xl mx-auto">
            A cleaner, more reliable and future-ready energy choice for your home or business.
          </p>
        </div>

        {/* 3-Column × 2-Row Responsive Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-7">
          {WHY_SOLAR_REASONS.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || SunMedium;
            // Alternating corner accents: 0: orange, 1: navy, 2: orange, 3: navy, 4: orange, 5: navy
            const cornerColor = idx % 2 === 0 ? '#F47721' : '#30358B';

            return (
              <div
                key={idx}
                className="group relative bg-white rounded-xl sm:rounded-[1.25rem] border border-slate-200/80 hover:border-slate-300 p-4 sm:p-7 lg:p-8 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_32px_-6px_rgba(15,23,42,0.08)] transition-all duration-300 transform active:scale-[0.99] flex items-start gap-3.5 sm:gap-5 overflow-hidden"
              >
                {/* Line Icon inside Soft Orange-Tinted Container */}
                <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FFF8F3] to-[#FFF0E6] border border-orange-100/90 flex items-center justify-center text-[#F47721] shrink-0 group-hover:scale-105 group-hover:bg-orange-100/70 transition-all duration-300 shadow-xs mt-0.5">
                  <IconComponent className="w-4.5 h-4.5 sm:w-6 sm:h-6 stroke-[1.8]" />
                </div>

                {/* Text Block */}
                <div className="space-y-0.5 sm:space-y-1.5 pr-2 sm:pr-3">
                  <h3 className="font-display text-sm sm:text-[17px] font-bold text-[#12153D] group-hover:text-[#30358B] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-body text-xs sm:text-[13px] text-slate-500 leading-[1.65] font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle Alternating Corner Accent (Bottom-Right Curved Scoop) */}
                <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 pointer-events-none">
                  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                    <path 
                      d="M 32 0 C 32 17.67 17.67 32 0 32 L 32 32 Z" 
                      fill={cornerColor} 
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Subtle Solar-Panel-Inspired Background Detail at the Bottom */}
      <div className="relative mt-8 sm:mt-20 w-full h-16 sm:h-36 overflow-hidden pointer-events-none">
        {/* Soft authentic solar panel geometry image */}
        <img
          src="/images/projects/client-metalroof-wide-panorama.jpg"
          alt=""
          className="w-full h-full object-cover object-[center_75%] opacity-20 filter contrast-125"
        />
        {/* Gradients to smoothly blend the image with the section */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#FCFCFD]/70 to-[#FCFCFD]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FCFCFD] via-transparent to-[#FCFCFD]" />
      </div>
    </section>
  );
}
