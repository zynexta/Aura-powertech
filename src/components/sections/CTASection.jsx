import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export default function CTASection() {
  return (
    <section className="py-14 sm:py-24 lg:py-32 bg-[#12153D] text-white relative overflow-hidden">
      {/* Subtle Warm Solar Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F47721]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#30358B]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center relative z-10 space-y-4 sm:space-y-8">
        
        <div className="font-eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs text-[#F47721]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
          <span>START YOUR CLEAN ENERGY JOURNEY</span>
        </div>

        <h2 className="font-section-heading text-white max-w-4xl mx-auto text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] leading-tight">
          Your Journey to Smarter Energy Starts Here.
        </h2>

        <p className="font-body text-xs sm:text-base lg:text-lg text-slate-200/90 max-w-2xl mx-auto leading-[1.68] font-normal">
          Connect with Aura Powertech Solutions to discuss customized residential or commercial solar energy installations in Thiruvananthapuram, Kerala.
        </p>

        {/* Action Buttons: Stacked on narrow screens, row on tablet/desktop */}
        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5 max-w-md sm:max-w-none mx-auto">
          <Link
            to="/contact"
            className="font-btn group inline-flex items-center justify-center gap-2.5 bg-[#F47721] hover:bg-[#E06512] active:bg-[#C9540C] text-white text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg shadow-orange-950/40 hover:shadow-orange-900/50 transition-all duration-300 transform active:scale-[0.98] text-center min-h-[46px]"
          >
            <span>Talk to Our Experts</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
            className="font-btn inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 active:bg-white/25 text-white border border-white/20 text-xs sm:text-sm px-6 sm:px-7 py-3.5 sm:py-4 rounded-full backdrop-blur-md transition-all duration-300 text-center min-h-[46px] active:scale-[0.98]"
          >
            <Phone className="w-4 h-4 text-[#F47721]" />
            <span>{COMPANY_INFO.primaryPhone}</span>
          </a>
        </div>

        {/* Address confirmation */}
        <p className="text-[10px] sm:text-xs text-slate-300/80 pt-2 sm:pt-4">
          Offices at Kudappanakunnu &amp; Amaravila, Thiruvananthapuram, Kerala
        </p>

      </div>
    </section>
  );
}
