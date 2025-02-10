'use client';

import React from 'react';
import ParallaxLayout from './ParallaxLayout';
import SocialIcon from '@/components/SocialIcon';
import Image from 'next/image';

const Contact = () => {
  return (
    <ParallaxLayout>
      <div className="min-h-screen py-16 px-4" id="contact">
        <div className="max-w-[1600px] mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-12 gradient-heading text-center">
            Let's Connect
          </h1>
          
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex gap-6">
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

          {/* Bottom Logo */}
          <div className="relative w-[150px] h-[75px] mx-auto mt-16">
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
      </div>
    </ParallaxLayout>
  );
};

export default Contact; 