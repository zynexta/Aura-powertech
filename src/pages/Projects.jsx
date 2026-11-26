import React, { useState, useEffect } from 'react';
import { LayoutGrid, Sun, Zap, Building2, Maximize2, MapPin, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import Lightbox from '../components/ui/Lightbox';

const CATEGORIES = [
  { name: "All Projects", slug: "all", icon: LayoutGrid },
  { name: "Rooftop Solar", slug: "rooftop", icon: Sun },
  { name: "Hybrid", slug: "inverters", icon: Zap },
  { name: "Commercial", slug: "structural", icon: Building2 }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  useEffect(() => {
    document.title = "Explore Our Solar Projects — Aura Powertech Solutions | Kerala";
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.categorySlug === activeCategory);

  const activeProject = selectedProjectIndex !== null ? filteredProjects[selectedProjectIndex] : null;

  return (
    <div className="bg-white min-h-screen">
      {/* =========================================================================
          1. DEDICATED MOBILE PROJECTS LAYOUT (< 768px)
          Exact match to attached reference image media_1795637443593_9e9d1410.jpg
          ========================================================================= */}
      <div className="md:hidden">
        {/* Compact Hero Section (Height ~175-185px excluding header) */}
        <section className="relative overflow-hidden min-h-[175px] xs:min-h-[185px] flex items-center bg-[#03172E] text-white">
          {/* Background Photograph */}
          <div className="absolute inset-0 z-0">
            <picture>
              <source srcSet="/images/projects-hero-mobile.webp" type="image/webp" />
              <img
                src="/images/projects-hero-mobile.jpg"
                alt="Commercial and residential solar installations across Kerala"
                className="w-full h-full object-cover object-[62%_center]"
                fetchPriority="high"
              />
            </picture>

            {/* Left-to-right Navy Gradient Overlay (96% -> 78% -> 40% -> 10% -> 0%) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, rgba(3, 23, 46, 0.96) 0%, rgba(3, 23, 46, 0.78) 28%, rgba(3, 23, 46, 0.40) 52%, rgba(3, 23, 46, 0.10) 78%, rgba(3, 23, 46, 0.00) 100%)'
              }}
            />

            {/* Subtle Bottom Gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(3, 23, 46, 0.00) 0%, rgba(3, 23, 46, 0.03) 55%, rgba(3, 23, 46, 0.20) 100%)'
              }}
            />

            {/* Top Bar Gradient for Mobile Header */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#03172E]/80 to-transparent pointer-events-none" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 w-full px-6 xs:px-7 pt-20 xs:pt-[82px] pb-7 xs:pb-8">
            <div className="max-w-[250px]">
              {/* Eyebrow: Short Orange Line + OUR PROJECTS */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-[2.5px] bg-[#F47721] rounded-[2px] inline-block shrink-0" />
                <span className="text-[10px] xs:text-[10.5px] font-bold uppercase tracking-[0.9px] text-white">
                  OUR PROJECTS
                </span>
              </div>

              {/* Heading: Exact Two-Line (Explore Our / Solar Projects) */}
              <h1 className="text-[23px] xs:text-[25px] font-extrabold text-white tracking-[-0.7px] leading-[1.14] mb-2 font-display">
                Explore Our <br />
                <span className="text-[#F47721]">Solar Projects</span>
              </h1>

              {/* Supporting Description */}
              <p className="text-[10.5px] xs:text-[11.5px] text-white/95 leading-[1.48] max-w-[235px] font-normal">
                A showcase of our recent solar installations, inverter systems, and structural solutions delivered across Kerala.
              </p>
            </div>
          </div>

          {/* Signature Orange SVG Wave Decoration */}
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-[20px] pointer-events-none z-10 block"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="projectsOrangeWave"
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
              d="M0,0 C360,105 1000,70 1440,0 L1440,100 L0,100 Z"
              fill="url(#projectsOrangeWave)"
            />

            {/* White Section Base */}
            <path
              d="M0,36 C360,110 1000,86 1440,38 L1440,100 L0,100 Z"
              fill="#FFFFFF"
            />
          </svg>
        </section>

        {/* Horizontal Category Filter Navigation */}
        <section className="bg-white pt-4 pb-1">
          <div className="flex items-center gap-[6px] overflow-x-auto no-scrollbar px-4.5 xs:px-5">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.slug;
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.slug);
                    setSelectedProjectIndex(null);
                  }}
                  className={`h-[32px] px-3.5 rounded-full flex items-center gap-1.5 whitespace-nowrap text-[10px] font-bold transition-all duration-200 cursor-pointer active:scale-95 ${
                    isActive
                      ? 'bg-[#031B35] text-white shadow-2xs'
                      : 'bg-[#EEF2F6] text-[#031B35] hover:bg-slate-200/70'
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5 text-[#F47721] shrink-0" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Subtle 1px Divider */}
          <div className="h-[1px] bg-[#EDF1F5] mx-4.5 xs:mx-5 mt-3 mb-3.5" />
        </section>

        {/* Project Cards List */}
        <section className="bg-white px-4.5 xs:px-5 pb-10">
          <div className="space-y-4.5">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setSelectedProjectIndex(idx)}
                className="group bg-white rounded-[15px] overflow-hidden shadow-[0_5px_16px_rgba(15,39,75,0.08)] transition-all cursor-pointer border border-slate-100"
              >
                {/* Project Image Header */}
                <div className="relative aspect-[2.08/1] overflow-hidden bg-slate-100 rounded-t-[15px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />

                  {/* Bottom Image Gradient (bottom 40%) */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(180deg, rgba(3, 20, 42, 0.00) 0%, rgba(3, 20, 42, 0.25) 45%, rgba(3, 20, 42, 0.82) 100%)'
                    }}
                  />

                  {/* Category Badge (Top-Left) */}
                  <div className="absolute top-2.5 left-3 bg-white/96 text-[#031B35] text-[9.5px] font-bold px-3 py-1 rounded-full shadow-2xs">
                    {project.category}
                  </div>

                  {/* Expand Icon Button (Top-Right) */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProjectIndex(idx);
                    }}
                    className="absolute top-2.5 right-3 w-8 h-8 rounded-full bg-[rgba(15,30,50,0.58)] backdrop-blur-xs flex items-center justify-center text-white active:scale-95 transition-all cursor-pointer"
                    aria-label={`Expand photograph of ${project.title}`}
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                  </button>

                  {/* Location Tag (Bottom-Left) */}
                  <div className="absolute bottom-2.5 left-3.5 flex items-center gap-1.5 text-white">
                    <MapPin className="w-3.5 h-3.5 text-[#F47721] shrink-0" />
                    <span className="text-[10.5px] font-bold text-white drop-shadow-xs">
                      {project.location}
                    </span>
                  </div>
                </div>

                {/* Project Card Content Area */}
                <div className="p-3.5 xs:p-4 bg-white">
                  {/* Title & Action Button Row */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[14.5px] xs:text-[15.5px] font-extrabold text-[#031B35] tracking-tight leading-[1.22] max-w-[80%] font-display">
                      {project.title}
                    </h3>
                    <div className="w-[32px] h-[32px] rounded-[9px] bg-[#FFF0E4] flex items-center justify-center text-[#F47721] shrink-0 active:scale-95 transition-transform">
                      <ArrowRight className="w-4 h-4 text-[#F47721]" />
                    </div>
                  </div>

                  {/* Supporting Description */}
                  <p className="text-[10.5px] xs:text-[11.5px] text-[#52647B] leading-[1.5] mt-2 line-clamp-2">
                    {project.summary}
                  </p>
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
        {/* Cinematic Horizontal Banner directly below navbar */}
        <section className="relative min-h-[340px] lg:h-[360px] flex items-center overflow-hidden bg-slate-950 text-white">
          {/* Background Photograph */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-projects.jpg"
              alt="Aura Powertech Solar Projects across Kerala"
              className="w-full h-full object-cover object-[82%_center]"
              style={{ imageRendering: '-webkit-optimize-contrast' }}
              fetchPriority="high"
            />

            {/* Left Dark Gradient Overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, rgba(8, 18, 42, 0.96) 0%, rgba(8, 18, 42, 0.85) 42%, rgba(8, 18, 42, 0.35) 68%, transparent 88%)'
              }}
            />

            <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-slate-950/70 to-transparent pointer-events-none" />
          </div>

          {/* Hero Text */}
          <div className="relative z-10 max-w-7xl 2xl:max-w-[1360px] mx-auto px-6 lg:px-8 w-full pt-28 pb-12">
            <div className="max-w-xl space-y-2.5">
              <div className="flex items-center gap-2.5 mb-1">
                <span className="w-6 h-[3px] bg-[#F47721] rounded-full inline-block shrink-0" />
                <span className="text-xs font-bold uppercase tracking-[2px] text-white">
                  OUR PROJECTS
                </span>
              </div>

              <h1 className="text-[36px] lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.14]">
                Explore Our <br />
                <span className="text-[#F47721]">Solar Projects</span>
              </h1>

              <p className="text-[14.5px] text-slate-200/90 leading-[1.55] max-w-md">
                A showcase of our recent solar installations, inverter systems, and structural solutions delivered across Kerala.
              </p>
            </div>
          </div>
        </section>

        {/* Desktop Filter Pills */}
        <section className="py-6 bg-[#FAFAFB]">
          <div className="max-w-7xl 2xl:max-w-[1360px] mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2.5">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.slug;
                const IconComponent = cat.icon;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => {
                      setActiveCategory(cat.slug);
                      setSelectedProjectIndex(null);
                    }}
                    className={`px-5 py-2.5 rounded-full text-[12.5px] font-bold flex items-center gap-2 transition-all duration-200 cursor-pointer min-h-[38px] ${
                      isActive
                        ? 'bg-[#12153D] text-white shadow-xs'
                        : 'bg-white hover:bg-slate-50 text-[#12153D] border border-slate-200/80 shadow-2xs'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 text-[#F47721] shrink-0" />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Desktop Projects Grid */}
        <section className="py-12 bg-[#FAFAFB] min-h-[400px]">
          <div className="max-w-7xl 2xl:max-w-[1360px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-7 gap-y-9">
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProjectIndex(idx)}
                  className="group bg-white rounded-[26px] overflow-hidden border border-slate-200/70 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(15,23,42,0.12)] hover:-translate-y-1 active:scale-[0.99] transition-all duration-300 flex flex-col justify-between cursor-pointer relative"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3 bg-white text-[#12153D] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                      {project.category}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProjectIndex(idx);
                      }}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-950/50 backdrop-blur-xs flex items-center justify-center text-white hover:bg-slate-950 transition-colors cursor-pointer"
                      aria-label={`Expand ${project.title} photograph`}
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white drop-shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-[#F47721] shrink-0" />
                      <span className="text-[11.5px] font-bold text-white drop-shadow-xs">
                        {project.location}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-[18px] font-extrabold text-[#12153D] tracking-tight leading-snug line-clamp-2">
                          {project.title}
                        </h3>
                        <div className="w-10 h-10 rounded-[14px] bg-[#FFF2E6] flex items-center justify-center text-[#F47721] shrink-0 transition-transform group-hover:scale-105">
                          <ArrowRight className="w-4 h-4 text-[#F47721]" />
                        </div>
                      </div>

                      <p className="text-[13.5px] text-slate-500 font-normal leading-relaxed mt-2.5 line-clamp-2">
                        {project.summary}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {activeProject && (
        <Lightbox
          project={activeProject}
          onClose={() => setSelectedProjectIndex(null)}
          onPrev={() => setSelectedProjectIndex((prev) => (prev > 0 ? prev - 1 : filteredProjects.length - 1))}
          onNext={() => setSelectedProjectIndex((prev) => (prev < filteredProjects.length - 1 ? prev + 1 : 0))}
          hasPrev={filteredProjects.length > 1}
          hasNext={filteredProjects.length > 1}
        />
      )}
    </div>
  );
}
