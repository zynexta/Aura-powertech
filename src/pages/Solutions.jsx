import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import PageHeroBanner from '../components/layout/PageHeroBanner';
import { SERVICES } from '../data/services';

export default function Solutions() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Solar Solutions & Systems — Aura Powertech Solutions | Kerala";
    
    // Check if there is an anchor hash
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-white min-h-screen">
      {/* =========================================================================
          1. DEDICATED MOBILE SOLUTIONS LAYOUT (< 768px)
          Exact match to attached reference image media_1795637822088_c02e6828.jpg
          ========================================================================= */}
      <div className="md:hidden">
        {/* Compact Hero Section (Height ~175-185px excluding header) */}
        <section className="relative overflow-hidden min-h-[175px] xs:min-h-[185px] flex items-center bg-[#03172E] text-white">
          {/* Background Photograph */}
          <div className="absolute inset-0 z-0">
            <picture>
              <source srcSet="/images/solutions-hero-mobile.webp" type="image/webp" />
              <img
                src="/images/solutions-hero-mobile.jpg"
                alt="Commercial rooftop solar PV array with inverters and engineering equipment"
                className="w-full h-full object-cover object-[60%_center]"
                fetchPriority="high"
              />
            </picture>

            {/* Horizontal Gradient (88% -> 65% -> 30% -> 4%) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, rgba(3, 23, 46, 0.88) 0%, rgba(3, 23, 46, 0.65) 30%, rgba(3, 23, 46, 0.30) 60%, rgba(3, 23, 46, 0.04) 100%)'
              }}
            />

            {/* Vertical Gradient (2% -> 8% -> 25% -> 70%) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(3, 23, 46, 0.02) 0%, rgba(3, 23, 46, 0.08) 35%, rgba(3, 23, 46, 0.25) 65%, rgba(3, 23, 46, 0.70) 100%)'
              }}
            />

            {/* Top Bar Gradient for Mobile Header */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#03172E]/80 to-transparent pointer-events-none" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 w-full px-5 xs:px-6 pt-20 xs:pt-[82px] pb-7 xs:pb-8">
            <div className="max-w-[310px]">
              {/* Eyebrow: Short Orange Line + ENGINEERED SOLAR CAPABILITIES */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-[3px] bg-[#F47721] rounded-[2px] inline-block shrink-0" />
                <span className="text-[10px] xs:text-[10.5px] font-bold uppercase tracking-[0.9px] text-white">
                  ENGINEERED SOLAR CAPABILITIES
                </span>
              </div>

              {/* Heading: Solar Energy Solutions (Single line at 390px) */}
              <h1 className="text-[25px] xs:text-[27px] font-extrabold text-white tracking-[-0.8px] leading-[1.15] mb-2 font-display">
                Solar Energy <span className="text-[#F47721]">Solutions</span>
              </h1>

              {/* Supporting Description */}
              <p className="text-[11px] xs:text-[11.5px] text-white/95 leading-[1.52] max-w-[290px] font-normal">
                From residential rooftops to commercial facilities and Deye hybrid inverters, explore our comprehensive range of solar systems tailored for Kerala.
              </p>
            </div>
          </div>

          {/* Signature Orange SVG Wave Decoration */}
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-[28px] pointer-events-none z-10 block"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="solutionsOrangeWave"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#FF761C" />
                <stop offset="100%" stopColor="#FF9800" />
              </linearGradient>
            </defs>

            {/* Orange Wave Ribbon */}
            <path
              d="M0,38 C380,100 1000,105 1440,0 L1440,100 L0,100 Z"
              fill="url(#solutionsOrangeWave)"
            />

            {/* White Section Base */}
            <path
              d="M0,66 C380,116 1000,116 1440,38 L1440,100 L0,100 Z"
              fill="#FFFFFF"
            />
          </svg>
        </section>

        {/* Solutions Listing Section */}
        <section className="bg-white px-4 xs:px-4.5 pt-6 pb-10">
          <div className="space-y-5 xs:space-y-5.5">
            {SERVICES.map((service, idx) => (
              <div
                key={service.id}
                id={`mobile-${service.id}`}
                className="group bg-white rounded-[14px] overflow-hidden shadow-[0_6px_16px_rgba(18,48,95,0.08),0_2px_5px_rgba(18,48,95,0.03)] border border-slate-100 transition-all"
              >
                {/* Solution Image Header */}
                <div className="relative aspect-[2.08/1] overflow-hidden bg-slate-100 rounded-t-[14px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />

                  {/* Solution Number Badge (Top-Left) */}
                  <div className="absolute top-3 left-3.5 bg-white/96 text-[#031B35] text-[9.5px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-2xs">
                    {`SOLUTION 0${idx + 1}`}
                  </div>
                </div>

                {/* Solution Card Content Area */}
                <div className="p-3.5 xs:p-4 bg-white">
                  <div className="grid grid-cols-[1fr_auto] gap-2.5 items-start">
                    {/* Left: Title & Description */}
                    <div>
                      <h3 className="text-[16px] xs:text-[17px] font-extrabold text-[#031B35] tracking-tight leading-[1.25] font-display">
                        {service.title}
                      </h3>
                      <p className="text-[11px] xs:text-[11.5px] text-[#52647B] font-normal leading-[1.55] mt-1.5">
                        {service.id === 'residential-solar' 
                          ? "Reliable and cost-effective solar systems for homes in Kerala, designed for long-term savings and energy independence."
                          : service.shortDescription
                        }
                      </p>
                    </div>

                    {/* Right: Soft-Orange Arrow Button */}
                    <Link
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="w-[32px] h-[32px] rounded-[10.5px] bg-[#FFF0E2] flex items-center justify-center text-[#F47721] shrink-0 active:scale-95 transition-transform cursor-pointer"
                      aria-label={`Inquire about ${service.title}`}
                    >
                      <ArrowRight className="w-4.5 h-4.5 text-[#F47721] stroke-[2.2]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* =========================================================================
          2. PRESERVED DESKTOP & TABLET LAYOUT (>= 768px)
          Untouched for large screens
          ========================================================================= */}
      <div className="hidden md:block">
        {/* Header Banner with Precision Grading */}
        <PageHeroBanner
          badge="Engineered Solar Capabilities"
          title="Solar Energy"
          highlightWord="Solutions"
          description="From residential rooftops to commercial facilities and Deye hybrid inverters, explore our comprehensive range of solar systems tailored for Kerala."
          image="/images/hero-solutions.jpg"
          alt="Commercial rooftop solar PV array with precision mounting and inverters"
        />

        {/* Solutions Detail List */}
        <section className="py-12 lg:py-24">
          <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8 xl:px-10 space-y-16 lg:space-y-24">
            {SERVICES.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 pt-4"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                  {/* Visual Subject Column */}
                  <div className="lg:col-span-5 order-1 lg:order-2">
                    <div className="relative rounded-tl-[3.5rem] lg:rounded-tl-[4.25rem] rounded-br-[3.5rem] lg:rounded-br-[4.25rem] rounded-tr-xl rounded-bl-xl overflow-hidden shadow-xl border border-slate-100 group aspect-[16/11]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        style={{ imageRendering: '-webkit-optimize-contrast' }}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      
                      <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md text-[#30358B] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                        {`Solution 0${idx + 1}`}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/40">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#F47721] block">
                          Authentic Photography
                        </span>
                        <span className="text-xs font-semibold text-[#30358B] line-clamp-1">
                          {service.tagline}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 order-2 lg:order-1 space-y-6">
                    <div className="space-y-2">
                      <span className="font-eyebrow text-xs text-[#F47721]">
                        {service.subtitle}
                      </span>
                      <h2 className="font-solution-heading text-[#30358B] text-2xl lg:text-3xl leading-snug">
                        {service.title}
                      </h2>
                    </div>

                    <p className="font-body text-slate-600 leading-[1.68] text-base">
                      {service.fullDescription}
                    </p>

                    {/* Key Benefits */}
                    <div className="pt-2">
                      <h4 className="font-eyebrow text-xs text-slate-500 mb-3">
                        Key General Advantages
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                            <CheckCircle2 className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
                            <span className="font-body text-xs text-slate-700 font-medium leading-[1.55]">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action CTA */}
                    <div className="pt-2">
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="font-btn inline-flex items-center gap-2 bg-[#F47721] hover:bg-[#E06512] active:bg-[#C9540C] text-white text-xs font-semibold px-5 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
                      >
                        <span>Request Free Consultation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
