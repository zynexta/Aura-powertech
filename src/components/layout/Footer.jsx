import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sun, 
  Layers, 
  Phone, 
  ChevronDown, 
  MapPin, 
  Mail, 
  ExternalLink 
} from 'lucide-react';
import Logo from '../ui/Logo';
import { COMPANY_INFO } from '../../data/company';
import { SERVICES } from '../../data/services';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Mobile accordion state: Solar Solutions open by default
  const [openSection, setOpenSection] = useState('solutions');

  const toggleSection = (sectionId) => {
    setOpenSection((prev) => (prev === sectionId ? null : sectionId));
  };

  return (
    <footer className="relative bg-[#060E20] text-slate-300 overflow-hidden">
      {/* =========================================================================
          1. DEDICATED MOBILE FOOTER (< 768px)
          Exact match to attached reference image media_1795671350370_93f77d66.jpg
          ========================================================================= */}
      <div className="md:hidden relative z-10 pt-10 xs:pt-12 pb-6">
        {/* Subtle Oversized Curved Background Waves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <svg
            viewBox="0 0 400 800"
            preserveAspectRatio="none"
            className="w-full h-full"
            aria-hidden="true"
          >
            <path
              d="M-50,140 C120,210 260,180 450,300"
              fill="none"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="50"
            />
            <path
              d="M-50,280 C140,400 240,340 450,500"
              fill="none"
              stroke="rgba(255, 255, 255, 0.03)"
              strokeWidth="70"
            />
          </svg>
        </div>

        <div className="px-5 xs:px-6 relative z-10">
          {/* Top-Left Logo */}
          <div className="flex items-center justify-start">
            <Logo 
              variant="white" 
              showTagline={false} 
              height="h-10 xs:h-11" 
              className="w-auto max-w-[210px]" 
            />
          </div>

          {/* Company Description */}
          <p className="text-[14px] xs:text-[14.5px] text-[#B5BED1] leading-[1.68] font-normal mt-5 max-w-[340px]">
            Delivering dependable, engineering-grade solar energy solutions for residences and commercial enterprises across Thiruvananthapuram and Kerala.
          </p>

          {/* Short Orange Horizontal Accent Line */}
          <div className="w-[44px] h-[2.5px] bg-[#FF7900] rounded-full mt-4 mb-6" />

          {/* Premium Accordion Cards */}
          <div className="space-y-4">
            {/* ----------------- 1. Solar Solutions Card (Expanded by Default) ----------------- */}
            <div className="w-full bg-[#10192D] rounded-[15px] border border-white/[0.08] shadow-[0_4px_20px_rgba(3,10,24,0.35)] overflow-hidden transition-all duration-300">
              <button
                type="button"
                onClick={() => toggleSection('solutions')}
                className="w-full p-4 xs:p-[18px] flex items-center justify-between text-left cursor-pointer focus:outline-none"
                aria-expanded={openSection === 'solutions'}
                aria-controls="accordion-content-solutions"
              >
                <div className="flex items-center gap-3.5">
                  <Sun className="w-[25px] h-[25px] text-[#FF7900] stroke-[2] shrink-0" />
                  <span className="text-[17px] font-semibold text-[#F8FAFC] tracking-tight">
                    Solar Solutions
                  </span>
                </div>
                <div className="w-[32px] h-[32px] rounded-full bg-[#1A253D] flex items-center justify-center text-slate-300 shrink-0">
                  <ChevronDown 
                    className={`w-4 h-4 text-slate-300 transition-transform duration-300 ease-in-out ${
                      openSection === 'solutions' ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
              </button>

              <div
                id="accordion-content-solutions"
                role="region"
                className={`grid transition-all duration-300 ease-in-out ${
                  openSection === 'solutions' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-white/[0.08] mx-4 xs:mx-[18px] pt-3.5 pb-4.5 space-y-3">
                    <Link
                      to="/solutions#residential-solar"
                      className="block text-[13.5px] xs:text-[14px] text-[#B5BED1] hover:text-white transition-colors"
                    >
                      Residential Solar Solutions
                    </Link>
                    <Link
                      to="/solutions#commercial-solar"
                      className="block text-[13.5px] xs:text-[14px] text-[#B5BED1] hover:text-white transition-colors"
                    >
                      Commercial Solar Solutions
                    </Link>
                    <Link
                      to="/solutions#rooftop-installations"
                      className="block text-[13.5px] xs:text-[14px] text-[#B5BED1] hover:text-white transition-colors"
                    >
                      Rooftop Solar Installations
                    </Link>
                    <Link
                      to="/solutions#solar-inverters"
                      className="block text-[13.5px] xs:text-[14px] text-[#B5BED1] hover:text-white transition-colors"
                    >
                      Solar Inverter Solutions
                    </Link>
                    <Link
                      to="/solutions"
                      className="block text-[13.5px] xs:text-[14px] text-[#B5BED1] hover:text-white transition-colors"
                    >
                      Solar System Maintenance & Support
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ----------------- 2. Explore Card ----------------- */}
            <div className="w-full bg-[#10192D] rounded-[15px] border border-white/[0.08] shadow-[0_4px_20px_rgba(3,10,24,0.35)] overflow-hidden transition-all duration-300">
              <button
                type="button"
                onClick={() => toggleSection('explore')}
                className="w-full p-4 xs:p-[18px] flex items-center justify-between text-left cursor-pointer focus:outline-none"
                aria-expanded={openSection === 'explore'}
                aria-controls="accordion-content-explore"
              >
                <div className="flex items-center gap-3.5">
                  <Layers className="w-[24px] h-[24px] text-[#FF7900] stroke-[2] shrink-0" />
                  <span className="text-[17px] font-semibold text-[#F8FAFC] tracking-tight">
                    Explore
                  </span>
                </div>
                <div className="w-[32px] h-[32px] rounded-full bg-[#1A253D] flex items-center justify-center text-slate-300 shrink-0">
                  <ChevronDown 
                    className={`w-4 h-4 text-slate-300 transition-transform duration-300 ease-in-out ${
                      openSection === 'explore' ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
              </button>

              <div
                id="accordion-content-explore"
                role="region"
                className={`grid transition-all duration-300 ease-in-out ${
                  openSection === 'explore' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-white/[0.08] mx-4 xs:mx-[18px] pt-3.5 pb-4.5 space-y-3">
                    <Link
                      to="/"
                      className="block text-[13.5px] xs:text-[14px] text-[#B5BED1] hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      className="block text-[13.5px] xs:text-[14px] text-[#B5BED1] hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/solutions"
                      className="block text-[13.5px] xs:text-[14px] text-[#B5BED1] hover:text-white transition-colors"
                    >
                      Solutions
                    </Link>
                    <Link
                      to="/projects"
                      className="block text-[13.5px] xs:text-[14px] text-[#B5BED1] hover:text-white transition-colors"
                    >
                      Projects
                    </Link>
                    <Link
                      to="/contact"
                      className="block text-[13.5px] xs:text-[14px] text-[#B5BED1] hover:text-white transition-colors"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ----------------- 3. Contact Us Card (Always Shown) ----------------- */}
            <div className="w-full bg-[#10192D] rounded-[15px] border border-white/[0.08] shadow-[0_4px_20px_rgba(3,10,24,0.35)] overflow-hidden transition-all duration-300">
              <div className="p-4 xs:p-[18px]">
                {/* Header */}
                <div className="flex items-center gap-3.5">
                  <Phone className="w-[23px] h-[23px] text-[#FF7900] stroke-[2.2] shrink-0" />
                  <span className="text-[17px] font-semibold text-[#F8FAFC] tracking-tight">
                    Contact Us
                  </span>
                </div>

                {/* Content - Always Visible */}
                <div className="border-t border-white/[0.08] mt-3.5 pt-3.5 space-y-3.5 text-[13px] xs:text-[13.5px]">
                  {/* Main Office Address */}
                  <div className="flex items-start gap-2.5 text-[#B5BED1]">
                    <MapPin className="w-4 h-4 text-[#FF7900] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7900] block mb-0.5">
                        Main Office
                      </span>
                      <address className="not-italic leading-relaxed">
                        {COMPANY_INFO.mainOffice.formatted}
                      </address>
                    </div>
                  </div>

                  {/* Branch Office Address */}
                  <div className="flex items-start gap-2.5 text-[#B5BED1]">
                    <MapPin className="w-4 h-4 text-[#FF7900] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7900] block mb-0.5">
                        Branch Office
                      </span>
                      <address className="not-italic leading-relaxed">
                        {COMPANY_INFO.branchOffice.formatted}
                      </address>
                    </div>
                  </div>

                  {/* Phone Numbers */}
                  <div className="flex items-start gap-2.5 text-[#B5BED1]">
                    <Phone className="w-4 h-4 text-[#FF7900] shrink-0 mt-0.5" />
                    <div className="flex flex-col space-y-1">
                      <a href={`tel:${COMPANY_INFO.primaryPhoneRaw}`} className="hover:text-white transition-colors">
                        {COMPANY_INFO.primaryPhone} (Primary)
                      </a>
                      <a href={`tel:+919633706004`} className="hover:text-white transition-colors text-slate-400">
                        +91 9633706004 (Support)
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-2.5 text-[#B5BED1]">
                    <Mail className="w-4 h-4 text-[#FF7900] shrink-0" />
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors break-all">
                      {COMPANY_INFO.email}
                    </a>
                  </div>

                  {/* Google Maps Directions */}
                  <div className="pt-1">
                    <a
                      href={COMPANY_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF7900] hover:text-[#FFA34D] transition-colors"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Signature Orange Wave Decoration matching reference image */}
        <div className="relative w-full h-[75px] xs:h-[85px] overflow-hidden pointer-events-none mt-6">
          <svg
            viewBox="0 0 480 120"
            preserveAspectRatio="none"
            className="w-full h-full block"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="footerMobileWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FA7E26" />
                <stop offset="45%" stopColor="#F47721" />
                <stop offset="100%" stopColor="#D95700" />
              </linearGradient>
              <linearGradient id="footerNavyWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0B1B38" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#08142B" stopOpacity="0.95" />
              </linearGradient>
            </defs>

            {/* Background dark navy wave layer */}
            <path
              d="M0,85 C140,88 240,65 340,78 C400,86 450,70 480,62 L480,120 L0,120 Z"
              fill="url(#footerNavyWaveGrad)"
            />

            {/* Main Orange Wave Layer */}
            <path
              d="M0,105 C120,108 220,95 320,68 C390,48 440,55 480,72 L480,120 L0,120 Z"
              fill="url(#footerMobileWaveGrad)"
            />

            {/* Top Highlight along the orange wave crest */}
            <path
              d="M0,105 C120,108 220,95 320,68 C390,48 440,55 480,72"
              fill="none"
              stroke="#FFB073"
              strokeWidth="1.5"
              strokeOpacity="0.65"
            />
          </svg>
        </div>

        {/* Mobile Footer Bottom Area */}
        <div className="px-5 xs:px-6 pt-3 pb-8 text-center space-y-2 relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-2 text-[10.5px] text-slate-400">
            <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded">
              GSTIN: {COMPANY_INFO.gstin}
            </span>
            <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded">
              UDYAM: {COMPANY_INFO.udyam}
            </span>
          </div>

          <p className="text-[11px] text-[#B5BED1]/75">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>

      {/* =========================================================================
          2. PRESERVED DESKTOP & TABLET FOOTER (>= 768px)
          Completely untouched for large screens
          ========================================================================= */}
      <div className="hidden md:block pt-12 sm:pt-16 pb-12 border-t border-white/10 relative">
        {/* Background Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F47721]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#30358B]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8 xl:px-10 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
            {/* Col 1: Brand Info (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <Logo variant="white" showTagline={true} height="h-16 lg:h-20" />
              <p className="font-body text-xs sm:text-sm text-slate-300/80 leading-[1.68] max-w-sm">
                Delivering dependable, engineering-grade solar energy solutions for residences and commercial enterprises across Thiruvananthapuram and Kerala.
              </p>
            </div>

            {/* Col 2: Solutions Quick Links (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="font-eyebrow text-xs text-white/90 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F47721]" />
                Solar Solutions
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <Link 
                      to={`/solutions#${s.id}`} 
                      className="font-sans text-slate-300/80 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 py-0.5"
                    >
                      <span>{s.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Navigation & Company (2 cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="font-eyebrow text-xs text-white/90 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F47721]" />
                Explore
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                {COMPANY_INFO.navLinks.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path} 
                      className="font-sans text-slate-300/80 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-1.5 py-0.5"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Verified Contact & Office (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="font-eyebrow text-xs text-white/90 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F47721]" />
                Contact Us
              </h3>
              <div className="space-y-3 text-xs sm:text-sm">
                {/* Main Office */}
                <div className="flex items-start gap-2.5 text-slate-300/90">
                  <MapPin className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F47721] block">
                      Main Office
                    </span>
                    <address className="not-italic text-xs leading-relaxed text-slate-300">
                      {COMPANY_INFO.mainOffice.building}, {COMPANY_INFO.mainOffice.locality},<br />
                      {COMPANY_INFO.mainOffice.city}, {COMPANY_INFO.mainOffice.state} – {COMPANY_INFO.mainOffice.pincode}, India.
                    </address>
                  </div>
                </div>

                {/* Branch Office */}
                <div className="flex items-start gap-2.5 text-slate-300/90">
                  <MapPin className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F47721] block">
                      Branch Office
                    </span>
                    <address className="not-italic text-xs leading-relaxed text-slate-300">
                      {COMPANY_INFO.branchOffice.building}, {COMPANY_INFO.branchOffice.locality},<br />
                      {COMPANY_INFO.branchOffice.city}, {COMPANY_INFO.branchOffice.state} – {COMPANY_INFO.branchOffice.pincode}, India.
                    </address>
                  </div>
                </div>

                <div className="flex flex-col space-y-1.5 pt-0.5">
                  {COMPANY_INFO.phones.map((phone, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <Phone className="w-3.5 h-3.5 text-[#F47721] shrink-0" />
                      <a 
                        href={`tel:${phone.value}`} 
                        className="hover:text-white transition-colors"
                      >
                        {phone.number} {idx === 0 && <span className="text-[10px] text-slate-400 font-normal">(Primary)</span>}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-0.5 text-xs">
                  <Mail className="w-3.5 h-3.5 text-[#F47721] shrink-0" />
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`} 
                    className="hover:text-white transition-colors break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Business Registration Badges */}
          <div className="py-6 flex flex-row items-center justify-between gap-3 text-[11px] text-slate-400 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px]">
                <span className="text-[#F47721] font-sans font-bold">GSTIN:</span> {COMPANY_INFO.gstin}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px]">
                <span className="text-[#F47721] font-sans font-bold">UDYAM:</span> {COMPANY_INFO.udyam}
              </span>
            </div>
            <span className="text-slate-400 text-xs">Certified Renewable Energy Enterprise • Kerala, India</span>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 flex flex-row items-center justify-between text-xs text-slate-400 gap-3">
            <p>© {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
            <div className="flex items-center gap-6 text-[11px]">
              <span>Thiruvananthapuram, Kerala, India</span>
              <span>•</span>
              <Link to="/contact" className="hover:text-white text-[#F47721] transition-colors">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
