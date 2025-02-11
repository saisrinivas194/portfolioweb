'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import dynamic from 'next/dynamic';

interface StyledComponentsProps {
  scrollY: number;
  children?: React.ReactNode;
}

const ParallaxContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  background-image: radial-gradient(#3f2b96 0.5px, transparent 0.5px), radial-gradient(#a8c0ff 0.5px, transparent 0.5px);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
  opacity: 0.05;

  .floating-logo {
    position: absolute;
    opacity: 0.04;
    filter: grayscale(100%) brightness(0.9);
    transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    will-change: transform;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    padding: 5px;
    backdrop-filter: blur(4px);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-1 {
    top: 15%;
    left: 10%;
    width: 120px;
    height: 120px;
    img {
      object-fit: cover;
      filter: brightness(1.2) contrast(1.2) saturate(1.1);
      background: transparent;
    }
  }

  .logo-2 {
    top: 60%;
    right: 15%;
    width: 130px;
    height: 130px;
    img {
      object-fit: cover;
      filter: brightness(1.2);
    }
  }

  .logo-3 {
    bottom: 20%;
    left: 20%;
    width: 100px;
    height: 100px;
    img {
      object-fit: cover;
      filter: contrast(1.2);
    }
  }

  .logo-4 {
    top: 30%;
    right: 25%;
    width: 110px;
    height: 110px;
    img {
      object-fit: cover;
      filter: brightness(1.1);
    }
  }

  .logo-5 {
    top: 45%;
    left: 30%;
    width: 115px;
    height: 115px;
    img {
      object-fit: cover;
      filter: brightness(1.15) contrast(1.1);
    }
  }

  .logo-6 {
    bottom: 35%;
    right: 35%;
    width: 105px;
    height: 105px;
    img {
      object-fit: cover;
      filter: brightness(1.1) contrast(1.05);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(63, 43, 150, 0.05), rgba(168, 192, 255, 0.05));
  }
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
`;

const StyledComponents: React.FC<StyledComponentsProps> = ({ scrollY, children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.setProperty('--scroll-float-x', `${scrollY * 0.1}px`);
      document.documentElement.style.setProperty('--scroll-float-y', `${scrollY * 0.05}px`);
    }
  }, [scrollY]);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-white">
        {children}
      </div>
    );
  }

  return (
    <>
      <ParallaxContainer>
        <Image
          src="/SSR.jpg"
          alt="Background Pattern"
          fill
          className="object-cover opacity-25"
          style={{ 
            transform: `translateY(${scrollY * 0.15}px) scale(${1 + Math.sin(scrollY * 0.002) * 0.05})`,
            transition: 'transform 1s cubic-bezier(0.165, 0.84, 0.44, 1)',
            willChange: 'transform',
            filter: 'hue-rotate(10deg) brightness(1.1) contrast(0.95)'
          }}
          priority
        />
        <div className="floating-logo logo-1d">e
          <Image src="/NJIT.png" alt="NJIT Logo" width={64} height={64} className="object-cover p-0.5" sizes="(max-width: 64px) 100vw, 64px" />
        </div>
        <div className="floating-logo logo-2">
          <Image 
            src="/KS.png" 
            alt="Keshava Reddy School Logo" 
            width={64} 
            height={64} 
            className="object-contain p-0.5" 
            sizes="(max-width: 64px) 100vw, 64px"
            priority 
          />
        </div>
        <div className="floating-logo logo-3">
          <Image src="/sc.png" alt="Sri Chaitanya Logo" fill className="object-contain" />
        </div>
        <div className="floating-logo logo-4">
          <Image src="/scsvmv.png" alt="SCSVMV Logo" fill className="object-contain" />
        </div>
        <div className="floating-logo logo-5">
          <Image src="/nit-logo.png" alt="NIT Logo" fill className="object-contain" />
        </div>
        <div className="floating-logo logo-6">
          <Image src="/keshava-logo.png" alt="Keshava Reddy Logo" fill className="object-contain" />
        </div>
      </ParallaxContainer>
      <ParallaxContent scrollY={scrollY}>
        <StyledWrapper>
          {children}
        </StyledWrapper>
      </ParallaxContent>
    </>
  );
};

export default dynamic(() => Promise.resolve(StyledComponents), {
  ssr: false
}); 