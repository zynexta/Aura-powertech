import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ variant = 'default', className = '', height = 'h-10 sm:h-11 lg:h-12' }) {
  // variant: 'default' (for light backgrounds), 'white' (for dark backgrounds)
  const isWhite = variant === 'white';
  const logoSrc = isWhite ? '/images/aura-logo-white.png' : '/images/aura-logo.png';

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F47721] rounded-lg p-0.5 transition-transform ${className}`} 
      aria-label="Aura Powertech Solutions Home"
    >
      <img
        src={logoSrc}
        alt="AURA POWERTECH SOLUTIONS"
        className={`${height} w-auto object-contain transition-all duration-300 group-hover:scale-105`}
        loading="eager"
      />
    </Link>
  );
}
