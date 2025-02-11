'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Open_Sans } from 'next/font/google';
import Image from 'next/image';
import { RandomizedTextEffect } from '@/components/RandomizedTextEffect';
import Button from './Button';
import { FaBars, FaTimes } from 'react-icons/fa';
import SocialIcon from '@/components/SocialIcon';
import dynamic from 'next/dynamic';
import '../styles/Hero.css';

const openSans = Open_Sans({ subsets: ['latin'] });

// Dynamically import styled components to avoid SSR issues
const StyledComponents = dynamic(() => import('./HeroStyles'), {
  ssr: false,
  loading: () => <div className="min-h-screen" /> // Loading placeholder
});

// Properly typed dynamic imports
const RandomizedTextEffectClient = dynamic<{ text: string }>(() => 
  import('./RandomizedTextEffect').then((mod) => mod.RandomizedTextEffect), {
  ssr: false,
  loading: () => <div className="h-6" />
});

const SocialIconClient = dynamic<any>(() => 
  import('./SocialIcon').then((mod) => mod.default), {
  ssr: false,
  loading: () => <div className="w-10 h-10" />
});

const ButtonClient = dynamic<any>(() => 
  import('./Button').then((mod) => mod.default), {
  ssr: false,
  loading: () => <div className="w-24 h-8" />
});

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const fullText = 'Sai Srinivas Pedhapolla';
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScroll = useCallback(() => {
    if (typeof window !== 'undefined') {
      setScrollY(window.scrollY);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  const handleMenuClick = useCallback((href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const animateText = () => {
      const currentLength = displayText.length;
      
      if (!isDeleting && currentLength === fullText.length) {
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentLength === 0) {
        timeout = setTimeout(() => setIsDeleting(false), 500);
      } else {
        const delta = isDeleting ? -1 : 1;
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, currentLength + delta));
        }, isDeleting ? 50 : 100);
      }
    };

    timeout = setTimeout(animateText, 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, fullText]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.setProperty('--scroll-y', `${scrollY * 0.08}px`);
      document.documentElement.style.setProperty('--scroll-scale', `${1 - scrollY * 0.0002}`);
    }
  }, [scrollY]);

  const renderButton = useCallback((text: string, href: string) => (
    <div key={href} onClick={() => handleMenuClick(href)}>
      <ButtonClient text={text} href={href} />
    </div>
  ), [handleMenuClick]);

  const navigationButtons = [
    { text: "EDUCATION", href: "#education" },
    { text: "INTERNSHIPS", href: "#internships" },
    { text: "SKILLS", href: "#skills" },
    { text: "PROJECTS", href: "#projects" },
    { text: "CERTIFICATES", href: "#certificates" },
    { text: "CONTACT", href: "#contact" }
  ];

  // Don't render anything until client-side hydration is complete
  if (!isMounted) {
    return <div className="min-h-screen" />; // Loading placeholder
  }

  const content = (
    <section className={`min-h-screen flex items-center justify-center relative hero-section ${openSans.className}`}>
      {/* Logo Section */}
      <div className="absolute top-4 sm:top-8 left-4 sm:left-8 z-50 logo-container">
        <div className="relative w-[150px] sm:w-[200px] h-[75px] sm:h-[100px]">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            className="hover:scale-110 transition-all duration-300 object-contain mix-blend-normal logo-image"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-16 content-wrapper">
        {/* Hamburger Menu Button */}
        <div className="lg:hidden absolute top-24 sm:top-2 right-4 z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-white/90 shadow-lg hover:bg-white transition-all duration-300"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6 text-[#3f2b96]" />
            ) : (
              <FaBars className="w-6 h-6 text-[#3f2b96]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed top-0 right-0 h-screen w-64 bg-white/95 shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center pt-20 gap-4">
            {navigationButtons.map((button) => renderButton(button.text, button.href))}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex absolute top-2 left-[55%] transform -translate-x-1/2 z-50 flex-wrap justify-center gap-4 sm:gap-8 lg:gap-20 w-full max-w-6xl px-4">
          {navigationButtons.map((button) => renderButton(button.text, button.href))}
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center mt-16 sm:mt-0">
          {/* Image section */}
          <div className="order-2 md:order-none relative flex justify-center items-center min-h-[400px] sm:min-h-[600px]">
            <div 
              className="animate-float relative z-10 w-full max-w-[300px] sm:max-w-[500px] floating-image"
            >
              <img
                src="/image.png"
                alt="Sai Srinivas"
                className="w-full h-auto max-h-[350px] sm:max-h-[550px] object-contain rounded-3xl"
              />
            </div>
          </div>

          {/* Content section */}
          <div 
            className="order-1 md:order-none space-y-4 sm:space-y-6 relative z-20 max-w-xl text-container content-section"
          >
            <div className="space-y-4">
              <div className="text-sm md:text-base font-semibold tracking-wide px-3 sm:px-5 py-2 sm:py-3 inline-block rounded-xl animate-fade-in-right">
                <span 
                  className="inline-block hover:scale-105 transition-transform duration-300 welcome-text"
                >
                  👋 <RandomizedTextEffectClient text="Welcome to my portfolio" />
                </span>
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-none animate-fade-in-up group">
                  <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Hey!</span>{' '}
                  <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">I'm</span>
                </h1>
                <div className="space-y-2">
                  <div 
                    className="relative text-xl sm:text-2xl md:text-4xl font-bold tracking-tight whitespace-normal sm:whitespace-nowrap inline-block min-h-[40px] sm:min-h-[50px] leading-tight name-text"
                  >
                    {displayText}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-full bg-[#a8c0ff] animate-blink"></div>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl text-gray-800 tracking-tight animate-fade-in-up delay-300 leading-snug">
                    <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">AI-Powered</span>{' '}
                    <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Web</span>{' '}
                    <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">&</span>{' '}
                    <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Data</span>{' '}
                    <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Science</span>{' '}
                    <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Engineer</span>
                  </h2>
                </div>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-700 tracking-wide animate-fade-in-up delay-500 leading-relaxed max-w-2xl">
              Aspiring Data Scientist with a strong foundation in Python, AI prompting, Machine Learning, Deep Learning, and AI-driven content creation. Experienced in Research & Development through an internship, with hands-on expertise in Tableau and AI-powered web development. Passionate about leveraging AI tools and data-driven insights to solve complex problems, drive innovation, and contribute to cutting-edge advancements in AI and data science. Seeking a challenging role where I can apply my skills in research, development, and analytics to create impactful solutions.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 animate-fade-in-up delay-1000">
              <SocialIconClient 
                type="github"
                url="https://github.com/saisrinivas194"
                tooltip={{
                  initials: "SP",
                  name: "Sai Srinivas",
                  username: "saisrinivas194",
                  description: "19+ Repositories"
                }}
                color="#333"
              />
              <SocialIconClient
                type="linkedin"
                url="https://www.linkedin.com/in/sai-srinivas-pedhapolla-345959256/"
                tooltip={{
                  initials: "SP",
                  name: "Sai Srinivas",
                  username: "saisrinivas",
                  description: "500+ Connections"
                }}
                color="#0a66c2"
              />
              <SocialIconClient
                type="twitter"
                url="https://x.com/SaiSrinivas194"
                tooltip={{
                  initials: "SP",
                  name: "Sai Srinivas",
                  username: "SaiSrinivas194",
                  description: "Follow me on X"
                }}
                color="#000000"
              />
              <SocialIconClient 
                type="email"
                url="mailto:pedhapollasaisrinivas@gmail.com"
                tooltip={{
                  initials: "SP",
                  name: "Sai Srinivas",
                  username: "saisrinivas",
                  description: "pedhapollasaisrinivas@gmail.com"
                }}
                color="#EA4335"
              />
              <SocialIconClient 
                type="phone"
                url="tel:+12017059891"
                tooltip={{
                  initials: "SP",
                  name: "Sai Srinivas",
                  username: "saisrinivas",
                  description: "+1 (201) 705-9891"
                }}
                color="#34A853"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <StyledComponents scrollY={scrollY}>
      {content}
    </StyledComponents>
  );
};

export default dynamic(() => Promise.resolve(Hero), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-white" />
});