'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Certificates from '@/components/Certificates'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import ScrollToTop from '@/components/ScrollToTop'
import Dashya from '@/components/Dashya'

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="overflow-hidden">
      <div className="animate-fade-in">
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Testimonials />
        <Contact />
        <ScrollToTop />
        <Dashya />
      </div>
    </main>
  );
} 