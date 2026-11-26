import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, CheckCircle } from 'lucide-react';

export default function Lightbox({ project, onClose, onPrev, onNext, hasPrev, hasNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-[70] flex items-center justify-center p-2 xs:p-3 sm:p-6 md:p-10 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl w-full bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white hover:text-[#F47721] transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#F47721] cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Stage */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[200px] xs:min-h-[240px] max-h-[48vh] lg:max-h-[75vh] lg:min-h-[500px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain"
          />

          {/* Navigation Controls */}
          {hasPrev && (
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-[#F47721] transition-colors flex items-center justify-center focus:outline-none cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {hasNext && (
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-[#F47721] transition-colors flex items-center justify-center focus:outline-none cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Details Sidebar / Bottom Panel */}
        <div className="w-full lg:w-80 p-4 sm:p-6 bg-slate-900 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between overflow-y-auto max-h-[44vh] lg:max-h-none">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#F47721] bg-[#F47721]/10 px-2.5 py-0.5 rounded-full border border-[#F47721]/20">
                {project.category}
              </span>
              <span className="flex items-center gap-1 text-[10px] sm:text-[11px] text-slate-400">
                <MapPin className="w-3 h-3 text-[#F47721]" />
                {project.location}
              </span>
            </div>

            <h3 className="text-base sm:text-xl font-bold text-white tracking-tight leading-snug">
              {project.title}
            </h3>

            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {project.summary}
            </p>

            <div className="mt-4 sm:mt-6 pt-3 sm:pt-5 border-t border-white/10">
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 sm:mb-3">
                Installation Highlights
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {project.details.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-[#F47721] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 text-[10px] sm:text-[11px] text-slate-400">
            <span>Authentic installation photograph & engineering data</span>
          </div>
        </div>
      </div>
    </div>
  );
}
