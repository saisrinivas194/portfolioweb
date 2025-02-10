'use client';

import React, { useEffect, useState } from 'react';
import ParallaxLayout from '@/components/ParallaxLayout';

export default function ParallaxWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
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

  return <ParallaxLayout>{children}</ParallaxLayout>;
} 