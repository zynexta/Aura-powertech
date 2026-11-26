import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  LayoutGrid, 
  Zap, 
  Layers, 
  Home, 
  ShieldCheck, 
  BarChart3, 
  Leaf 
} from 'lucide-react';
import { PROJECTS } from '../../data/projects';
import Lightbox from '../ui/Lightbox';

export default function FeaturedInstallations() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  // Showcase top authentic projects matching the approved bento grid specification
  const featured = PROJECTS.slice(0, 4);
  const activeProject = selectedProjectIndex !== null ? featured[selectedProjectIndex] : null;

  return (
    <section className="relative py-14 sm:py-24 lg:py-28 bg-[#FBFBFD] overflow-hidden text-[#12153D]">
      {/* 
        Subtle Top-Right Curved Background Patterns with Soft Orange Sunlight Effect
        Matching the approved reference design
      */}
      <div 
        className="absolute top-0 right-0 w-[550px] lg:w-[750px] h-[550px] lg:h-[750px] pointer-events-none -mr-32 -mt-32 z-0"
        style={{
          background: 'radial-gradient(circle at 75% 25%, rgba(244, 119, 33, 0.16) 0%, rgba(244, 119, 33, 0.05) 42%, transparent 70%)'
        }}
      />

      {/* Elegant Curved Architectural Solar Arc Lines */}
      <svg
        className="absolute top-0 right-0 w-[600px] lg:w-[850px] h-[600px] lg:h-[850px] pointer-events-none -mr-32 -mt-32 opacity-35 z-0"
        viewBox="0 0 850 850"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="850" cy="0" r="320" stroke="#F47721" strokeWidth="1.2" strokeDasharray="6 8" />
        <circle cx="850" cy="0" r="480" stroke="#CBD5E1" strokeWidth="1" />
        <circle cx="850" cy="0" r="620" stroke="#F47721" strokeWidth="1" opacity="0.6" />
        <circle cx="850" cy="0" r="760" stroke="#E2E8F0" strokeWidth="1.2" strokeDasharray="8 10" />
      </svg>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 lg:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl space-y-2 sm:space-y-2.5">
            {/* Eyebrow Label with Thin Orange Horizontal Rule */}
            <div className="flex items-center gap-2.5">
              <span className="w-5 h-0.5 bg-[#F47721] rounded-full" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#12153D]">
                OUR PROJECTS
              </span>
              <span className="w-8 h-px bg-slate-300/80" />
            </div>

            {/* Main Section Heading */}
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#12153D] leading-tight font-display">
              Featured Solar <span className="text-[#F47721]">Installations</span>
            </h2>

            {/* Supporting Description */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed max-w-xl font-normal">
              Explore real installations from our rooftop solar and inverter projects across Kerala, showcasing strong engineering and clean, long-lasting performance.
            </p>
          </div>

          {/* Right Action Button: Orange Outlined Pill */}
          <div className="shrink-0 pt-1 sm:pt-0">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full border border-[#F47721] text-[#12153D] hover:bg-[#F47721] hover:text-white active:bg-[#E06512] transition-all duration-300 font-bold text-xs uppercase tracking-wider group shadow-xs bg-white min-h-[44px] w-full sm:w-auto text-center"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 text-[#F47721] group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </div>
        </div>

        {/* Premium Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* ==============================================================
              1. MAIN FEATURED CARD (LEFT SIDE — ~60% WIDTH / 7 COLS)
              ============================================================== */}
          <div 
            onClick={() => setSelectedProjectIndex(0)}
            className="lg:col-span-7 group relative h-[320px] xs:h-[350px] sm:h-[420px] lg:h-[450px] rounded-[22px] overflow-hidden cursor-pointer bg-slate-900 border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.08)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Full-Cover Background Image */}
            <img
              src={featured[0].image}
              alt={featured[0].title}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              loading="lazy"
            />

            {/* Dark Navy Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-transparent pointer-events-none" />

            {/* Top-Left Category Badge */}
            <div className="absolute top-3.5 sm:top-5 left-3.5 sm:left-5 inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-950/75 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border border-white/10 shadow-sm">
              <LayoutGrid className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F47721]" />
              <span>ROOFTOP SOLAR</span>
            </div>

            {/* Top-Right Circular Expand Icon */}
            <div className="absolute top-3.5 sm:top-5 right-3.5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md flex items-center justify-center text-white transition-all group-hover:scale-110">
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>

            {/* Bottom Content with Thin Orange Vertical Accent */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-[25px] font-extrabold text-white tracking-tight leading-snug">
                {featured[0].title}
              </h3>

              <div className="flex items-start gap-2.5 sm:gap-3 mt-2 sm:mt-2.5">
                <span className="w-1 h-8 sm:h-10 bg-[#F47721] rounded-full shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed max-w-lg line-clamp-2 sm:line-clamp-none">
                  High-efficiency solar PV installation mounted on a durable standing seam metal roof with clean wiring and weather-proof design.
                </p>
              </div>
            </div>
          </div>

          {/* ==============================================================
              2. TWO STACKED CARDS (RIGHT SIDE — ~40% WIDTH / 5 COLS)
              ============================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 sm:gap-6">
            
            {/* Stacked Card 1: Inverter Project */}
            <div
              onClick={() => setSelectedProjectIndex(1)}
              className="group relative h-[180px] sm:h-[212px] rounded-[22px] overflow-hidden cursor-pointer bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
            >
              {/* Left Content */}
              <div className="p-4 sm:p-6 flex flex-col justify-between h-full z-10 max-w-[62%] sm:max-w-[56%]">
                <div>
                  {/* Category Icon Badge */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-orange-50 flex items-center justify-center text-[#F47721] border border-orange-100/70 shadow-xs">
                    <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F47721] fill-current" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mt-2 block">
                    INVERTER & ELECTRICAL
                  </span>
                  <h4 className="text-xs xs:text-sm sm:text-[15px] font-extrabold text-[#12153D] tracking-tight leading-snug mt-1 line-clamp-2">
                    Deye Hybrid Inverter & ACDB Protection Station
                  </h4>
                </div>

                {/* Circular Arrow Button with Orange Border */}
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border border-[#F47721] flex items-center justify-center text-[#F47721] group-hover:bg-[#F47721] group-hover:text-white transition-all duration-300 mt-1 shadow-xs bg-white shrink-0">
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Right Photograph with Soft Blend Gradient */}
              <div className="w-[45%] sm:w-[50%] h-full absolute right-0 top-0 bottom-0 overflow-hidden bg-slate-50">
                <img
                  src={featured[1].image}
                  alt={featured[1].title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-1" />
              </div>
            </div>

            {/* Stacked Card 2: Structural Steel Installation */}
            <div
              onClick={() => setSelectedProjectIndex(2)}
              className="group relative h-[180px] sm:h-[212px] rounded-[22px] overflow-hidden cursor-pointer bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-between"
            >
              {/* Left Content */}
              <div className="p-4 sm:p-6 flex flex-col justify-between h-full z-10 max-w-[62%] sm:max-w-[56%]">
                <div>
                  {/* Category Icon Badge */}
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-orange-50 flex items-center justify-center text-[#F47721] border border-orange-100/70 shadow-xs">
                    <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F47721]" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mt-2 block">
                    STRUCTURAL ENGINEERING
                  </span>
                  <h4 className="text-xs xs:text-sm sm:text-[15px] font-extrabold text-[#12153D] tracking-tight leading-snug mt-1 line-clamp-2">
                    Blue Structural Steel Catwalk & Dual String Array
                  </h4>
                </div>

                {/* Circular Arrow Button with Orange Border */}
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border border-[#F47721] flex items-center justify-center text-[#F47721] group-hover:bg-[#F47721] group-hover:text-white transition-all duration-300 mt-1 shadow-xs bg-white shrink-0">
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Right Photograph with Soft Blend Gradient */}
              <div className="w-[45%] sm:w-[50%] h-full absolute right-0 top-0 bottom-0 overflow-hidden bg-slate-50">
                <img
                  src={featured[2].image}
                  alt={featured[2].title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-1" />
              </div>
            </div>

          </div>

          {/* ==============================================================
              3. FULL-WIDTH BOTTOM CARD (12 COLS)
              ============================================================== */}
          <div 
            onClick={() => setSelectedProjectIndex(3)}
            className="lg:col-span-12 group relative bg-white rounded-[22px] border border-slate-200/80 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.06)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer grid grid-cols-1 md:grid-cols-12 min-h-[200px]"
          >
            {/* Left Column: Project Details */}
            <div className="p-5 sm:p-8 md:col-span-5 lg:col-span-4 flex flex-col justify-center space-y-2 z-10 bg-white">
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4 text-[#F47721]" />
                <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#12153D]">
                  ROOFTOP SOLAR
                </span>
              </div>

              <h3 className="text-base sm:text-xl font-extrabold text-[#12153D] tracking-tight leading-snug">
                Elevated Concrete Terrace Solar Installation
              </h3>

              <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-sm">
                Durable, high-clearance solar installation on a concrete terrace, ensuring better ventilation, structural stability, and long-term performance.
              </p>
            </div>

            {/* Middle Column: Three Icon-Based Project Benefits */}
            <div className="p-4 sm:p-6 md:p-8 md:col-span-3 lg:col-span-3 border-t md:border-t-0 md:border-l border-slate-100 grid grid-cols-3 md:flex md:flex-col justify-center gap-2 md:space-y-4 z-10 bg-white">
              <div className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-2.5 text-center md:text-left">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#12153D] shrink-0" />
                <span className="text-[10px] sm:text-xs font-bold text-[#12153D]">High Durability</span>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-2.5 text-center md:text-left">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-[#12153D] shrink-0" />
                <span className="text-[10px] sm:text-xs font-bold text-[#12153D]">Better Efficiency</span>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-center gap-1 md:gap-2.5 text-center md:text-left">
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-[#12153D] shrink-0" />
                <span className="text-[10px] sm:text-xs font-bold text-[#12153D]">Longer Lifespan</span>
              </div>
            </div>

            {/* Right Column: Solar Installation Photograph */}
            <div className="relative h-48 sm:h-64 md:h-full md:col-span-4 lg:col-span-5 overflow-hidden bg-slate-50">
              <img
                src={featured[3].image}
                alt={featured[3].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Soft Gradient Mask on Left */}
              <div className="hidden md:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-1" />
            </div>
          </div>

        </div>

      </div>

      {/* Accessible Interactive Image Lightbox Modal */}
      {activeProject && (
        <Lightbox
          project={activeProject}
          onClose={() => setSelectedProjectIndex(null)}
          onPrev={() => setSelectedProjectIndex((prev) => (prev > 0 ? prev - 1 : featured.length - 1))}
          onNext={() => setSelectedProjectIndex((prev) => (prev < featured.length - 1 ? prev + 1 : 0))}
          hasPrev={featured.length > 1}
          hasNext={featured.length > 1}
        />
      )}
    </section>
  );
}
