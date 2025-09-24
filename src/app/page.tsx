'use client';

import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Certificates from '@/components/Certificates'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import ProfileChatBot from '@/components/ProfileChatBot'

export default function Home() {
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
        <ProfileChatBot />
      </div>
    </main>
  );
} 