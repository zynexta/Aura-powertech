import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Intro from '../components/sections/Intro';
import SolutionsGrid from '../components/sections/SolutionsGrid';
import WhyChooseSolar from '../components/sections/WhyChooseSolar';
import FeaturedInstallations from '../components/sections/FeaturedInstallations';
import ProcessTimeline from '../components/sections/ProcessTimeline';
import CTASection from '../components/sections/CTASection';

export default function Home() {
  useEffect(() => {
    document.title = "Aura Powertech Solutions — Premium Solar Energy Solutions | Kerala";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <Intro />
      <SolutionsGrid />
      <WhyChooseSolar />
      <FeaturedInstallations />
      <ProcessTimeline />
      <CTASection />
    </main>
  );
}
