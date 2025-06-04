'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ParallaxLayout from './ParallaxLayout';
import SocialIcon from '@/components/SocialIcon';
import Image from 'next/image';
import { FaDownload, FaFileAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <ParallaxLayout>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" id="contact">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-12 gradient-heading text-center">
            Contact & Resume
          </h1>

          {/* Resume Download Section */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto p-8 rounded-[20px] bg-white/90 card transition-all duration-300 hover:shadow-[0_0_30px_1px_rgba(63,43,150,0.3)] border-2 border-transparent hover:border-[#3f2b96]/30"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3f2b96] to-[#a8c0ff] flex items-center justify-center transform rotate-3 hover:rotate-6 transition-all duration-300 shadow-lg">
                    <FaFileAlt className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#3f2b96] to-[#a8c0ff] bg-clip-text text-transparent">Download Resume</h3>
                    <p className="text-gray-600 text-sm mt-2 max-w-sm">Get my detailed professional background and experience in data science and AI</p>
                  </div>
                </div>
                <a
                  href="/resume"
                  className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#3f2b96] to-[#a8c0ff] text-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-[#a8c0ff] hover:to-[#3f2b96]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center gap-3">
                    <FaDownload className="text-white text-xl group-hover:animate-bounce" />
                    <span className="font-semibold tracking-wide">Download CV</span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Rest of your contact content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        </motion.div>
      </div>
    </ParallaxLayout>
  );
};

export default Contact; 