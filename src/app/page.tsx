'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero'
import Education from '@/components/Education'
import Internships from '@/components/Internships'
import Projects from '@/components/Projects'
import Certificates from '@/components/Certificates'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import ScrollToTop from '@/components/ScrollToTop'

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
        <Internships />
        <Projects />
        <Certificates />
        <Testimonials />
        <Contact />
        <ScrollToTop />
      </div>
    </main>
  );
} 