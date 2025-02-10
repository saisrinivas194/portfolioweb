'use client';

import ParallaxLayout from '@/components/ParallaxLayout';

export default function ParallaxWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ParallaxLayout>{children}</ParallaxLayout>;
} 