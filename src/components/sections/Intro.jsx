import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Wrench } from 'lucide-react';

export default function Intro() {
  return (
    <section id="brand-intro" className="py-14 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* 
            Mobile Order Rule: First Image (order-1), then Content (order-2).
            Desktop Order: Content on Left (lg:order-1), Image on Right (lg:order-2).
          */}

          {/* Visual Column: Order-1 on mobile, Order-2 on Desktop */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-slate-100 group aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/images/projects/elevated-blue-structure.jpg"
                alt="Aura Powertech heavy-duty elevated structural steel solar mounting platform in Kerala"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              {/* Bottom Caption Pill */}
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 p-2.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/50 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F47721] block">
                    Authentic Kerala Installation
                  </span>
                  <p className="text-[11px] sm:text-xs font-semibold text-[#30358B] mt-0.5 line-clamp-1 sm:line-clamp-none">
                    Elevated structural steel solar array & walkway
                  </p>
                </div>
                <span className="text-[9px] sm:text-[11px] font-bold text-[#30358B] bg-slate-100 px-2 sm:px-3 py-0.5 sm:py-1.5 rounded-full shrink-0 ml-2">
                  Field Photo
                </span>
              </div>
            </div>
          </div>

          {/* Main Text Content: Order-2 on mobile, Order-1 on Desktop */}
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-4 sm:space-y-6 xl:pr-4">
            {/* 1. Eyebrow */}
            <div className="font-eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100/80 text-[11px] sm:text-xs text-[#F47721]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
              <span>Renewable Energy Architecture</span>
            </div>

            {/* 2. Heading */}
            <h2 className="font-section-heading text-[#30358B] text-2xl xs:text-[26px] sm:text-4xl lg:text-[44px] leading-tight">
              A Smarter Way to <br className="hidden sm:inline" />Power Your World.
            </h2>

            {/* 3. Supporting Description */}
            <div className="space-y-3 sm:space-y-4">
              <p className="font-body text-sm sm:text-base lg:text-lg text-slate-600 leading-[1.68] font-normal">
                Aura Powertech Solutions delivers engineering-grade solar energy ecosystems for discerning residences and forward-thinking commercial properties across Kerala.
              </p>

              <p className="font-body text-xs sm:text-sm lg:text-base text-slate-500 leading-[1.68]">
                We design our systems specifically for the demands of the tropical coastal climate: pairing high-efficiency monocrystalline solar panels with custom structural engineering, multi-stage surge protection, and intelligent Deye hybrid inverters.
              </p>
            </div>

            {/* 4. Supporting Highlights */}
            <div className="pt-1 sm:pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="border-l-2 border-[#F47721] pl-3.5 sm:pl-4 py-1 bg-slate-50/50 sm:bg-transparent rounded-r-xl sm:rounded-none">
                <h4 className="font-display text-sm font-bold text-[#30358B]">Site-Specific Engineering</h4>
                <p className="font-body text-xs text-slate-500 mt-0.5 leading-[1.6]">
                  Engineered tilt angles, shade mitigation, and high-wind structural anchoring.
                </p>
              </div>

              <div className="border-l-2 border-[#30358B] pl-3.5 sm:pl-4 py-1 bg-slate-50/50 sm:bg-transparent rounded-r-xl sm:rounded-none">
                <h4 className="font-display text-sm font-bold text-[#30358B]">Industrial Reliability</h4>
                <p className="font-body text-xs text-slate-500 mt-0.5 leading-[1.6]">
                  Deye multi-MPPT inverters, isolated breakers, and certified earthing systems.
                </p>
              </div>
            </div>

            {/* 5. CTA */}
            <div className="pt-2">
              <Link
                to="/about"
                className="font-btn inline-flex items-center gap-2 text-xs font-semibold text-[#30358B] hover:text-[#F47721] transition-colors group py-2"
              >
                <span>Discover our engineering approach</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
