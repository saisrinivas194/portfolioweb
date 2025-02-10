'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ParallaxLayout from './ParallaxLayout';
import { FaMapMarkerAlt, FaClock, FaTrophy } from 'react-icons/fa';

const Internships = () => {
  const internshipData = [
    {
      company: "Findem, Inc.",
      role: "Research & Development Intern",
      duration: "Jul 2023 - Dec 2023",
      location: "Bengaluru, KA, India",
      description: "Working on innovative projects and contributing to company growth.",
      achievements: [
        "Managing data for marketing campaigns in Google Sheets",
        "Monitoring the performance and functionality of an ML bot for email reading",
        "Developing and utilizing internal web tools to conduct research and gather information based on specific requirements"
      ]
    },
    {
      company: "Webdaddy",
      role: "Research & Development Intern",
      duration: "Aug 2024 - Dec 2024",
      location: "Singapore",
      description: "Webdaddy is a parent company specializing in digital marketing, web development, AI-based solutions, SEO optimization, business development, and various other fields. It provides comprehensive services to enhance online presence and drive business growth.",
      achievements: [
        "Managing core team members and coordinating project activities",
        "Leading content writing and designing efforts for project deliverables",
        "Overseeing lead generation initiatives and optimizing strategies",
        "Contributing to decision-making processes based on data insights",
        "Handling data management tasks, ensuring accurate and efficient data flow within the R&D team"
      ]
    }
  ];

  return (
    <ParallaxLayout>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" id="internships">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-12 gradient-heading text-center">
            Internship Experience
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
            {internshipData.map((internship, index) => (
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
                    {internship.company}
                  </h3>
                  <h4 className="text-base text-gray-700 mb-4">
                    {internship.role}
                  </h4>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <FaClock className="text-[#3f2b96] flex-shrink-0" size={14} />
                      <span>{internship.duration}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-[#3f2b96] flex-shrink-0" size={14} />
                      <span>{internship.location}</span>
                    </div>
                  </div>

                  {/* Description Section */}
                  {internship.description && (
                    <div className="mb-4">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {internship.description}
                      </p>
                    </div>
                  )}
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <FaTrophy className="text-[#3f2b96] flex-shrink-0" size={14} />
                      <span className="text-sm font-semibold text-gray-700">Achievements/Tasks</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2">
                      {internship.achievements.map((achievement, idx) => (
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
        </motion.div>
      </div>
    </ParallaxLayout>
  );
};

export default Internships; 