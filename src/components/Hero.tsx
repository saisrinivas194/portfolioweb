'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Open_Sans } from 'next/font/google';
import Image from 'next/image';
import styled from 'styled-components';
import LinkedInTooltip from './LinkedInTooltip';
import SocialIcon from '@/components/SocialIcon';
import { RandomizedTextEffect } from '@/components/RandomizedTextEffect';
import Button from './Button';
import { FaBars, FaTimes } from 'react-icons/fa';

const openSans = Open_Sans({ subsets: ['latin'] });

const ParallaxContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`;

const ParallaxContent = styled.div<{ scrollY: number }>`
  position: relative;
  min-height: 100vh;
  background: transparent;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    z-index: -1;
  }

  section {
    position: relative;
    z-index: 2;
  }

  .content-wrapper {
    background: transparent;
  }

  .text-container {
    background: transparent;
    color: #1f2937;
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5);
  }

  .hero-section {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.1)
      );
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      z-index: -1;
    }
  }

  img {
    position: relative;
    z-index: 3;
  }
`;

const StyledWrapper = styled.div`
  @keyframes textShine {
    0% {
      background-position: 0% 50%;
      text-shadow: 2px 2px 10px rgba(63, 43, 150, 0.3),
                  -2px -2px 10px rgba(168, 192, 255, 0.3);
      transform: translateY(0px);
    }
    25% {
      text-shadow: 4px 4px 20px rgba(63, 43, 150, 0.5),
                  -4px -4px 20px rgba(168, 192, 255, 0.5);
      transform: translateY(-2px);
    }
    50% {
      background-position: 100% 50%;
      text-shadow: 6px 6px 30px rgba(63, 43, 150, 0.4),
                  -6px -6px 30px rgba(168, 192, 255, 0.4);
      transform: translateY(0px);
    }
    75% {
      text-shadow: 4px 4px 20px rgba(63, 43, 150, 0.5),
                  -4px -4px 20px rgba(168, 192, 255, 0.5);
      transform: translateY(2px);
    }
    100% {
      background-position: 0% 50%;
      text-shadow: 2px 2px 10px rgba(63, 43, 150, 0.3),
                  -2px -2px 10px rgba(168, 192, 255, 0.3);
      transform: translateY(0px);
    }
  }

  .tooltip-container {
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 17px;
    border-radius: 10px;
  }

  .tooltip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    border-radius: 15px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(255, 255, 255, 0.1),
      5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  }

  .profile {
    background: #2a2b2f;
    border-radius: 10px 15px;
    padding: 10px;
    border: 1px solid rgba(11, 63, 95, 1);
  }

  .tooltip-container:hover .tooltip {
    top: -150px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .icon {
    text-decoration: none;
    color: #fff;
    display: block;
    position: relative;
  }
  .layer {
    width: 55px;
    height: 55px;
    transition: transform 0.3s;
  }
  .icon:hover .layer {
    transform: rotate(-35deg) skew(20deg);
  }
  .layer span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #fff;
    border-radius: 5px;
    transition: all 0.3s;
  }

  .layer span,
  .text {
    color: #1da1f2;
    border-color: #1da1f2;
  }

  .icon:hover.layer span {
    box-shadow: -1px 1px 3px #1da1f2;
  }
  .icon .text {
    position: absolute;
    left: 50%;
    bottom: -5px;
    opacity: 0;
    font-weight: 500;
    transform: translateX(-50%);
    transition: bottom 0.3s ease, opacity 0.3s ease;
  }
  .icon:hover .text {
    bottom: -35px;
    opacity: 1;
  }

  .icon:hover .layer span:nth-child(1) {
    opacity: 0.2;
  }
  .icon:hover .layer span:nth-child(2) {
    opacity: 0.4;
    transform: translate(5px, -5px);
  }
  .icon:hover .layer span:nth-child(3) {
    opacity: 0.6;
    transform: translate(10px, -10px);
  }
  .icon:hover .layer span:nth-child(4) {
    opacity: 0.8;
    transform: translate(15px, -15px);
  }
  .icon:hover .layer span:nth-child(5) {
    opacity: 1;
    transform: translate(20px, -20px);
  }

  .layer span.fab {
    font-size: 30px;
    line-height: 64px;
    text-align: center;
    fill: #1da1f2;
    background: #000;
  }
  .user {
    display: flex;
    gap: 10px;
  }
  .img {
    width: 50px;
    height: 50px;
    font-size: 25px;
    font-weight: 700;
    border: 1px solid #1da1f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }
  .name {
    font-size: 17px;
    font-weight: 700;
    color: #1da1f2;
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 0;
    color: #fff;
  }
  .about {
    color: #ccc;
    padding-top: 5px;
  }
`;

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const fullText = 'Sai Srinivas Pedhapolla';
  
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  
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

  return (
    <>
      <ParallaxContainer>
        <Image
          src="/videos/back.png"
          alt="Background Pattern"
          fill
          className="object-cover opacity-20"
          style={{ 
            transform: `translateY(${scrollY * 0.15}px) scale(${1 + Math.sin(scrollY * 0.002) * 0.05})`,
            transition: 'transform 1s cubic-bezier(0.165, 0.84, 0.44, 1)',
            willChange: 'transform'
          }}
        />
      </ParallaxContainer>
      <ParallaxContent scrollY={scrollY}>
        <section className={`min-h-screen flex items-center justify-center relative hero-section ${openSans.className}`}>
          {/* Logo Section */}
          <div 
            className="absolute top-4 sm:top-8 left-4 sm:left-8 z-50"
            style={{ 
              transform: `translateY(${scrollY * 0.08}px)`,
              transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
              willChange: 'transform',
              opacity: 0.9
            }}
          >
            <div className="relative w-[150px] sm:w-[200px] h-[75px] sm:h-[100px]">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="hover:scale-110 transition-all duration-300 object-contain mix-blend-normal"
                style={{
                  filter: 'brightness(1) contrast(1)'
                }}
                priority
              />
            </div>
          </div>

          <div className="container mx-auto px-4 py-8 sm:py-16 content-wrapper">
            {/* Hamburger Menu Button (visible on mobile/tablet) */}
            <div className="lg:hidden absolute top-24 sm:top-2 right-4 z-50">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-white/90 shadow-lg hover:bg-white transition-all duration-300"
              >
                {isMenuOpen ? (
                  <FaTimes className="w-6 h-6 text-[#3f2b96]" />
                ) : (
                  <FaBars className="w-6 h-6 text-[#3f2b96]" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed top-0 right-0 h-screen w-64 bg-white/95 shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className="flex flex-col items-center pt-20 gap-4">
                <Button text="EDUCATION" href="#education" />
                <Button text="INTERNSHIPS" href="#internships" />
                <Button text="SKILLS" href="#skills" />
                <Button text="PROJECTS" href="#projects" />
                <Button text="CERTIFICATES" href="#certificates" />
                <Button text="CONTACT" href="#contact" />
              </div>
            </div>

            {/* Desktop Navigation (visible on laptop) */}
            <div className="hidden lg:flex absolute top-2 left-[55%] transform -translate-x-1/2 z-50 flex-wrap justify-center gap-4 sm:gap-8 lg:gap-20 w-full max-w-6xl px-4">
              <Button text="EDUCATION" href="#education" />
              <Button text="INTERNSHIPS" href="#internships" />
              <Button text="SKILLS" href="#skills" />
              <Button text="PROJECTS" href="#projects" />
              <Button text="CERTIFICATES" href="#certificates" />
              <Button text="CONTACT" href="#contact" />
            </div>

            {/* Overlay for mobile menu */}
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
                  className="animate-float relative z-10 w-full max-w-[300px] sm:max-w-[500px]"
                  style={{ 
                    transform: `translateY(${scrollY * -0.1}px) scale(${1 - scrollY * 0.0002})`,
                  }}
                >
                  <img
                    src="/meee.PNG"
                    alt="Sai Srinivas"
                    className="w-full h-auto max-h-[350px] sm:max-h-[550px] object-contain rounded-3xl"
                  />
                </div>
              </div>

              {/* Content section */}
              <div 
                className="order-1 md:order-none space-y-4 sm:space-y-6 relative z-20 max-w-xl text-container"
                style={{ 
                  transform: `translateY(${scrollY * 0.15}px)`,
                }}
              >
                <div className="space-y-4">
                  <div className="text-sm md:text-base font-semibold tracking-wide px-3 sm:px-5 py-2 sm:py-3 inline-block rounded-xl animate-fade-in-right">
                    <span 
                      className="inline-block hover:scale-105 transition-transform duration-300"
                      style={{
                        background: 'linear-gradient(to right, #3f2b96, #a8c0ff)',
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'Black',
                        animation: 'textShine 4s ease-in-out infinite',
                        fontWeight: '600'
                      }}
                    >
                      👋 <RandomizedTextEffect text="Welcome to my portfolio" />
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-none animate-fade-in-up group">
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">Hey!</span>{' '}
                      <span className="inline-block hover:animate-bounce-text transition-all duration-300 cursor-default">I'm</span>
                    </h1>
                    <div className="space-y-2">
                      <div 
                        className="relative text-xl sm:text-2xl md:text-4xl font-bold tracking-tight whitespace-normal sm:whitespace-nowrap inline-block min-h-[40px] sm:min-h-[50px] leading-tight"
                        style={{
                          background: 'linear-gradient(to right, #3f2b96, #a8c0ff)',
                          backgroundSize: '200% auto',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          color: 'transparent',
                          animation: 'textShine 4s ease-in-out infinite',
                          textShadow: '2px 2px 4px rgba(63, 43, 150, 0.2)',
                        }}
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
                  <SocialIcon 
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
                  <SocialIcon
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
                  <SocialIcon
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
                  <SocialIcon 
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
                  <SocialIcon 
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
      </ParallaxContent>
    </>
  );
};

export default Hero;