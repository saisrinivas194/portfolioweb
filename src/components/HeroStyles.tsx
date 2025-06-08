'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import SkillNetwork from './SkillNetwork';

interface StyledComponentsProps {
  scrollY: number;
  children?: React.ReactNode;
}

const ParallaxContent = styled.div<{ scrollY: number }>`
  position: relative;
  min-height: 100vh;
  background: transparent;
  z-index: 1;

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
      background: transparent;
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

  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }

  .delay-300 {
    animation-delay: 0.3s;
  }

  .delay-500 {
    animation-delay: 0.5s;
  }

  .delay-700 {
    animation-delay: 0.7s;
  }

  .delay-1000 {
    animation-delay: 1s;
  }
`;

const StyledComponents: React.FC<StyledComponentsProps> = ({ scrollY, children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-white">
        {children}
      </div>
    );
  }

  return (
    <>
      <SkillNetwork />
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