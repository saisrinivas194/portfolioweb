'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParallaxLayout from './ParallaxLayout';
import { FaMapMarkerAlt, FaClock, FaTrophy, FaQuoteRight } from 'react-icons/fa';

const Experience = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Advanced scroll-based animations
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.3, 0.1]);
  const titleScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);

  const handleScrollToTestimonials = () => {
    document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Enhanced scroll listener for advanced effects
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    
    // Only apply effects if we're on the experience section
    const experienceSection = document.getElementById('experience');
    if (!experienceSection) return;
    
    const sectionRect = experienceSection.getBoundingClientRect();
    const isInSection = sectionRect.top < window.innerHeight && sectionRect.bottom > 0;
    
    if (isInSection) {
      // Add smooth scroll-based animations to cards
      const cards = document.querySelectorAll('.experience-card');
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > window.innerHeight * 0.1;
        
        if (isVisible) {
          const cardCenter = rect.top + rect.height / 2;
          const windowCenter = window.innerHeight / 2;
          const distanceFromCenter = Math.abs(cardCenter - windowCenter);
          const maxDistance = window.innerHeight / 2;
          const proximity = Math.max(0, 1 - distanceFromCenter / maxDistance);
          
          const element = card as HTMLElement;
          
          // Smooth parallax effect based on proximity to center
          const parallaxStrength = Math.sin(proximity * Math.PI) * 15;
          const scaleEffect = 1 + (proximity * 0.02);
          const opacityEffect = Math.max(0.7, 0.7 + proximity * 0.3);
          
          element.style.transform = `translateY(${parallaxStrength}px) scale(${scaleEffect})`;
          element.style.opacity = `${opacityEffect}`;
          
          // Add subtle rotation for depth
          const rotationEffect = (cardCenter - windowCenter) / windowCenter * 1;
          element.style.transform += ` rotateX(${rotationEffect}deg)`;
        }
      });
      
      // Floating elements effect
      const floatingElements = document.querySelectorAll('.floating-badge, .floating-element');
      floatingElements.forEach((element, index) => {
        const htmlElement = element as HTMLElement;
        const floatOffset = Math.sin((currentScrollY * 0.002) + (index * 0.5)) * 3;
        htmlElement.style.transform += ` translateY(${floatOffset}px)`;
      });
    }
  }, []);

  useEffect(() => {
    // Smooth scrolling setup
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add scroll event listener with throttling
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', scrollListener, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener('scroll', scrollListener);
      document.documentElement.style.scrollBehavior = '';
    };
  }, [handleScroll]);

  const experienceData = [
    {
      company: "Webdaddy",
      role: "Python Developer R&D Specialist",
      duration: "Aug 2024 - Feb 2025",
      location: "Bengaluru, India",
      achievements: [
        "Built from the ground up AI applications end-to-end with Python (FastAPI, Django) and React/Next.js, resulting in a 30% accord feature velocity gain.",
        "Developed API's and 2 Automation Pipelines, increased lead gen by 40% and automated 20+ hours of manual work a week.",
        "Built real-time KPI dashboards in Tableau and Dash to help make decisions 25% faster.",
        "Integrated large language models (STD/LLMs) with cloud providers (AWS, GCP), shrinking development life period by 15%, and enlarging overall product coverage."
      ]
    },
    {
      company: "Findem, Inc.",
      role: "R&D Data Science Analyst",
      duration: "Jul 2023 - Dec 2023",
      location: "Bengaluru, India",
      achievements: [
        "Preprocessed and validated 1M+ data records for ML training, increasing classification accuracy by 25% for emails with supervised learning and annotation.",
        "Standardized automated ETL pipelines and KPI reporting in SQL resulting in 30% less resources spent and reducing errors.",
        "Championed Agile process (Jira, Trello), decreasing project turn around time by 20%."
      ]
    }
  ];

  return (
    <ParallaxLayout>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" id="experience">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          {/* Large background title */}
          <h1 className="experience-bg-title">
            EXPERIENCE
          </h1>
          
          <div className="flex flex-col gap-8 sm:gap-12 items-center mt-20 max-w-4xl mx-auto stagger-children" data-scroll-animation="fade">
            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="group relative w-full max-w-5xl experience-card animate-on-scroll"
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: index * 0.1 }
                }}
                viewport={{ once: false, amount: 0.3 }}
                data-scroll-animation="parallax"
                data-floating="true"
              >
                                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 group-hover:border-purple-200">
                  {/* Advanced background gradients */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-100/20 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
                  
                                       <div className="relative p-6 lg:p-8">
                    {/* Advanced floating badge */}
                    <div className="absolute right-4 top-4 w-12 h-12 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-purple-100">
                      <FaTrophy className="h-5 w-5 text-purple-500" />
                    </div>
                    
                    <div className="mt-4 space-y-4">
                      {/* Advanced company name with shine effect */}
                      <div className="relative">
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-[#06b6d4] via-[#0f766e] to-[#06b6d4] bg-size-200 bg-clip-text text-transparent animate-gradient group-hover:animate-shine transition-all duration-300">
                          {experience.company}
                        </h3>
                          <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#06b6d4] to-[#0f766e] group-hover:w-full transition-all duration-500 rounded-full"></div>
                      </div>
                      
                      {/* Enhanced role with badge style */}
                      <div className="flex items-center gap-3">
                          <div className="px-3 py-1 bg-gradient-to-r from-[#06b6d4]/10 to-[#0f766e]/10 rounded-full border border-[#06b6d4]/20">
                            <h4 className="text-base font-semibold text-[#06b6d4]">
                            {experience.role}
                          </h4>
                    </div>
                  </div>

                      {/* Enhanced description with better typography */}
                      {/* Removed description section - not needed */}
                    </div>
                    
                                         {/* Advanced info badges */}
                     <div className="mt-6 flex flex-col gap-4">
                       <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                                                   <div className="group/badge flex items-center gap-2 rounded-full bg-gradient-to-r from-[#06b6d4]/10 via-[#06b6d4]/5 to-transparent px-4 py-2 border border-[#06b6d4]/20 hover:border-[#06b6d4]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#06b6d4]/10">
                            <div className="w-8 h-8 rounded-full bg-[#06b6d4]/10 flex items-center justify-center group-hover/badge:scale-110 transition-transform duration-300">
                              <FaClock className="h-3 w-3 text-[#06b6d4]" />
                           </div>
                            <span className="text-xs sm:text-sm font-semibold text-[#06b6d4]">{experience.duration}</span>
                         </div>
                          <div className="group/badge flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0f766e]/10 via-[#0f766e]/5 to-transparent px-4 py-2 border border-[#0f766e]/20 hover:border-[#0f766e]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#0f766e]/10">
                            <div className="w-8 h-8 rounded-full bg-[#0f766e]/10 flex items-center justify-center group-hover/badge:scale-110 transition-transform duration-300">
                              <FaMapMarkerAlt className="h-3 w-3 text-[#0f766e]" />
                           </div>
                            <span className="text-xs sm:text-sm font-semibold text-[#0f766e]">{experience.location}</span>
                         </div>
                       </div>
                     </div>

                    {/* Advanced achievements section */}
                    <div className="mt-6 flex-1 flex flex-col">
                      <div className="relative mb-4">
                        <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#06b6d4]/5 to-[#0f766e]/5 rounded-xl border border-[#06b6d4]/10">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#0f766e] flex items-center justify-center shadow-lg">
                            <FaTrophy className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-gray-800">Key Achievements</h5>
                            <span className="text-xs text-gray-500 font-medium">{experience.achievements.length} accomplishments</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3 flex-1">
                        {experience.achievements.map((achievement, idx) => (
                          <div key={idx} className="group/achievement relative">
                                                         <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50/80 to-cyan-50/30 border border-gray-100/50 hover:border-[#06b6d4]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#06b6d4]/10 hover:bg-gradient-to-r hover:from-cyan-50/60 hover:to-teal-50/40">
                              <div className="relative flex-shrink-0 mt-1">
                                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#0f766e] group-hover/achievement:scale-125 transition-all duration-300 group-hover/achievement:shadow-lg group-hover/achievement:shadow-[#06b6d4]/30">
                                </div>
                                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#0f766e] opacity-30 group-hover/achievement:scale-150 transition-all duration-300"></div>
                              </div>
                              <p className="text-gray-700 text-sm leading-relaxed font-medium flex-1 group-hover/achievement:text-gray-800 transition-colors duration-300">
                                {achievement}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={handleScrollToTestimonials}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#06b6d4] to-[#0f766e] text-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-[#0f766e] hover:to-[#06b6d4]"
            >
              <FaQuoteRight className="text-white text-xl group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-semibold tracking-wide">View Recommendations</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .experience-bg-title {
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

        /* Advanced animations */
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-shine {
          position: relative;
          overflow: hidden;
        }

        .animate-shine::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shine 2s ease-in-out;
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .bg-size-200 {
          background-size: 200% 200%;
        }

        /* Advanced scroll effects */
        .experience-card {
          will-change: transform, opacity;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .experience-card:nth-child(even) {
          animation-delay: 0.1s;
        }

        .experience-card:nth-child(odd) {
          animation-delay: 0.2s;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Advanced parallax effects */
        .parallax-element {
          transform: translateZ(0);
          will-change: transform;
        }

        /* Intersection observer animations */
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .animate-slide-up {
          animation: slideInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-slide-left {
          animation: slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-slide-right {
          animation: slideInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        /* Scroll-triggered animations */
        .scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .scroll-reveal.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* Enhanced responsiveness */
        @media (max-width: 480px) {
          .experience-bg-title {
            font-size: 2rem;
            top: 5px;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .experience-bg-title {
            font-size: 3rem;
            top: 8px;
          }
          
          .group/badge {
            flex: 1;
            min-width: 0;
          }
          
          .group/achievement .flex {
            gap: 3;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .experience-bg-title {
            font-size: 4rem;
            top: 12px;
          }
        }

        @media (max-width: 640px) {
          .group/badge {
            flex: 1;
            justify-content: center;
          }
          
          .group/badge span {
            font-size: 0.75rem;
          }
          
          .group/achievement .p-3 {
            padding: 0.75rem;
          }
        }
      `}</style>
    </ParallaxLayout>
  );
};

export default Experience; 
