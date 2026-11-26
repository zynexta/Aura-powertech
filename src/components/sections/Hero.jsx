import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ChevronDown, Layers, Zap, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('brand-intro');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100svh] lg:min-h-[740px] lg:h-[88vh] lg:max-h-[820px] flex flex-col justify-between lg:justify-center overflow-hidden bg-slate-950 text-white">
      {/* Responsive Architectural Solar Photography (Dedicated 9:16 portrait on mobile, 16:9 on desktop) */}
      <div className="absolute inset-0 z-0">
        <picture className="w-full h-full block">
          <source media="(max-width: 767px)" srcSet="/images/hero-solar-architecture-mobile.jpg" />
          <source media="(min-width: 768px)" srcSet="/images/hero-solar-architecture.jpg" />
          <img
            src="/images/hero-solar-architecture.jpg"
            alt="Aura Powertech Solutions - Kerala rooftop solar architecture"
            className="w-full h-full object-cover object-[65%_center] sm:object-[70%_center] lg:object-[75%_center] transform scale-100 transition-transform duration-1000 ease-out"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
            fetchPriority="high"
            decoding="async"
          />
        </picture>

        {/* 
          Enphase-Inspired Precision Grading (Desktop):
          - Left side dark gradient (0-30% dark, fades to 0% at 65-72%).
          - Right 65-100%: 100% CLEAR, bright, crystalline solar panel and architecture visibility.
        */}
        <div
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(8, 18, 42, 0.92) 0%, rgba(8, 18, 42, 0.76) 28%, rgba(8, 18, 42, 0.30) 48%, rgba(8, 18, 42, 0.05) 62%, transparent 72%)'
          }}
        />

        {/* 
          Dedicated Mobile Gradient (Matching Section 3 Specification):
          - Directional gradient primarily on the left side to maintain text readability.
          - Center & right side remain bright and clear with maximum solar panel & villa visibility.
          - Subtle bottom gradient for feature cards readability.
        */}
        <div
          className="lg:hidden absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(90deg, rgba(5, 24, 48, 0.82) 0%, rgba(5, 24, 48, 0.48) 35%, rgba(5, 24, 48, 0.12) 65%, rgba(5, 24, 48, 0) 100%),
              linear-gradient(180deg, rgba(5, 24, 48, 0.25) 0%, transparent 18%, transparent 58%, rgba(5, 24, 48, 0.50) 80%, rgba(5, 24, 48, 0.82) 100%)
            `
          }}
        />

        {/* Top subtle bar for navbar transparency */}
        <div className="absolute top-0 left-0 right-0 h-20 sm:h-28 bg-gradient-to-b from-slate-950/50 to-transparent pointer-events-none" />
      </div>

      {/* =========================================================================
          1. DEDICATED MOBILE HERO CONTENT (Visible on screens < lg)
          Strictly Matching Reference Image Composition & Pixel-Perfect Spacing
          ========================================================================= */}
      <div className="lg:hidden relative z-10 w-full px-4 pt-[112px] pb-3 flex flex-col justify-between min-h-[100svh]">
        {/* Upper Left-Aligned Text Content */}
        <div className="flex flex-col">
          
          {/* Eyebrow Label: Orange Horizontal Bar (21x3px) + Gap (10px) + CLEAN ENERGY FOR KERALA */}
          <div className="flex items-center gap-[10px] mb-6 animate-hero-fade-1">
            <span className="w-[21px] h-[3px] bg-[#F47721] rounded-full inline-block shrink-0" />
            <span className="text-[10.5px] font-bold uppercase tracking-[1.5px] text-white">
              CLEAN ENERGY FOR KERALA
            </span>
          </div>

          {/* Heading: Exact Three-Line Layout (Eyebrow-to-heading: 24-26px, Heading-to-desc: 16-18px) */}
          <h1 className="font-hero-heading text-white text-[31px] xs:text-[33px] leading-[1.14] tracking-[-0.8px] font-extrabold max-w-[85%] mb-[18px] animate-hero-fade-2">
            Powering a <br />
            <span className="text-[#F47721]">Brighter</span> <br />
            <span className="text-[#F47721]">Tomorrow.</span>
          </h1>

          {/* Supporting Description: Compact Left-Aligned (Max Width 180-195px, Desc-to-btn: 18-22px) */}
          <p className="font-body text-[13.5px] text-white/90 leading-[1.5] max-w-[190px] font-normal mb-5 animate-hero-fade-3">
            Smart solar energy solutions engineered for homes and commercial enterprises in Kerala.
          </p>

          {/* Primary CTA Button: Explore Solar Solutions → (Compact, 36-40px height, 4-6px radius) */}
          <div className="animate-hero-fade-4">
            <a
              href="#brand-intro"
              onClick={(e) => {
                e.preventDefault();
                scrollToNext();
              }}
              className="w-fit h-[38px] px-3.5 inline-flex items-center justify-center gap-[10px] bg-[#F47721] hover:bg-[#E06512] active:bg-[#C9540C] text-white text-[11.5px] font-bold rounded-[5px] transition-colors cursor-pointer"
            >
              <span className="font-btn tracking-wide">Explore Solar Solutions</span>
              <ArrowRight className="w-4 h-4 text-white shrink-0" />
            </a>
          </div>

          {/* Secondary CTA Button: Our Projects ▶ (Primary-to-secondary spacing: 28-32px, Pill Shape) */}
          <div className="mt-7 sm:mt-8 animate-hero-fade-4">
            <Link
              to="/projects"
              className="w-fit h-[38px] px-4 inline-flex items-center justify-center gap-3 bg-[#051830]/40 hover:bg-[#051830]/60 active:bg-[#051830]/80 text-white border border-white/45 text-[11.5px] font-semibold rounded-full backdrop-blur-xs transition-colors"
            >
              <span className="font-btn tracking-wide">Our Projects</span>
              <div className="w-[22px] h-[22px] rounded-full border border-white/60 flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 text-white fill-white ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </Link>
          </div>

        </div>

        {/* Lower Content: Feature Cards + Pagination (Secondary-button-to-feature-cards: 85-95px) */}
        <div className="w-full mt-auto pt-16 xs:pt-20">
          {/* Feature Cards: 3 columns, 16-20px container padding, 9-10px gap, 74-82px height */}
          <div className="grid grid-cols-3 gap-2.5 w-full animate-hero-fade-5">
            {/* Card 1: Tier-1 PV Modules */}
            <div className="h-[78px] min-h-[76px] rounded-[15px] border border-white/28 bg-[#051830]/25 p-3 flex flex-col justify-between">
              <div className="w-5 h-5 flex items-center justify-start text-[#F47721]">
                <Layers className="w-5 h-5 text-[#F47721] stroke-[2]" />
              </div>
              <div>
                <span className="block text-[12.5px] font-bold font-display text-white tracking-tight leading-snug">Tier-1</span>
                <span className="block text-[10.5px] text-slate-300 font-normal leading-tight mt-0.5">PV Modules</span>
              </div>
            </div>

            {/* Card 2: Hybrid Inverters */}
            <div className="h-[78px] min-h-[76px] rounded-[15px] border border-white/28 bg-[#051830]/25 p-3 flex flex-col justify-between">
              <div className="w-5 h-5 flex items-center justify-start text-[#F47721]">
                <Zap className="w-5 h-5 text-[#F47721] stroke-[2]" />
              </div>
              <div>
                <span className="block text-[12.5px] font-bold font-display text-white tracking-tight leading-snug">Hybrid</span>
                <span className="block text-[10.5px] text-slate-300 font-normal leading-tight mt-0.5">Inverters</span>
              </div>
            </div>

            {/* Card 3: 25 Yr Linear Warranty */}
            <div className="h-[78px] min-h-[76px] rounded-[15px] border border-white/28 bg-[#051830]/25 p-3 flex flex-col justify-between">
              <div className="w-5 h-5 flex items-center justify-start text-[#F47721]">
                <ShieldCheck className="w-5 h-5 text-[#F47721] stroke-[2]" />
              </div>
              <div>
                <span className="block text-[12.5px] font-bold font-display text-white tracking-tight leading-snug">25 Yr</span>
                <span className="block text-[10.5px] text-slate-300 font-normal leading-tight mt-0.5">Linear Warranty</span>
              </div>
            </div>
          </div>

          {/* Carousel Pagination: Centered, 22-26px below cards */}
          <div className="flex items-center justify-center gap-1.5 mt-6 mb-2">
            <span className="w-3.5 h-1.5 rounded-full bg-[#F47721]" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </div>
        </div>
      </div>

      {/* Decorative Bottom Orange Wave (Thin and Minimal) */}
      <div className="lg:hidden relative w-full overflow-hidden leading-none z-10 pointer-events-none -mt-1">
        <svg 
          viewBox="0 0 480 32" 
          preserveAspectRatio="none" 
          className="w-full h-6 xs:h-8 block"
        >
          <defs>
            <linearGradient id="mobile-hero-wave-grad-thin" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F47721" />
              <stop offset="60%" stopColor="#E06512" />
              <stop offset="100%" stopColor="#C9540C" />
            </linearGradient>
          </defs>
          <path 
            d="M0,24 C140,12 280,32 480,4 L480,32 L0,32 Z" 
            fill="url(#mobile-hero-wave-grad-thin)" 
          />
        </svg>
      </div>

      {/* =========================================================================
          2. PRESERVED DESKTOP HERO CONTENT (Visible on lg: screens and up)
          ========================================================================= */}
      <div className="hidden lg:flex relative z-10 max-w-7xl 2xl:max-w-[1440px] mx-auto px-8 xl:px-10 pt-32 pb-20 w-full flex-col justify-center">
        <div className="max-w-2xl lg:max-w-xl space-y-6">

          {/* Eyebrow */}
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-0.5 bg-[#F47721] rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#F47721]">
              CLEAN ENERGY FOR KERALA
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-hero-heading text-white drop-shadow-sm text-5xl lg:text-[56px] leading-[1.12]">
            Powering a <br />
            <span className="text-[#F47721]">Brighter Tomorrow.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="font-body text-lg lg:text-xl text-slate-200/90 font-normal leading-[1.65] max-w-lg drop-shadow-sm">
            Smart solar energy solutions engineered for homes and commercial enterprises in Kerala.
          </p>

          {/* CTA Group: Explore Solar Solutions & Our Projects */}
          <div className="pt-4 flex items-center gap-4">
            <a
              href="#brand-intro"
              onClick={(e) => {
                e.preventDefault();
                scrollToNext();
              }}
              className="font-btn group inline-flex items-center justify-center gap-2.5 bg-[#F47721] hover:bg-[#E06512] active:bg-[#C9540C] text-white text-sm px-8 py-4 rounded-full shadow-lg shadow-orange-950/30 hover:shadow-orange-900/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer min-h-[46px]"
            >
              <span>Explore Solar Solutions</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              to="/projects"
              className="font-btn inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:bg-white/25 text-white border border-white/25 text-sm px-7 py-4 rounded-full backdrop-blur-sm transition-all duration-300 text-center hover:border-white/40 active:scale-[0.98] min-h-[46px]"
            >
              <span>Our Projects</span>
            </Link>
          </div>

          {/* Clean Engineering Credentials Micro-grid */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-3 gap-6 text-slate-300 max-w-lg">
            <div>
              <span className="block text-2xl lg:text-3xl font-bold font-display text-white tracking-tight">Tier-1</span>
              <span className="block text-xs text-slate-300/80 mt-0.5">PV Modules</span>
            </div>
            <div>
              <span className="block text-2xl lg:text-3xl font-bold font-display text-[#F47721] tracking-tight">Deye</span>
              <span className="block text-xs text-slate-300/80 mt-0.5">Hybrid Inverters</span>
            </div>
            <div>
              <span className="block text-2xl lg:text-3xl font-bold font-display text-white tracking-tight">25 Yr</span>
              <span className="block text-xs text-slate-300/80 mt-0.5">Linear Warranty</span>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Indicator (Desktop) */}
      <button
        onClick={scrollToNext}
        className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1.5 text-slate-400 hover:text-white transition-colors focus:outline-none group cursor-pointer"
        aria-label="Scroll down to brand introduction"
      >
        <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-400 group-hover:text-slate-200">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#F47721]" />
      </button>
    </section>
  );
}
