import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ArrowUpRight, 
  MessageSquare, 
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import PageHeroBanner from '../components/layout/PageHeroBanner';
import { COMPANY_INFO } from '../data/company';
import { SERVICES } from '../data/services';

// Official WhatsApp Filled Icon
function WhatsAppIcon({ className = "w-6 h-6", ...props }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className} 
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// Subtle Palm Tree Silhouettes Artwork for Business Address Card matching reference
function PalmTreeSilhouettes({ className = "" }) {
  return (
    <div className={`pointer-events-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 240 80"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <defs>
          <linearGradient id="palmHillGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5EFFC" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D4E4FA" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="palmHillGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B8D2F4" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#91B6E8" stopOpacity="0.65" />
          </linearGradient>
        </defs>

        {/* Soft background hill */}
        <path
          d="M0,80 Q70,40 150,55 T240,42 L240,80 Z"
          fill="url(#palmHillGrad1)"
        />

        {/* Foreground hill */}
        <path
          d="M60,80 Q130,52 190,62 T240,58 L240,80 Z"
          fill="url(#palmHillGrad2)"
        />

        {/* Primary Palm Tree Silhouette */}
        <g fill="#91B6E8" opacity="0.85">
          <path d="M210,75 Q208,46 206,30 L208,30 Q210,46 212,75 Z" />
          <path d="M207,30 C198,24 186,26 180,33 C189,30 200,30 207,32 Z" />
          <path d="M207,30 C201,17 190,16 184,20 C193,20 202,23 207,32 Z" />
          <path d="M207,30 C207,16 211,10 215,12 C212,18 209,24 208,31 Z" />
          <path d="M208,30 C218,19 229,20 236,24 C229,26 218,27 208,32 Z" />
          <path d="M208,30 C220,25 233,32 237,39 C229,35 218,33 208,33 Z" />
        </g>

        {/* Secondary Palm Tree Silhouette */}
        <g fill="#B8D2F4" opacity="0.95">
          <path d="M185,78 Q183,55 181,38 L183,38 Q185,55 187,78 Z" />
          <path d="M182,38 C175,32 165,34 160,40 C167,37 176,37 182,39 Z" />
          <path d="M182,38 C177,26 168,25 163,28 C170,28 178,31 182,39 Z" />
          <path d="M182,38 C182,26 185,21 188,23 C186,28 184,33 183,39 Z" />
          <path d="M183,38 C191,28 200,29 206,33 C200,34 191,35 183,40 Z" />
          <path d="M183,38 C193,34 204,40 207,46 C200,43 191,41 183,41 Z" />
        </g>
      </svg>
    </div>
  );
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: preselectedService || 'Residential Solar Solutions',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submissionInitiated, setSubmissionInitiated] = useState(false);

  useEffect(() => {
    document.title = "Contact Us & Free Consultation — Aura Powertech Solutions | Kerala";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Format readable message for WhatsApp transmission
    const textLines = [
      `*New Solar Enquiry — Aura Powertech Solutions*`,
      `---------------------------------------`,
      `*Name:* ${formData.fullName.trim()}`,
      `*Phone:* ${formData.phone.trim()}`,
      formData.email.trim() ? `*Email:* ${formData.email.trim()}` : null,
      `*Service Interested In:* ${formData.service}`,
      formData.message.trim() ? `*Message:* ${formData.message.trim()}` : `*Message:* I would like to schedule a solar consultation for my property.`,
      `---------------------------------------`,
      `_Sent via aurapowertech.in contact enquiry_`
    ].filter(Boolean).join('\n');

    const cleanPhone = COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '');
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(textLines)}`;

    setSubmissionInitiated(true);

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* =========================================================================
          1. DEDICATED MOBILE HERO SECTION (< 768px)
          Exact match to attached reference image media_1795636450377_e6be2f7c.jpg
          ========================================================================= */}
      <div className="md:hidden">
        {/* Compact Architectural Hero Banner */}
        <section className="relative overflow-hidden min-h-[220px] xs:min-h-[240px] flex items-center bg-slate-950 text-white">
          {/* Background Photograph */}
          <div className="absolute inset-0 z-0">
            <picture>
              <source srcSet="/images/contact-hero-mobile.webp" type="image/webp" />
              <img
                src="/images/contact-hero-mobile.jpg"
                alt="Modern solar consultation studio and clean energy office"
                className="w-full h-full object-cover object-[60%_center]"
                fetchPriority="high"
              />
            </picture>

            {/* Horizontal Gradient Overlay (52% -> 28% -> 4%) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, rgba(5, 24, 48, 0.52) 0%, rgba(5, 24, 48, 0.28) 45%, rgba(5, 24, 48, 0.04) 100%)'
              }}
            />

            {/* Vertical Gradient Overlay (2% -> 12% -> 52% -> 92%) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(5, 24, 48, 0.02) 0%, rgba(5, 24, 48, 0.12) 35%, rgba(5, 24, 48, 0.52) 70%, rgba(5, 24, 48, 0.92) 100%)'
              }}
            />

            {/* Top Bar Gradient for Transparent Mobile Header */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-950/80 to-transparent pointer-events-none" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 w-full px-5 xs:px-6 pt-20 xs:pt-22 pb-8 xs:pb-9">
            <div className="max-w-[310px]">
              {/* Eyebrow: Short Orange Line + CONNECT WITH US */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-[3px] bg-[#F47721] rounded-[2px] inline-block shrink-0" />
                <span className="text-[10px] xs:text-[11px] font-bold uppercase tracking-[1.4px] text-white">
                  CONNECT WITH US
                </span>
              </div>

              {/* Heading: Get in Touch */}
              <h1 className="text-[28px] xs:text-[30px] font-extrabold text-white tracking-[-0.8px] leading-[1.15] mb-2.5">
                Get in <span className="text-[#F47721]">Touch</span>
              </h1>

              {/* Supporting Description */}
              <p className="text-[11.5px] xs:text-[12px] text-white/95 leading-[1.6] max-w-[285px] font-normal">
                Schedule a site consultation or request an engineered solar system proposal for your home or commercial enterprise.
              </p>
            </div>
          </div>

          {/* Signature Orange SVG Wave Decoration */}
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-[26px] xs:h-[28px] pointer-events-none z-10 block"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="contactWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF761C" />
                <stop offset="100%" stopColor="#FF9800" />
              </linearGradient>
            </defs>

            {/* Orange Wave Ribbon */}
            <path
              d="M0,48 C240,8 480,90 720,72 C980,62 1180,8 1440,0 L1440,100 L0,100 Z"
              fill="url(#contactWave)"
            />

            {/* White Section Base */}
            <path
              d="M0,62 C240,22 480,100 720,86 C980,76 1180,28 1440,24 L1440,100 L0,100 Z"
              fill="#FFFFFF"
            />
          </svg>
        </section>

        {/* Official Contact Details Section (Exact match to reference) */}
        <section className="bg-white px-5 xs:px-6 pt-5 xs:pt-6 pb-7">
          {/* Eyebrow Label */}
          <p className="text-[10.5px] font-bold uppercase tracking-[1px] text-[#F47721] mb-1">
            OFFICIAL CONTACT DETAILS
          </p>

          {/* Main Title */}
          <h2 className="text-[19px] xs:text-[20px] font-extrabold text-[#12153D] tracking-[-0.5px] leading-tight mb-2 font-display">
            Aura Powertech Solutions
          </h2>

          {/* Subtitle */}
          <p className="text-[11.5px] xs:text-[12px] text-slate-500 leading-relaxed mb-4">
            Reach out directly to our engineering team in Thiruvananthapuram via telephone, email, or WhatsApp.
          </p>

          {/* Business Address Cards: Main Office & Branch Office */}
          <div className="space-y-3">
            {/* Main Office Card */}
            <a
              href={COMPANY_INFO.mainOffice.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative overflow-hidden rounded-[14px] p-4 border border-[#DCE6F4] bg-gradient-to-br from-[#F8FAFD] via-[#F0F5FC] to-[#E7F0FC] shadow-[0_5px_12px_rgba(31,75,130,0.08)] active:scale-[0.99] transition-all cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-[17px] h-[17px] text-[#F47721] stroke-[2.2] shrink-0" />
                <span className="text-[11.5px] font-extrabold uppercase tracking-[0.4px] text-[#12153D]">
                  MAIN OFFICE
                </span>
              </div>

              {/* Address Lines */}
              <div className="text-[11.5px] xs:text-[12px] text-[#12153D] leading-[1.55] relative z-10 max-w-[62%]">
                <p className="font-bold text-[#12153D]">{COMPANY_INFO.mainOffice.building}</p>
                <p className="font-medium text-[#12153D]/90">{COMPANY_INFO.mainOffice.locality}, {COMPANY_INFO.mainOffice.city}</p>
                <p className="font-medium text-[#12153D]/90">{COMPANY_INFO.mainOffice.state} – {COMPANY_INFO.mainOffice.pincode}, India.</p>
              </div>

              {/* Subtle Blue Palm Tree Landscape Silhouette */}
              <PalmTreeSilhouettes className="absolute bottom-0 right-0 w-[44%] h-[68px] z-0" />
            </a>

            {/* Branch Office Card */}
            <div className="block relative overflow-hidden rounded-[14px] p-4 border border-[#DCE6F4] bg-gradient-to-br from-[#F8FAFD] via-[#F0F5FC] to-[#E7F0FC] shadow-[0_5px_12px_rgba(31,75,130,0.08)]">
              {/* Header */}
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-[17px] h-[17px] text-[#F47721] stroke-[2.2] shrink-0" />
                <span className="text-[11.5px] font-extrabold uppercase tracking-[0.4px] text-[#12153D]">
                  BRANCH OFFICE
                </span>
              </div>

              {/* Address Lines */}
              <div className="text-[11.5px] xs:text-[12px] text-[#12153D] leading-[1.55] relative z-10 max-w-[62%]">
                <p className="font-bold text-[#12153D]">{COMPANY_INFO.branchOffice.building}</p>
                <p className="font-medium text-[#12153D]/90">{COMPANY_INFO.branchOffice.locality}, {COMPANY_INFO.branchOffice.city}</p>
                <p className="font-medium text-[#12153D]/90">{COMPANY_INFO.branchOffice.state} – {COMPANY_INFO.branchOffice.pincode}, India.</p>
              </div>

              {/* Subtle Blue Palm Tree Landscape Silhouette */}
              <PalmTreeSilhouettes className="absolute bottom-0 right-0 w-[44%] h-[68px] z-0" />
            </div>
          </div>

          {/* Three Premium Contact Action Cards (1 Row, 3 Equal Columns) */}
          <div className="grid grid-cols-3 gap-2.5 mt-3.5">
            {/* 1. Call Us Card */}
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="group relative flex flex-col justify-between rounded-[13px] p-2.5 xs:p-3 border border-[#DFE8F5] bg-gradient-to-br from-[#FFFFFF] via-[#F3F7FC] to-[#EAF2FC] shadow-[0_4px_10px_rgba(31,75,130,0.08)] active:scale-[0.97] transition-all min-h-[92px] cursor-pointer"
            >
              <div className="w-[30px] h-[30px] rounded-full bg-[#FFF1E4] flex items-center justify-center text-[#F47721] shrink-0">
                <Phone className="w-4 h-4 text-[#F47721] stroke-[2.2]" />
              </div>
              <div className="mt-2">
                <p className="text-[11px] font-extrabold text-[#12153D] leading-tight">Call Us</p>
                <p className="text-[9.5px] xs:text-[10px] font-bold text-[#12153D] tracking-tight whitespace-nowrap mt-0.5">
                  +91 9633706081
                </p>
              </div>
            </a>

            {/* 2. Email Us Card */}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="group relative flex flex-col justify-between rounded-[13px] p-2.5 xs:p-3 border border-[#DFE8F5] bg-gradient-to-br from-[#FFFFFF] via-[#F3F7FC] to-[#EAF2FC] shadow-[0_4px_10px_rgba(31,75,130,0.08)] active:scale-[0.97] transition-all min-h-[92px] cursor-pointer"
            >
              <div className="w-[30px] h-[30px] rounded-full bg-[#FFF1E4] flex items-center justify-center text-[#F47721] shrink-0">
                <Mail className="w-4 h-4 text-[#F47721] stroke-[2.2]" />
              </div>
              <div className="mt-2">
                <p className="text-[11px] font-extrabold text-[#12153D] leading-tight">Email Us</p>
                <p className="text-[9px] xs:text-[9.5px] font-medium text-[#12153D] break-all leading-tight mt-0.5">
                  info@aurapowertech.in
                </p>
              </div>
            </a>

            {/* 3. WhatsApp Card */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between rounded-[13px] p-2.5 xs:p-3 border border-[#DFE8F5] bg-gradient-to-br from-[#FFFFFF] via-[#F3F7FC] to-[#EAF2FC] shadow-[0_4px_10px_rgba(31,75,130,0.08)] active:scale-[0.97] transition-all min-h-[92px] cursor-pointer"
            >
              <div className="w-[30px] h-[30px] flex items-center justify-center text-[#25D366] shrink-0">
                <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
              </div>
              <div className="mt-2">
                <p className="text-[11px] font-extrabold text-[#12153D] leading-tight">WhatsApp</p>
                <p className="text-[9.5px] xs:text-[10px] font-semibold text-[#12153D] flex items-center gap-0.5 mt-0.5">
                  <span>Chat with Us</span>
                  <span className="text-[11px]">→</span>
                </p>
              </div>
            </a>
          </div>
        </section>

        {/* Mobile Consultation Form */}
        <section className="bg-slate-50 px-5 xs:px-6 py-8 border-t border-slate-100">
          <div className="space-y-1.5 mb-6">
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#F47721]">
              Instant Consultation Request
            </span>
            <h3 className="text-[19px] font-extrabold text-[#12153D] tracking-tight font-display">
              Send Us an Enquiry
            </h3>
            <p className="text-[11.5px] text-slate-500 leading-relaxed font-normal">
              Fill in your project requirements below. Clicking submit will formulate a clean WhatsApp message and connect you directly with our team.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Full Name */}
            <div>
              <label htmlFor="mobile-fullName" className="block text-[11px] font-bold uppercase tracking-wider text-[#12153D] mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="mobile-fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Dr. K. Radhakrishnan"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#F47721] transition-all ${
                  errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                }`}
              />
              {errors.fullName && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="mobile-phone" className="block text-[11px] font-bold uppercase tracking-wider text-[#12153D] mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="mobile-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#F47721] transition-all ${
                  errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                }`}
              />
              {errors.phone && (
                <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="mobile-email" className="block text-[11px] font-bold uppercase tracking-wider text-[#12153D] mb-1.5">
                Email Address <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                id="mobile-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. client@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#F47721] transition-all"
              />
            </div>

            {/* Solar Service of Interest */}
            <div>
              <label htmlFor="mobile-service" className="block text-[11px] font-bold uppercase tracking-wider text-[#12153D] mb-1.5">
                Solar Solution Required
              </label>
              <select
                id="mobile-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#F47721] transition-all cursor-pointer"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="General Solar Enquiry">General Solar Feasibility Enquiry</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="mobile-message" className="block text-[11px] font-bold uppercase tracking-wider text-[#12153D] mb-1.5">
                Property / Project Details <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <textarea
                id="mobile-message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Roof type, monthly bill, or specific queries..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#F47721] transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-1">
              <button
                type="submit"
                className="font-btn w-full inline-flex items-center justify-center gap-2 bg-[#F47721] hover:bg-[#E06512] active:bg-[#C9540C] text-white text-xs py-3 px-5 rounded-xl shadow-sm transition-all duration-300 min-h-[46px] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Proceed to Send via WhatsApp</span>
              </button>
            </div>

            {submissionInitiated && (
              <div className="p-3 rounded-xl bg-green-50 border border-green-200 text-green-800 text-[11px] flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <strong>WhatsApp opened!</strong> Please review and press send in WhatsApp to deliver your enquiry.
                </div>
              </div>
            )}
          </form>
        </section>

        {/* Mobile Google Maps representation */}
        <section className="px-5 xs:px-6 py-6 bg-white border-t border-slate-100">
          <div className="rounded-2xl border border-slate-200/90 bg-[#F8FAFD] p-4 text-center space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#F47721]">
              Serving Trivandrum & Across Kerala
            </span>
            <h4 className="text-[15px] font-bold text-[#12153D]">
              Visit Our Offices in Thiruvananthapuram
            </h4>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              <span className="font-semibold text-[#12153D]">Main Office:</span> {COMPANY_INFO.mainOffice.formatted}
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              <span className="font-semibold text-[#12153D]">Branch Office:</span> {COMPANY_INFO.branchOffice.formatted}
            </p>
            <div className="pt-1">
              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-[#12153D] text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all w-full"
              >
                <MapPin className="w-3.5 h-3.5 text-[#F47721]" />
                <span>Open Main Office in Google Maps</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* =========================================================================
          2. PRESERVED DESKTOP & TABLET LAYOUT (>= 768px)
          Completely untouched for large screens
          ========================================================================= */}
      <div className="hidden md:block">
        {/* Header Banner with Precision Grading */}
        <PageHeroBanner
          badge="Connect With Us"
          title="Get in"
          highlightWord="Touch"
          description="Schedule a site consultation or request an engineered solar system proposal for your home or commercial enterprise."
          image="/images/hero-contact.jpg"
          alt="Modern solar consultation studio and clean energy advisory"
        />

        {/* Main Content Grid */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8 xl:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              
              {/* Left Column: Official Contact Details (5 cols) */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#F47721]">
                    Official Contact Details
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-extrabold text-[#30358B] tracking-tight font-display">
                    Aura Powertech Solutions
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Reach out directly to our engineering team in Thiruvananthapuram via telephone, email, or WhatsApp.
                  </p>
                </div>

                {/* Main Office & Branch Office Cards */}
                <div className="space-y-4">
                  {/* Main Office Card */}
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#30358B]">
                      <MapPin className="w-4 h-4 text-[#F47721]" />
                      <span>Main Office</span>
                    </div>
                    <address className="not-italic text-sm text-slate-700 leading-relaxed">
                      <strong>{COMPANY_INFO.mainOffice.building}</strong><br />
                      {COMPANY_INFO.mainOffice.locality}, {COMPANY_INFO.mainOffice.city}<br />
                      {COMPANY_INFO.mainOffice.state} – {COMPANY_INFO.mainOffice.pincode}, India.
                    </address>

                    <div className="pt-2">
                      <a
                        href={COMPANY_INFO.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F47721] hover:text-[#E06512] transition-colors py-1"
                      >
                        <span>Get Directions on Google Maps</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Branch Office Card */}
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#30358B]">
                      <MapPin className="w-4 h-4 text-[#F47721]" />
                      <span>Branch Office</span>
                    </div>
                    <address className="not-italic text-sm text-slate-700 leading-relaxed">
                      <strong>{COMPANY_INFO.branchOffice.building}</strong><br />
                      {COMPANY_INFO.branchOffice.locality}, {COMPANY_INFO.branchOffice.city}<br />
                      {COMPANY_INFO.branchOffice.state} – {COMPANY_INFO.branchOffice.pincode}, India.
                    </address>
                  </div>
                </div>

                {/* Phone Numbers Card with Click-to-Call */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#30358B]">
                    <Phone className="w-4 h-4 text-[#F47721]" />
                    <span>Direct Telephone Lines</span>
                  </div>
                  <div className="space-y-2">
                    {COMPANY_INFO.phones.map((p, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm py-1.5 border-b border-slate-200/60 last:border-0">
                        <div>
                          <span className="font-semibold text-slate-800">{p.number}</span>
                          <span className="text-xs text-slate-500 ml-1.5">({p.label})</span>
                        </div>
                        <a
                          href={`tel:${p.value}`}
                          className="text-xs font-bold text-[#F47721] hover:underline px-2 py-1"
                        >
                          Call Now
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Email & Registration Card */}
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#30358B]">
                    <Mail className="w-4 h-4 text-[#F47721]" />
                    <span>Email Correspondence</span>
                  </div>
                  <p className="text-sm">
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="font-semibold text-[#30358B] hover:text-[#F47721] transition-colors break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* Right Column: WhatsApp-Based Enquiry Form (7 cols) */}
              <div className="lg:col-span-7">
                <div className="p-8 lg:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-md">
                  <div className="space-y-2 mb-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#F47721]">
                      Instant Consultation Request
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-[#30358B] tracking-tight font-display">
                      Send Us an Enquiry
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      Fill in your project requirements below. Clicking submit will formulate a clean WhatsApp message and connect you directly with our team.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Full Name */}
                    <div>
                      <label htmlFor="desktop-fullName" className="block text-xs font-bold uppercase tracking-wider text-[#30358B] mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="desktop-fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Dr. K. Radhakrishnan"
                        className={`w-full px-4 py-3.5 rounded-xl bg-white border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/20 transition-all ${
                          errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="desktop-phone" className="block text-xs font-bold uppercase tracking-wider text-[#30358B] mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="desktop-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full px-4 py-3.5 rounded-xl bg-white border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/20 transition-all ${
                          errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="desktop-email" className="block text-xs font-bold uppercase tracking-wider text-[#30358B] mb-2">
                        Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        id="desktop-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. client@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/20 transition-all"
                      />
                    </div>

                    {/* Solar Service of Interest */}
                    <div>
                      <label htmlFor="desktop-service" className="block text-xs font-bold uppercase tracking-wider text-[#30358B] mb-2">
                        Solar Solution Required
                      </label>
                      <select
                        id="desktop-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/20 transition-all cursor-pointer"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="General Solar Enquiry">General Solar Feasibility Enquiry</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="desktop-message" className="block text-xs font-bold uppercase tracking-wider text-[#30358B] mb-2">
                        Your Property / Requirement Details <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <textarea
                        id="desktop-message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your property location, roof type, approximate monthly electricity bill, or specific queries..."
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/20 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="font-btn w-full inline-flex items-center justify-center gap-2 bg-[#F47721] hover:bg-[#E06512] active:bg-[#C9540C] text-white text-sm py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#F47721]/40 min-h-[48px] cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Proceed to Send via WhatsApp</span>
                      </button>
                    </div>

                    {/* Transparent Workflow Notice */}
                    <p className="text-xs text-slate-500 leading-relaxed text-center pt-1">
                      * This enquiry opens directly in WhatsApp on your device with your prefilled details, allowing you to review and send the message securely to Aura Powertech Solutions.
                    </p>

                    {submissionInitiated && (
                      <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-xs flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <strong>WhatsApp window opened!</strong> Please review and press send in WhatsApp to deliver your enquiry directly to our team.
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Embedded Google Maps Representation */}
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
                  Serving Trivandrum & Across Kerala
                </span>
                <h3 className="text-xl font-bold text-[#30358B]">
                  Visit Our Offices in Thiruvananthapuram
                </h3>
                <p className="text-xs text-slate-600">
                  <strong className="text-[#30358B]">Main Office:</strong> {COMPANY_INFO.mainOffice.formatted}
                </p>
                <p className="text-xs text-slate-600">
                  <strong className="text-[#30358B]">Branch Office:</strong> {COMPANY_INFO.branchOffice.formatted}
                </p>
              </div>

              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#30358B] hover:bg-[#1E2260] active:bg-[#12153D] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-xs transition-all whitespace-nowrap min-h-[44px]"
              >
                <MapPin className="w-4 h-4 text-[#F47721]" />
                <span>Open Main Office in Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
