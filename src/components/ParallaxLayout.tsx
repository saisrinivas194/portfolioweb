'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Open_Sans } from 'next/font/google';
import styled from 'styled-components';

const openSans = Open_Sans({ subsets: ['latin'] });

const ParallaxContent = styled.div<{ $scrollY: number }>`
  position: relative;
  min-height: 100vh;
  background: transparent;
  z-index: 1;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

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
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .content-wrapper {
    background: transparent;
    transform: translateZ(0);
    will-change: transform;
    transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .text-container {
    background: transparent;
    color: #1f2937;
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.3);
    transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
    will-change: transform, opacity;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }

  .card {
    position: relative;
    background: white;
    transition: all 0.3s ease;
  }

  .horizontal-scroll-section {
    position: relative;
    z-index: 10;
    transform: none !important;
    will-change: transform;
    pointer-events: auto;
  }

  .timeline-container {
    position: relative;
    z-index: 10;
    transform: none !important;
    will-change: transform;
  }

  .timeline-wrap {
    position: relative;
    z-index: 10;
    will-change: transform;
  }

  .parallax-text-slow {
    transform: translateY(${props => Math.sin(props.$scrollY * 0.002) * 20}px);
    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
    will-change: transform;
  }

  .parallax-text-medium {
    transform: translateY(${props => Math.sin(props.$scrollY * 0.003) * -25}px);
    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
    will-change: transform;
  }

  .parallax-text-fast {
    transform: translateY(${props => Math.sin(props.$scrollY * 0.004) * 30}px);
    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
    will-change: transform;
  }

  .parallax-text-reverse {
    transform: translateY(${props => Math.sin(props.$scrollY * 0.003) * -30}px);
    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
    will-change: transform;
  }

  .parallax-slow {
    transform: translateY(${props => props.$scrollY * 0.08}px);
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    will-change: transform;
  }

  .parallax-medium {
    transform: translateY(${props => props.$scrollY * 0.12}px);
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    will-change: transform;
  }

  .parallax-fast {
    transform: translateY(${props => props.$scrollY * 0.16}px);
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    will-change: transform;
  }

  .parallax-reverse {
    transform: translateY(${props => props.$scrollY * -0.08}px);
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    will-change: transform;
  }

  .fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    transition: all 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    will-change: transform, opacity;
    
    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .gradient-heading {
    background: linear-gradient(to right, #06b6d4, #0f766e);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    transform: translateZ(0);
    transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
    will-change: transform;
    
    &:hover {
      transform: translateX(15px) scale(1.02);
    }
  }

  .parallax-card {
    transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
    will-change: transform;
    transform-style: preserve-3d;
    
    &:hover {
      transform: translateY(-8px) translateX(8px) scale(1.02);
    }
  }

  .parallax-image {
    transform: scale(${props => 1 + Math.sin(props.$scrollY * 0.002) * 0.1})
               translateY(${props => props.$scrollY * -0.08}px);
    transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    will-change: transform;
  }

  .text-parallax {
    transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
    transform-style: preserve-3d;
    perspective: 1000px;
    will-change: transform;
    
    &:hover {
      transform: translateZ(30px) scale(1.05);
    }
  }

  .stagger-animation > * {
    opacity: 0;
    transform: translateY(30px);
    transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    will-change: transform, opacity;
    
    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @for $i from 1 through 10 {
    .stagger-animation > *:nth-child(#{$i}) {
      transition-delay: ${props => 0.15 * props.$scrollY}s;
    }
  }
`;

interface ParallaxLayoutProps {
  children: React.ReactNode;
}

const ParallaxLayout: React.FC<ParallaxLayoutProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Show loading animation for 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setScrollY(window.scrollY);
      
      // Add fade-in effect for elements as they come into view
      const fadeElements = document.querySelectorAll('.fade-in-up, .stagger-animation > *');
      fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    });
  }, []);

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check for elements in view
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollBehavior = '';
    };
  }, [handleScroll]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm z-50 loading-screen">
        <div className="relative flex items-center justify-center">
          <img 
            src="/SSR.gif" 
            alt="Loading..." 
            className="w-80 h-80 object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <ParallaxContent $scrollY={scrollY} className={openSans.className}>
        {children}
      </ParallaxContent>
    </>
  );
};

export default ParallaxLayout; 