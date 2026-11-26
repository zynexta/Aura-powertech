import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Compass, Eye, Target, Wrench, CheckCircle2, ArrowRight, ChevronDown, Users, Leaf } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function About() {
  useEffect(() => {
    document.title = "About Us — Aura Powertech Solutions | Kerala Solar Energy";
    window.scrollTo(0, 0);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('company-story');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* 
        About Us Hero Section:
        Designed exactly like the Home Hero section:
        - Full-bleed cinematic architectural background photography (/images/hero-about.jpg)
        - Precision grading (horizontal left gradient on desktop, vertical gradient on mobile)
        - Transparent floating navbar integration
        - Category eyebrow with orange accent
        - Main headline with brand orange highlight in Outfit font
        - Supporting description with comfortable reading line-height
        - Dual CTA buttons (Explore Solutions + Get In Touch)
        - Clean 3-column trust metrics micro-grid (Tier-1, 100%, 25 Yr)
        - Subtle bouncing scroll down indicator
      */}
      {/* 
        About Us Hero Section:
        - Mobile (< 768px): Dedicated pixel-perfect implementation strictly matching attached reference
        - Desktop/Tablet (>= 768px): Preserved existing clean layout and desktop photography
      */}
      <section className="relative min-h-[585px] md:min-h-[85svh] lg:min-h-[740px] lg:h-[88vh] lg:max-h-[820px] flex flex-col justify-between md:items-center md:justify-center overflow-hidden bg-slate-950 text-white">
        {/* Background Architectural Solar Photography */}
        <div className="absolute inset-0 z-0">
          <picture className="w-full h-full block">
            <source media="(max-width: 767px)" srcSet="/images/about-hero-mobile.webp" type="image/webp" />
            <source media="(max-width: 767px)" srcSet="/images/about-hero-mobile.jpg" />
            <source media="(min-width: 768px)" srcSet="/images/hero-about.jpg" />
            <img
              src="/images/hero-about.jpg"
              alt="Aura Powertech Solutions - Solar energy installations across Kerala"
              className="w-full h-full object-cover object-[62%_center] md:object-[72%_32%] lg:object-[75%_center] transform scale-100 transition-transform duration-1000 ease-out"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
              fetchPriority="high"
              decoding="async"
            />
          </picture>

          {/* Desktop Left-to-Right Precision Grading (>= 768px) */}
          <div
            className="hidden md:block absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(8, 18, 42, 0.94) 0%, rgba(8, 18, 42, 0.80) 28%, rgba(8, 18, 42, 0.35) 48%, rgba(8, 18, 42, 0.05) 62%, transparent 72%)'
            }}
          />

          {/* Dedicated Directional Left Gradient (< 768px) */}
          <div
            className="md:hidden absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(3, 24, 46, 0.78) 0%, rgba(3, 30, 54, 0.48) 35%, rgba(3, 30, 54, 0.12) 70%, rgba(3, 30, 54, 0.00) 100%)'
            }}
          />

          {/* Dedicated Vertical Gradient (< 768px) */}
          <div
            className="md:hidden absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(3, 25, 48, 0.35) 0%, rgba(3, 25, 48, 0.08) 30%, rgba(3, 25, 48, 0.00) 55%, rgba(3, 25, 48, 0.20) 75%, rgba(3, 25, 48, 0.85) 100%)'
            }}
          />

          {/* Top subtle bar for navbar transparency */}
          <div className="absolute top-0 left-0 right-0 h-20 sm:h-28 bg-gradient-to-b from-slate-950/60 to-transparent pointer-events-none" />
        </div>

        {/* =========================================================================
            1. DEDICATED MOBILE HERO CONTENT (Visible strictly below 768px)
            Matching Reference Image: Eyebrow, Heading, Desc, CTAs, Solar Showcase, Unified Stats Panel, Wave
            ========================================================================= */}
        <div className="md:hidden relative z-10 w-full px-5 pt-[102px] pb-3 flex flex-col justify-between flex-1">
          {/* Upper Text Content */}
          <div className="flex flex-col items-start">
            
            {/* Eyebrow Label: Orange Horizontal Bar (25x3.5px) + ABOUT US */}
            <div className="flex items-center gap-[10px] mb-3.5">
              <span className="w-[25px] h-[3.5px] bg-[#F47721] rounded-[4px] inline-block shrink-0" />
              <span className="text-[10.5px] font-bold uppercase tracking-[2px] text-white">
                ABOUT US
              </span>
            </div>

            {/* Heading: Two Lines (Line 1: White, Line 2: Brand Orange) */}
            <h1 
              className="font-hero-heading text-white text-[29px] xs:text-[31px] leading-[1.13] tracking-[-0.8px] font-extrabold max-w-[90%] mb-3.5"
              style={{ fontSize: 'clamp(26px, 7.6vw, 34px)' }}
            >
              Powering Kerala’s <br />
              <span className="text-[#F47721]">Sustainable Future</span>
            </h1>

            {/* Supporting Description: Compact Left-Aligned (Max Width ~265px) */}
            <p className="font-body text-[12.5px] xs:text-[13px] text-white/90 leading-[1.5] max-w-[265px] font-normal mb-4">
              A trusted solar energy partner, delivering innovative, reliable, and sustainable solar solutions for homes, businesses, and industries across Kerala.
            </p>

            {/* CTA Buttons Row: Side by Side, Gap 7-8px */}
            <div className="flex items-center gap-2 w-full">
              {/* Primary Button — Our Journey */}
              <a
                href="#company-story"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToNext();
                }}
                className="w-fit h-[42px] px-4 inline-flex items-center justify-center gap-[7px] bg-[#F47721] hover:bg-[#E06512] active:bg-[#C9540C] text-white text-[11.5px] font-bold rounded-full transition-colors cursor-pointer"
              >
                <span className="font-btn tracking-wide">Our Journey</span>
                <ArrowRight className="w-4 h-4 text-white shrink-0" />
              </a>

              {/* Secondary Button — Watch Our Story */}
              <button
                type="button"
                onClick={() => scrollToNext()}
                className="w-fit h-[42px] px-3.5 inline-flex items-center justify-center gap-2 bg-[#051830]/30 hover:bg-[#051830]/50 active:bg-[#051830]/70 text-white border border-white/85 text-[11.5px] font-semibold rounded-full backdrop-blur-xs transition-colors cursor-pointer"
              >
                <div className="w-[18px] h-[18px] rounded-full border border-white flex items-center justify-center shrink-0">
                  <svg className="w-2.5 h-2.5 text-white fill-white ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="font-btn tracking-wide">Watch Our Story</span>
              </button>
            </div>

          </div>

          {/* Dedicated Solar Panel Showcase Gap (~115-125px clear view of solar panels) */}
          <div className="h-[115px] xs:h-[125px] w-full pointer-events-none" aria-hidden="true" />

          {/* Unified Premium Statistics Panel (1 Glass Container with 3 Columns) */}
          <div className="w-full rounded-[19px] border border-white/35 bg-[#0F2535]/55 backdrop-blur-md py-3.5 px-2 xs:px-3 grid grid-cols-3 items-center mb-5 shadow-xs">
            {/* Col 1: Projects Delivered */}
            <div className="flex flex-col items-start pr-2">
              <Users className="w-5 h-5 xs:w-6 xs:h-6 text-[#F47721] stroke-[1.8] mb-1.5" />
              <span className="text-[17px] xs:text-[19px] font-bold text-white tracking-tight leading-tight">
                100+
              </span>
              <span className="text-[10px] xs:text-[10.5px] text-white/90 leading-[1.3] mt-0.5">
                Projects<br />Delivered
              </span>
            </div>

            {/* Col 2: MNRE Compliant (Divided by border-x) */}
            <div className="flex flex-col items-start border-x border-white/18 px-2 xs:px-3">
              <Leaf className="w-5 h-5 xs:w-6 xs:h-6 text-[#F47721] stroke-[1.8] mb-1.5" />
              <span className="text-[17px] xs:text-[19px] font-bold text-white tracking-tight leading-tight">
                100%
              </span>
              <span className="text-[10px] xs:text-[10.5px] text-white/90 leading-[1.3] mt-0.5">
                MNRE<br />Compliant
              </span>
            </div>

            {/* Col 3: Linear Warranty */}
            <div className="flex flex-col items-start pl-2">
              <ShieldCheck className="w-5 h-5 xs:w-6 xs:h-6 text-[#F47721] stroke-[1.8] mb-1.5" />
              <span className="text-[17px] xs:text-[19px] font-bold text-white tracking-tight leading-tight">
                25 Yr
              </span>
              <span className="text-[10px] xs:text-[10.5px] text-white/90 leading-[1.3] mt-0.5">
                Linear<br />Warranty
              </span>
            </div>
          </div>

        </div>

        {/* Decorative Bottom Curved Orange Wave (Mobile Only) */}
        <div className="md:hidden relative w-full overflow-hidden leading-none z-10 pointer-events-none -mt-1">
          <svg 
            viewBox="0 0 480 38" 
            preserveAspectRatio="none" 
            className="w-full h-8 xs:h-9 block"
          >
            <defs>
              <linearGradient id="about-mobile-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F47721" />
                <stop offset="65%" stopColor="#FA7E26" />
                <stop offset="100%" stopColor="#FF8F33" />
              </linearGradient>
            </defs>
            <path 
              d="M0,28 C120,36 240,16 480,4 L480,38 L0,38 Z" 
              fill="url(#about-mobile-wave-grad)" 
            />
          </svg>
        </div>

        {/* =========================================================================
            2. PRESERVED DESKTOP & TABLET HERO CONTENT (Visible on screens >= 768px)
            ========================================================================= */}
        <div className="hidden md:flex relative z-10 max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8 xl:px-10 pt-36 lg:pt-32 pb-20 w-full flex-col justify-center">
          <div className="max-w-2xl lg:max-w-xl space-y-6">
            
            {/* Category Eyebrow with Brand Orange Accent */}
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-0.5 bg-[#F47721] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#F47721]">
                Company Profile
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-hero-heading text-white drop-shadow-sm text-5xl lg:text-[56px] leading-[1.12]">
              Pioneering Clean <br />
              <span className="text-[#F47721]">Power Engineering.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-body text-lg lg:text-xl text-slate-200/90 font-normal leading-[1.65] max-w-lg drop-shadow-sm">
              Aura Powertech Solutions delivers dependable, high-efficiency solar energy systems for residences and commercial infrastructure across Kerala, India.
            </p>

            {/* CTA Group: Explore Solutions & Contact Us */}
            <div className="pt-4 flex items-center gap-4 max-w-none">
              <Link
                to="/solutions"
                className="font-btn group w-auto inline-flex items-center justify-center gap-2.5 bg-[#F47721] hover:bg-[#E06512] active:bg-[#C9540C] text-white text-sm px-8 py-4 rounded-full shadow-lg shadow-orange-950/30 hover:shadow-orange-900/40 transition-all duration-300 transform active:scale-[0.98] text-center min-h-[46px]"
              >
                <span>Explore Solar Solutions</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="font-btn w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:bg-white/25 text-white border border-white/25 text-sm px-7 py-4 rounded-full backdrop-blur-sm transition-all duration-300 text-center hover:border-white/40 active:scale-[0.98] min-h-[46px]"
              >
                <span>Get In Touch</span>
              </Link>
            </div>

            {/* Clean Engineering Credentials Micro-grid */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-3 gap-6 text-slate-300 max-w-lg">
              <div>
                <span className="block text-2xl lg:text-3xl font-bold font-display text-white tracking-tight">100+</span>
                <span className="block text-xs text-slate-300/80 mt-0.5">Projects Delivered</span>
              </div>
              <div>
                <span className="block text-2xl lg:text-3xl font-bold font-display text-[#F47721] tracking-tight">100%</span>
                <span className="block text-xs text-slate-300/80 mt-0.5">MNRE Compliant</span>
              </div>
              <div>
                <span className="block text-2xl lg:text-3xl font-bold font-display text-white tracking-tight">25 Yr</span>
                <span className="block text-xs text-slate-300/80 mt-0.5">Linear Warranty</span>
              </div>
            </div>

          </div>
        </div>

        {/* Subtle Bouncing Scroll Down Indicator (Desktop) */}
        <button
          onClick={scrollToNext}
          className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1.5 text-slate-400 hover:text-white transition-colors focus:outline-none group cursor-pointer"
          aria-label="Scroll down to company story"
        >
          <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-400 group-hover:text-slate-200">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#F47721]" />
        </button>
      </section>

      {/* Main Editorial Story */}
      <section id="company-story" className="py-12 sm:py-20 lg:py-28">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Visual Column: Order-1 on mobile (First Image), Order-2 on Desktop */}
            <div className="lg:col-span-6 order-1 lg:order-2 relative">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-slate-100 relative group aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="/images/projects/commercial-rooftop-kerala.jpg"
                  alt="Industrial commercial solar installation engineered in Kerala"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5 p-3 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/30 text-xs">
                  <span className="font-bold text-[#F47721] uppercase text-[9px] sm:text-[10px] block">Field Engineering</span>
                  <span className="font-semibold text-[#30358B] text-[11px] sm:text-xs">Engineered commercial rooftop PV array & elevated balance-of-system</span>
                </div>
              </div>
            </div>

            {/* Content Column: Order-2 on mobile (Then Content), Order-1 on Desktop */}
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-4 sm:space-y-6">
              <span className="font-eyebrow text-[11px] sm:text-xs text-[#F47721]">
                Who We Are
              </span>
              <h2 className="font-section-heading text-[#30358B] text-2xl xs:text-3xl sm:text-4xl leading-tight">
                Rooted in Engineering Rigor and Regional Expertise
              </h2>
              <p className="font-body text-slate-600 leading-[1.68] text-sm sm:text-base">
                Based in Kudappanakunnu, Thiruvananthapuram, Aura Powertech Solutions was established to address the critical need for robust, professionally engineered solar power systems that deliver consistent year-round performance in Kerala.
              </p>
              <p className="font-body text-slate-600 leading-[1.68] text-sm sm:text-base">
                Solar installations in coastal and tropical climates require far more than off-the-shelf equipment. High humidity, intense southwest monsoons, and varying roof geometries demand precise structural anchoring, anti-corrosive fasteners, and intelligent inverter protection.
              </p>
              <p className="font-body text-slate-600 leading-[1.68] text-sm sm:text-base">
                We take an engineering-first stance on every project: carefully analyzing shading patterns, sizing cable cross-sections to eliminate voltage drop, and integrating genuine tier-1 components such as Deye hybrid inverters and multi-stage surge protection.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision (Clearly proposed copy) */}
      <section className="py-10 sm:py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
            
            {/* Proposed Mission */}
            <div className="p-5 sm:p-10 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F47721]">
                <Target className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#F47721]">Proposed Mission</span>
              <h3 className="text-lg sm:text-2xl font-bold text-[#30358B]">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-xs sm:text-base">
                To accelerate the adoption of clean, sustainable solar energy across Kerala by providing transparent engineering, uncompromised structural integrity, and high-efficiency power systems that offer dependable, lifelong value for homes and businesses.
              </p>
            </div>

            {/* Proposed Vision */}
            <div className="p-5 sm:p-10 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#30358B]">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#30358B]">Proposed Vision</span>
              <h3 className="text-lg sm:text-2xl font-bold text-[#30358B]">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-xs sm:text-base">
                To become Kerala's most trusted solar energy brand, renowned for uncompromising technical craftsmanship, honest customer advisory, and resilient renewable infrastructure that powers communities cleanly into the future.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-3">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#F47721]">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#30358B] tracking-tight font-display">
              Values That Guide Every Installation
            </h2>
            <p className="text-slate-600 text-xs sm:text-base">
              Integrity, craftsmanship, and safety govern every connection we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="p-5 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/70 hover:shadow-lg transition-all">
              <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#F47721] mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-[#30358B] mb-1.5 sm:mb-2">Technical Authenticity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We never over-promise generation numbers or cut corners on component specifications. What we propose is backed by honest engineering.
              </p>
            </div>

            <div className="p-5 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/70 hover:shadow-lg transition-all">
              <Wrench className="w-7 h-7 sm:w-8 sm:h-8 text-[#F47721] mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-[#30358B] mb-1.5 sm:mb-2">Structural Durability</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rooftops face severe weather. We use heavy-duty galvanized and powder-coated steel frameworks, stainless steel fasteners, and weather-sealed conduit.
              </p>
            </div>

            <div className="p-5 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/70 hover:shadow-lg transition-all">
              <Compass className="w-7 h-7 sm:w-8 sm:h-8 text-[#F47721] mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-bold text-[#30358B] mb-1.5 sm:mb-2">Customer Partnership</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We guide clients through every phase from feasibility and paperwork to net-metering commissioning and post-installation support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-10 sm:py-16 bg-[#30358B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Discuss Your Property with Our Engineers</h3>
            <p className="text-xs sm:text-sm text-slate-200/80">Schedule a site feasibility assessment in Thiruvananthapuram.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#F47721] hover:bg-[#E06512] active:bg-[#C9540C] text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm w-full sm:w-auto min-h-[46px]"
          >
            <span>Contact Us Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
