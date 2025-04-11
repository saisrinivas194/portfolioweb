'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ParallaxLayout from './ParallaxLayout';
import { FaMapMarkerAlt, FaClock, FaTrophy, FaQuoteRight } from 'react-icons/fa';

const Experience = () => {
  const handleScrollToTestimonials = () => {
    document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
  };

  const experienceData = [
    {
      company: "Webdaddy",
      role: "Research & Development Intern",
      duration: "Aug 2024 - Feb 2025",
      location: "Singapore (Remote, Freelance)",
      description: "Working on AI-powered solutions and machine learning implementations for data processing and analysis.",
      achievements: [
        "Developed AI-powered data annotation tools in Python, improving labelling efficiency by 35%",
        "Built and optimized ML models for text classification using TensorFlow and NLP techniques",
        "Automated data collection and preprocessing pipelines, reducing manual effort by 40%",
        "Conducted exploratory data analysis (EDA) to identify trends and improve model accuracy"
      ]
    },
    {
      company: "Findem, Inc.",
      role: "Research & Development",
      duration: "Jul 2023 - Dec 2023",
      location: "Bengaluru, India",
      description: "Focused on machine learning model development and data processing optimization.",
      achievements: [
        "Managed large-scale data annotation projects for training ML models with 98% accuracy",
        "Developed Python scripts to clean, analyze, and visualize complex datasets",
        "Optimized an email classification ML model, improving prediction accuracy by 25%",
        "Created internal tools for automated data validation and quality assurance"
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
          <h1 className="text-3xl md:text-4xl font-bold mb-12 gradient-heading text-center">
            Experience
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full max-w-xl p-4 sm:p-6 rounded-[20px] bg-white/90 card flex flex-col transition-all duration-300 hover:scale-[0.98] hover:shadow-[0_0_30px_1px_rgba(63,43,150,0.3)] border-2 border-transparent hover:border-[#3f2b96]/30"
              >
                {/* Content */}
                <div className="relative h-full flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-1.5 bg-gradient-to-r from-[#3f2b96] to-[#a8c0ff] bg-clip-text text-transparent">
                    {experience.company}
                  </h3>
                  <h4 className="text-base text-gray-700 mb-4">
                    {experience.role}
                  </h4>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <FaClock className="text-[#3f2b96] flex-shrink-0" size={14} />
                      <span>{experience.duration}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#3f2b96] flex-shrink-0" size={14} />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  {/* Description Section */}
                  {experience.description && (
                    <div className="mb-4">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                  )}
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <FaTrophy className="text-[#3f2b96] flex-shrink-0" size={14} />
                      <span className="text-sm font-semibold text-gray-700">Achievements/Tasks</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-600 text-sm leading-relaxed">
                          <span className="pl-1">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#3f2b96] to-[#a8c0ff] text-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-[#a8c0ff] hover:to-[#3f2b96]"
            >
              <FaQuoteRight className="text-white text-xl group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-semibold tracking-wide">View Recommendations</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </ParallaxLayout>
  );
};

export default Experience; 