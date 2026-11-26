import React from 'react';

export default function PageHeroBanner({
  badge = 'Aura Powertech Solutions',
  title,
  highlightWord = '',
  description,
  image,
  alt = 'Solar energy engineering and architecture in Kerala',
  imagePosition = 'object-[center_15%] sm:object-[center_20%] lg:object-[75%_25%]'
}) {
  return (
    <section className="relative text-white pt-24 pb-10 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-950">
      {/* Background Architectural Solar Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={alt}
          className={`w-full h-full object-cover ${imagePosition} transform scale-100 transition-transform duration-1000 ease-out`}
          style={{ imageRendering: '-webkit-optimize-contrast' }}
          fetchPriority="high"
          decoding="async"
        />

        {/* 
          Precision Grading:
          - Desktop: Smooth horizontal gradient on LEFT side only (0-30% dark, fades to 0% at 65-72%).
          - Right 65-100%: 100% CLEAR, bright, crystalline image visibility without any darkening.
        */}
        <div 
          className="hidden lg:block absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(8, 18, 42, 0.92) 0%, rgba(8, 18, 42, 0.76) 28%, rgba(8, 18, 42, 0.30) 48%, rgba(8, 18, 42, 0.05) 62%, transparent 72%)'
          }}
        />

        {/* Mobile vertical gradient protecting top text while keeping panels clear */}
        <div 
          className="lg:hidden absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(8, 18, 42, 0.40) 0%, rgba(8, 18, 42, 0.15) 30%, rgba(8, 18, 42, 0.70) 68%, rgba(8, 18, 42, 0.96) 100%)'
          }}
        />

        {/* Subtle top bar for transparent navbar transition */}
        <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-slate-950/70 to-transparent pointer-events-none" />
      </div>

      {/* Main Content on Left */}
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10 space-y-3 sm:space-y-4">
        <div className="max-w-2xl lg:max-w-xl space-y-3 sm:space-y-4">
          {/* Eyebrow Badge */}
          <div className="font-eyebrow inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] sm:text-xs text-[#F47721] border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F47721] animate-pulse" />
            <span>{badge}</span>
          </div>

          {/* Heading */}
          <h1 className="font-hero-heading text-white drop-shadow-md text-[26px] xs:text-[30px] sm:text-4xl lg:text-[46px] leading-[1.14]">
            {title} {highlightWord && <span className="text-[#F47721]">{highlightWord}</span>}
          </h1>

          {/* Description */}
          {description && (
            <p className="font-body text-xs sm:text-base lg:text-lg text-slate-200/90 max-w-xl leading-[1.65] font-normal drop-shadow-sm">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
