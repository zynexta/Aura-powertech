import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  ArrowRight, 
  Home, 
  Users, 
  Layers, 
  Mail, 
  ChevronRight, 
  ChevronDown, 
  Calendar 
} from 'lucide-react';
import Logo from '../ui/Logo';
import { COMPANY_INFO } from '../../data/company';

// Minimalist Solar Panel Outline Icon for Solutions item matching reference
function SolarPanelIcon({ className = "w-[19px] h-[19px]", ...props }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className} 
      {...props}
    >
      <rect x="3" y="4" width="18" height="11" rx="1.5" />
      <line x1="3" y1="9.5" x2="21" y2="9.5" />
      <line x1="9" y1="4" x2="9" y2="15" />
      <line x1="15" y1="4" x2="15" y2="15" />
      <line x1="12" y1="15" x2="12" y2="20" />
      <line x1="8" y1="20" x2="16" y2="20" />
    </svg>
  );
}

// Subtle Kerala-inspired Landscape Artwork (Misty hills and coconut palm silhouettes)
function KeralaLandscapeArtwork() {
  return (
    <div className="relative w-full h-[75px] xs:h-[85px] overflow-hidden pointer-events-none mt-auto">
      <svg
        viewBox="0 0 320 90"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <defs>
          <linearGradient id="misty-hills-1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EBF3FD" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#DFECF9" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="misty-hills-2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D2E3F7" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#C0D7F3" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="misty-hills-3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A4C7ED" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#92B8E5" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Distant Mountains */}
        <path
          d="M0,60 Q50,38 105,52 T220,44 T320,48 L320,90 L0,90 Z"
          fill="url(#misty-hills-1)"
        />

        {/* Mid-ground Hills */}
        <path
          d="M0,68 Q45,55 95,66 T210,58 T320,62 L320,90 L0,90 Z"
          fill="url(#misty-hills-2)"
        />

        {/* Foreground Layer */}
        <path
          d="M0,78 Q70,70 150,75 T260,72 T320,74 L320,90 L0,90 Z"
          fill="url(#misty-hills-3)"
        />

        {/* Kerala Palm Trees on the right */}
        <g fill="#769ECB" opacity="0.92">
          {/* Main Palm Trunk */}
          <path d="M280,74 Q276,54 274,34 L277,34 Q279,54 282,74 Z" />
          {/* Main Palm Fronds */}
          <path d="M275,34 C265,29 252,32 248,39 C256,36 268,35 275,36 Z" />
          <path d="M275,34 C268,24 258,22 252,26 C260,26 270,29 275,35 Z" />
          <path d="M275,34 C274,22 277,16 282,18 C280,23 278,29 276,35 Z" />
          <path d="M276,34 C285,24 295,24 302,28 C295,29 285,30 276,36 Z" />
          <path d="M276,34 C288,30 300,36 304,42 C296,38 286,37 276,36 Z" />
          <path d="M275,35 C270,42 262,48 256,52 C264,46 272,42 276,37 Z" />
          <path d="M276,35 C282,42 290,47 298,50 C290,45 282,41 276,37 Z" />

          {/* Secondary Palm Tree */}
          <path d="M255,76 Q252,58 250,44 L252,44 Q254,58 256,76 Z" />
          <path d="M251,44 C244,39 236,41 232,46 C238,44 246,44 251,45 Z" />
          <path d="M251,44 C246,35 238,34 234,37 C240,37 247,39 251,45 Z" />
          <path d="M251,44 C251,34 254,29 257,31 C255,35 253,40 252,45 Z" />
          <path d="M252,44 C259,36 267,37 272,40 C267,41 259,42 252,46 Z" />
          <path d="M252,44 C261,40 270,45 273,50 C267,47 259,46 252,46 Z" />
        </g>
      </svg>
    </div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsExpanded, setSolutionsExpanded] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change & handle body scroll lock + escape key
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Determine navbar styling:
  // Home page, About Us page, Projects page, Contact page, and Solutions page have transparent dark-mode header over architectural hero banner when unscrolled.
  const isTransparent = (isHomePage || location.pathname === '/about' || location.pathname === '/projects' || location.pathname === '/contact' || location.pathname === '/solutions') && !isScrolled;

  const solutionSubmenu = [
    { name: 'Residential Solar', path: '/solutions#residential-solar' },
    { name: 'Commercial Solar', path: '/solutions#commercial-solar' },
    { name: 'Industrial Solar', path: '/solutions#commercial-solar' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent 
            ? 'bg-gradient-to-r from-[#031B35]/95 via-[#082C50]/90 to-[#173D60]/85 md:bg-gradient-to-b md:from-slate-950/70 md:via-slate-950/20 md:to-transparent backdrop-blur-md md:backdrop-blur-none py-3 md:py-4 lg:py-5 border-b border-white/10 md:border-transparent' 
            : 'bg-white/95 backdrop-blur-md shadow-sm py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between h-10 sm:h-auto">
            {/* Official Logo (85-95px width on mobile, balanced on desktop) */}
            <Logo 
              variant={isTransparent ? 'white' : 'default'} 
              height={isScrolled ? 'h-8 sm:h-9 lg:h-11' : 'h-8 sm:h-10 lg:h-12'} 
              className="w-[88px] xs:w-[94px] md:w-auto"
            />

            {/* Desktop Navigation Links (Centered, Refined Tracking) */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5" aria-label="Main Navigation">
              {COMPANY_INFO.navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    font-nav-label relative px-4 py-2 text-xs rounded-full transition-all duration-200
                    ${isTransparent 
                      ? (isActive 
                          ? 'text-white bg-white/15' 
                          : 'text-slate-200/90 hover:text-white hover:bg-white/10')
                      : (isActive 
                          ? 'text-[#F47721] bg-orange-50 font-bold' 
                          : 'text-[#30358B] hover:text-[#F47721] hover:bg-slate-50')
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <span 
                          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full ${
                            isTransparent ? 'bg-[#F47721]' : 'bg-[#F47721]'
                          }`} 
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Action CTA & Quick Contact (Desktop) */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              <a 
                href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                className={`font-sans flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-full border transition-all duration-200 ${
                  isTransparent 
                    ? 'text-slate-200 border-white/20 hover:border-white/40 hover:bg-white/10' 
                    : 'text-[#30358B] border-slate-200 hover:border-[#30358B]/30 hover:bg-slate-50'
                }`}
                title={`Call us at ${COMPANY_INFO.primaryPhone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#F47721]" />
                <span className="tracking-wide">{COMPANY_INFO.primaryPhone}</span>
              </a>

              <Link
                to="/contact"
                className="font-btn inline-flex items-center gap-1.5 bg-[#F47721] hover:bg-[#E06512] text-white text-xs px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#F47721] focus:ring-offset-2"
              >
                <span>FREE QUOTE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger & Quick Call Toggle (Matching Reference: Squircle 38px phone button, 14-16px gap, 24px hamburger) */}
            <div className="flex items-center gap-3.5 md:hidden">
              <a
                href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                className={`w-[38px] h-[38px] rounded-[13px] flex items-center justify-center transition-all active:scale-95 ${
                  isTransparent 
                    ? 'text-[#F47721] border border-white/25 bg-white/10 backdrop-blur-sm shadow-xs hover:bg-white/20' 
                    : 'text-[#30358B] border border-slate-200 bg-slate-50'
                }`}
                aria-label="Call Aura Powertech Solutions"
              >
                <Phone className="w-4 h-4 text-[#F47721]" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`w-6 h-6 flex items-center justify-center focus:outline-none transition-colors active:scale-95 ${
                  isTransparent ? 'text-white' : 'text-[#30358B]'
                }`}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 stroke-[2]" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Floating Navigation Card (Matching Screenshot Reference) */}
      {/* Backdrop: Subtle 15-20% opacity dark navy overlay */}
      <div 
        className={`fixed inset-0 z-[58] bg-[#051830]/20 backdrop-blur-[1px] transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={() => setMobileMenuOpen(false)} 
        aria-hidden="true"
      />

      {/* Floating Card suspended in the upper-right */}
      <div
        id="mobile-navigation-card"
        aria-label="Mobile Navigation Menu"
        aria-hidden={!mobileMenuOpen}
        className={`fixed top-[66px] xs:top-[70px] right-3 xs:right-4 z-[60] md:hidden w-[58vw] xs:w-[54vw] min-w-[218px] max-w-[268px] bg-white shadow-2xl shadow-slate-950/40 rounded-[26px] border border-white/80 flex flex-col overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileMenuOpen 
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 scale-95 translate-y-[-8px] pointer-events-none'
        }`}
      >
        {/* Subtle Ambient Curved Glow (Top-Right) */}
        <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-blue-100/70 to-transparent rounded-full blur-lg pointer-events-none" />

        {/* Card Content Container */}
        <div className="p-3 xs:p-3.5 pb-1 flex flex-col relative z-10">
          
          {/* Card Header: Branded Logo + Circular Close Button */}
          <div className="flex items-center justify-between mb-3 pt-0.5">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block"
            >
              <img
                src="/images/aura-logo.png"
                alt="Aura Powertech Solutions"
                className="h-7 xs:h-8 w-auto object-contain max-w-[100px] xs:max-w-[110px]"
              />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-[30px] h-[30px] rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 hover:text-[#F47721] hover:bg-slate-100 active:scale-95 transition-all shadow-xs"
              aria-label="Close navigation menu"
            >
              <X className="w-4 h-4 stroke-[2.2]" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col space-y-0.5" aria-label="Mobile Floating Menu Navigation">
            {COMPANY_INFO.navLinks.map((item) => {
              const isSolutions = item.path === '/solutions';
              const isActive = location.pathname === item.path;
              
              const IconComponent = 
                item.name === 'Home' ? Home :
                item.name === 'About Us' ? Users :
                item.name === 'Solutions' ? SolarPanelIcon :
                item.name === 'Projects' ? Layers : Mail;

              return (
                <div key={item.path} className="flex flex-col">
                  <div
                    className={`flex items-center justify-between px-2.5 py-2 rounded-[13px] transition-all min-h-[40px] ${
                      isActive 
                        ? 'bg-[#FFF1E4] text-[#F47721]' 
                        : 'text-[#12153D] hover:bg-slate-50 border-b border-slate-100/60'
                    }`}
                  >
                    <Link
                      to={item.path}
                      onClick={() => {
                        if (!isSolutions) {
                          setMobileMenuOpen(false);
                        }
                      }}
                      className="flex items-center gap-2.5 flex-1 min-w-0"
                    >
                      <IconComponent className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#F47721]' : 'text-[#12153D]'}`} />
                      <span className={`text-[12.5px] xs:text-[13px] tracking-tight ${isActive ? 'font-bold' : 'font-semibold'}`}>
                        {item.name}
                      </span>
                    </Link>

                    {isSolutions ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSolutionsExpanded(!solutionsExpanded);
                        }}
                        className="p-1 text-slate-400 hover:text-[#30358B] transition-colors focus:outline-none"
                        aria-label="Toggle solutions submenu"
                        aria-expanded={solutionsExpanded}
                      >
                        {solutionsExpanded ? (
                          <ChevronDown className="w-3.5 h-3.5 text-[#30358B]" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                        )}
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-1 focus:outline-none"
                      >
                        <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-[#F47721]' : 'text-slate-400'}`} />
                      </Link>
                    )}
                  </div>

                  {/* Expandable Solutions Submenu */}
                  {isSolutions && solutionsExpanded && (
                    <div className="mt-1 mb-1.5 ml-6 mr-1 p-2 bg-[#EDF4FD] rounded-[12px] border border-blue-100/60 flex flex-col space-y-1.5">
                      {solutionSubmenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 text-[11px] font-medium text-[#1E293B] hover:text-[#F47721] transition-colors py-0.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Get a Free Consultation Button */}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-3 mb-1 w-full h-[40px] px-3 bg-gradient-to-r from-[#F47721] to-[#FF7A1A] hover:from-[#E06512] hover:to-[#F47721] text-white rounded-[13px] flex items-center justify-between shadow-xs transition-transform active:scale-[0.98]"
          >
            <div className="flex items-center gap-2 min-w-0">
              <Calendar className="w-4 h-4 text-white shrink-0" />
              <div className="h-4 w-[1px] bg-white/40 shrink-0" />
              <span className="text-[11px] xs:text-[11.5px] font-bold text-white tracking-tight truncate">
                Get a Free Consultation
              </span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-white shrink-0 ml-1" />
          </Link>

        </div>

        {/* Bottom Decorative Wave Accent (Inside Card) */}
        <div className="relative w-full h-5 overflow-hidden pointer-events-none mt-0.5">
          <svg viewBox="0 0 240 24" preserveAspectRatio="none" className="w-full h-full block">
            <path d="M0,14 C60,22 160,6 240,12 L240,24 L0,24 Z" fill="#EBF3FD" />
            <path d="M0,18 C80,10 180,20 240,16 L240,24 L0,24 Z" fill="#D7E7F8" />
          </svg>
        </div>
      </div>
    </>
  );
}
