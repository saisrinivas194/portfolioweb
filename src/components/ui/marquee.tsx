'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
}) => {
  return (
    <div
      className={cn(
        'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
        className
      )}
    >
      <div
        className={cn(
          'flex shrink-0 justify-around [gap:var(--gap)]',
          'animate-marquee flex-row',
          reverse && 'animate-marquee-reverse',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          'flex shrink-0 justify-around [gap:var(--gap)]',
          'animate-marquee flex-row',
          reverse && 'animate-marquee-reverse',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
};

export default Marquee; 