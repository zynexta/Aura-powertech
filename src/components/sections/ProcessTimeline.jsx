import React from 'react';
import { WORKFLOW_STEPS } from '../../data/services';

export default function ProcessTimeline() {
  return (
    <section className="py-14 sm:py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-20 space-y-2.5 sm:space-y-3.5">
          <div className="font-eyebrow inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[11px] sm:text-xs text-[#F47721]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
            <span>How We Work</span>
          </div>

          <h2 className="font-section-heading text-[#30358B] text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] leading-tight">
            The Solar Project Journey
          </h2>

          <p className="font-body text-xs sm:text-base lg:text-lg text-slate-600 leading-[1.68] font-normal">
            A structured, transparent pathway from your initial roof evaluation to clean energy generation.
          </p>
        </div>

        {/* Timeline Journey: Vertical on Mobile, Horizontal on Desktop */}
        <div className="relative">
          {/* Horizontal Connecting Guide Line on Desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] bg-slate-200/80 -z-0" />

          {/* Vertical Connecting Guide Line on Mobile */}
          <div className="lg:hidden absolute left-5 top-4 bottom-10 w-[2px] bg-slate-200 -z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-10 lg:gap-6 relative z-10">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div 
                key={step.number}
                className="group flex flex-row lg:flex-col items-start gap-3.5 sm:gap-5 lg:gap-0 pt-1"
              >
                {/* Step Marker */}
                <div className="flex items-center gap-3 mb-0 lg:mb-5 shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#30358B] group-hover:border-[#F47721] text-[#30358B] group-hover:text-[#F47721] flex items-center justify-center font-display font-extrabold text-xs sm:text-sm transition-all shadow-xs">
                    {step.number}
                  </div>
                </div>

                {/* Content Block */}
                <div className="space-y-1 sm:space-y-1.5 pt-0.5 lg:pt-0">
                  <span className="lg:hidden text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#F47721] block">
                    Stage 0{idx + 1}
                  </span>
                  <h3 className="text-sm sm:text-lg font-bold text-[#30358B] group-hover:text-[#F47721] transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Editable Journey Disclaimer */}
        <p className="text-[10px] sm:text-[11px] text-slate-400 text-center mt-10 sm:mt-14">
          * Standard proposed project workflow. Project milestones and timelines are customized based on individual property specifications.
        </p>

      </div>
    </section>
  );
}
