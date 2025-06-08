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
          <h1 className="contact-bg-title">
            CONTACT
          </h1>

          {/* Resume Download Section */}
          <div className="mb-16 mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#0d9488]/30"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0d9488] to-[#7dd3fc] flex items-center justify-center transform rotate-3 hover:rotate-6 transition-all duration-300 shadow-lg">
                    <FaFileAlt className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#06b6d4] to-[#0f766e] bg-clip-text text-transparent">Download Resume</h3>
                    <p className="text-gray-600 text-sm mt-2 max-w-sm">Get my detailed professional background and experience in data science and AI</p>
                  </div>
                </div>
                <a
                  href="http://drive.google.com/file/d/1ckfuBq9dp_6m2X1v7wH36kI10E_2A5Hl/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-[#06b6d4] to-[#0f766e] text-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-[#0f766e] hover:to-[#06b6d4]"
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
            <div className="relative w-[450px] h-[225px] mx-auto mt-16">
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

      <style jsx>{`
        .contact-bg-title {
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          position: absolute;
          top: clamp(10px, 2vw, 20px);
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
          white-space: nowrap;
          font-family: "Arial Black", "Arial Bold", Arial, sans-serif;
          background: linear-gradient(
            to bottom,
            rgba(6, 182, 212, 0.6) 30%,
            rgba(15, 118, 110, 0.4) 76%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-align: center;
          width: 100%;
          padding: 0 1rem;
        }

        @media (max-width: 480px) {
          .contact-bg-title {
            font-size: 2rem;
            top: 5px;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .contact-bg-title {
            font-size: 3rem;
            top: 8px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .contact-bg-title {
            font-size: 4rem;
            top: 12px;
          }
        }
      `}</style>
    </ParallaxLayout>
  );
};

export default Contact; 