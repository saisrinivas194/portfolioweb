'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Open_Sans } from 'next/font/google';
import Image from 'next/image';
import { RandomizedTextEffect } from '@/components/RandomizedTextEffect';
import Button from './Button';
import { FaBars, FaTimes } from 'react-icons/fa';
import SocialIcon from '@/components/SocialIcon';
import dynamic from 'next/dynamic';
import Link from 'next/link';
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
    { text: "EXPERIENCE", href: "#experience" },
    { text: "SKILLS", href: "#skills" },
    { text: "PROJECTS", href: "#projects" },
    { text: "CERTIFICATES", href: "#certificates" },
    { text: "RECOMMENDATIONS", href: "#testimonials" },
    { text: "CONTACT", href: "#contact" }
  ];

  // Don't render anything until client-side hydration is complete
  if (!isMounted) {
    return <div className="min-h-screen" />; // Loading placeholder
  }

  const content = (
    <section className={`min-h-screen flex flex-col relative hero-section ${openSans.className}`}>
      {/* Header Container - Logo and Navigation */}
      <div className="relative z-50 flex items-center justify-between w-full px-4 sm:px-6 lg:px-8 h-20 sm:h-24">
        {/* Logo Component */}
        <div className="flex items-center logo-position">
          <Link href="/">
            <div className="relative w-[280px] sm:w-[320px] lg:w-[360px] xl:w-[400px] h-[140px] sm:h-[160px] lg:h-[180px] xl:h-[200px]">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
                className="hover:scale-105 transition-all duration-300 object-contain mix-blend-normal logo-image"
            priority
          />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - Slightly Right of Center */}
        <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2 nav-position">
          <div className="flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
            {navigationButtons.map((button) => renderButton(button.text, button.href))}
        </div>
      </div>

        {/* Mobile Menu Button - Right Side */}
        <div className="lg:hidden flex-shrink-0">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white/95 hover:shadow-xl transition-all duration-300 border border-white/20"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6 text-[#06b6d4]" />
            ) : (
              <FaBars className="w-6 h-6 text-[#06b6d4]" />
            )}
          </button>
        </div>
        </div>

        {/* Mobile Menu */}
        <div 
        className={`lg:hidden fixed top-0 right-0 h-screen w-72 sm:w-80 bg-white/95 backdrop-blur-md shadow-2xl z-50 transform transition-all duration-300 ease-in-out border-l border-white/20 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full bg-white/80 hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="Close menu"
          >
            <FaTimes className="w-5 h-5 text-[#06b6d4]" />
          </button>
        </div>

        <div className="flex flex-col pt-4 px-6 space-y-6">
          {navigationButtons.map((button, index) => (
            <div 
              key={button.href} 
              className={`transform transition-all duration-300 ease-out ${isMenuOpen ? 'menu-item-enter' : 'menu-item-exit'}`}
            >
              {renderButton(button.text, button.href)}
            </div>
          ))}
        </div>
        </div>

      {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 items-center mt-12 sm:mt-0">
          {/* Image section */}
            <div className="order-2 md:order-none relative flex flex-col justify-center items-center min-h-[300px] sm:min-h-[400px] space-y-8">
            <div 
                className="animate-float relative z-10 w-full max-w-[250px] sm:max-w-[350px] floating-image"
            >
              <img
                src="/image.png"
                alt="Sai Srinivas"
                  className="w-full h-auto max-h-[250px] sm:max-h-[350px] object-contain"
              />
              </div>
              
              {/* Social Media Icons below image */}
              <div className="relative z-50 flex flex-wrap justify-center gap-3 sm:gap-4 animate-fade-in-up delay-1000 mt-4 mb-8">
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

            {/* Content section */}
            <div 
              className="order-1 md:order-none space-y-3 sm:space-y-5 relative z-20 max-w-2xl text-container content-section"
            >
              <div className="space-y-3">
                <div className="text-sm md:text-base font-semibold tracking-wide px-3 sm:px-4 py-2 inline-block rounded-xl animate-fade-in-right">
                  <span 
                    className="inline-block hover:scale-105 transition-transform duration-300 welcome-text"
                  >
                    👋 <RandomizedTextEffectClient text="Welcome to my portfolio" />
                  </span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight animate-fade-in-up group">
                    <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Hey!</span>{' '}
                    <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">I'm</span>
                  </h1>
                  <div className="space-y-1">
                    <div 
                      className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight inline-block min-h-[35px] sm:min-h-[45px] leading-tight name-text"
                    >
                      {displayText}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-full bg-[#7dd3fc] animate-blink"></div>
                    </div>
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 tracking-tight animate-fade-in-up delay-300 leading-snug">
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Python</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Developer</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">|</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Full-Stack</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Engineer</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">|</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Data</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Analyst</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">|</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Frontend</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Developer</span>
                    </h2>
                    <h3 className="text-sm sm:text-base md:text-lg text-gray-600 tracking-tight animate-fade-in-up delay-400 leading-relaxed mt-2">
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Data-Driven</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Solutions</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">•</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Web</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Application</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Development</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">•</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Analytics</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">&</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Visualization</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">•</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Python</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">•</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">SQL</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">•</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">React/Next.js</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">•</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Power</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">BI</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">•</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Cloud</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">(AWS/GCP)</span>
                    </h3>
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700 tracking-wide animate-fade-in-up delay-500 leading-relaxed text-justify">
                A full stack developer and data analyst with a strong foundation in cloud (AWS/GCP) platforms, Python, React/Next.js, and SQL. Proof of developing data pipelines, APIs, and scalable web apps to deliver quantifiable business value. A track record of using automation pipelines, predictive analytics, and real-time dashboards to improve decision-making, efficiency, and accuracy.
              </p>
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