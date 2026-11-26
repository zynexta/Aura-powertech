import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

const SOLUTIONS_DATA = [
  {
    id: "residential-solar",
    eyebrow: "RESIDENTIAL ENERGY",
    title: "Residential Solar Solutions",
    description: "Custom-designed rooftop solar systems built to supply sustainable everyday electricity for modern homes, bungalows, and villas across Kerala.",
    benefits: [
      "Potential reduction in monthly electricity costs.",
      "Clean and quiet on-site power generation.",
      "Solar solutions designed for local climate conditions."
    ],
    buttonText: "Explore Residential Solutions",
    link: "/solutions#residential-solar",
    image: "/images/projects/client-rooftop-terrace-kerala.jpg",
    imageAlt: "Residential rooftop solar PV installation on Kerala home terrace",
    imageLeftOnDesktop: true
  },
  {
    id: "commercial-solar",
    eyebrow: "COMMERCIAL ENERGY",
    title: "Commercial Solar Solutions",
    description: "Scalable solar energy systems designed for offices, businesses, and commercial facilities seeking greater energy efficiency and long-term value.",
    benefits: [
      "Potential long-term energy cost savings.",
      "Solutions for higher electricity demands.",
      "Support for sustainable business operations."
    ],
    buttonText: "Explore Commercial Solutions",
    link: "/solutions#commercial-solar",
    image: "/images/projects/commercial-rooftop-kerala.jpg",
    imageAlt: "Commercial rooftop solar installation on standing seam roof in Kerala",
    imageLeftOnDesktop: false
  },
  {
    id: "solar-inverters",
    eyebrow: "SMART ENERGY TECHNOLOGY",
    title: "Hybrid Inverter Solutions",
    description: "Modern hybrid inverter solutions designed to manage solar generation, grid electricity, and compatible battery storage efficiently.",
    benefits: [
      "Intelligent energy source management.",
      "Improved solar energy utilization.",
      "Backup power support when appropriately configured."
    ],
    buttonText: "Explore Inverter Solutions",
    link: "/solutions#solar-inverters",
    image: "/images/projects/client-deye-inverter-clean.jpg",
    imageAlt: "Wall-mounted Deye hybrid solar inverter installation with ABB protection switchgear",
    imageLeftOnDesktop: true
  }
];

export default function SolutionsGrid() {
  return (
    <section className="py-14 sm:py-24 lg:py-32 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 space-y-2.5 sm:space-y-3.5">
          <div className="font-eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100/80 text-[11px] sm:text-xs text-[#F47721]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
            <span>ENGINEERED CAPABILITIES</span>
          </div>

          <h2 className="font-section-heading text-[#30358B] text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] leading-tight">
            Our Solar Solutions
          </h2>

          <p className="font-body text-xs sm:text-base lg:text-lg text-slate-600 leading-[1.68] font-normal max-w-2xl mx-auto">
            Tailor-made clean power ecosystems designed for Kerala's residential rooftops, commercial facilities, and high-efficiency hybrid inverter operations.
          </p>
        </div>

        {/* 
          Three Large Alternating Editorial Rows:
          Row 1: IMAGE LEFT → TEXT RIGHT
          Row 2: TEXT LEFT → IMAGE RIGHT
          Row 3: IMAGE LEFT → TEXT RIGHT
          On Mobile: Image is always stacked first (order-1), content second (order-2).
        */}
        <div className="space-y-12 sm:space-y-24 lg:space-y-32">
          {SOLUTIONS_DATA.map((solution) => {
            const isImageLeft = solution.imageLeftOnDesktop;

            return (
              <div 
                key={solution.id}
                id={solution.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 lg:gap-16 xl:gap-20 items-center"
              >
                {/* Visual Column */}
                <div 
                  className={`lg:col-span-6 order-1 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="relative rounded-2xl sm:rounded-tl-[3.5rem] lg:rounded-tl-[4.25rem] sm:rounded-br-[3.5rem] lg:rounded-br-[4.25rem] sm:rounded-tr-xl sm:rounded-bl-xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 bg-slate-100 group aspect-[16/10] lg:aspect-[16/10.5]">
                    <img
                      src={solution.image}
                      alt={solution.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      style={{ imageRendering: '-webkit-optimize-contrast' }}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  </div>
                </div>

                {/* Content Column */}
                <div 
                  className={`lg:col-span-6 order-2 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'} space-y-4 sm:space-y-6 xl:px-4`}
                >
                  <div className="space-y-1.5 sm:space-y-2">
                    <span className="font-eyebrow text-[11px] sm:text-xs text-[#F47721]">
                      {solution.eyebrow}
                    </span>
                    <h3 className="font-solution-heading text-[#30358B] text-xl xs:text-2xl sm:text-3xl leading-snug">
                      {solution.title}
                    </h3>
                  </div>

                  <p className="font-body text-xs sm:text-base lg:text-[17px] text-slate-600 leading-[1.68] font-normal">
                    {solution.description}
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-2.5 sm:space-y-3 pt-1">
                    {solution.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-600 font-normal">
                        <CheckCircle2 className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
                        <span className="font-body leading-[1.6]">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <Link
                      to={solution.link}
                      className="font-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#F47721] hover:bg-[#E06512] active:bg-[#C9540C] text-white text-xs sm:text-sm px-6 sm:px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-[0.98] text-center min-h-[46px]"
                    >
                      <span>{solution.buttonText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Solutions Footer Bar */}
        <div className="mt-14 sm:mt-24 p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-base sm:text-lg font-bold text-[#30358B]">
              Need Inverter Upgrades or Rooftop Solar Mounting?
            </h4>
            <p className="font-body text-xs sm:text-sm text-slate-500 leading-[1.6]">
              We also specialize in Deye hybrid inverters, custom elevated frameworks, and preventive maintenance.
            </p>
          </div>

          <Link
            to="/solutions"
            className="font-btn inline-flex items-center justify-center gap-2 bg-[#30358B] hover:bg-[#1E2260] active:bg-[#12153D] text-white text-xs px-6 py-3.5 rounded-full shadow-xs transition-all whitespace-nowrap w-full sm:w-auto min-h-[44px]"
          >
            <span>View All Solar Solutions</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
