import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="fixed top-0 z-50 flex items-center h-20 sm:h-24 logo-fixed-position">
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
  );
};

export default Logo; 