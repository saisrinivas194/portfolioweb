'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ParallaxLayout from './ParallaxLayout';
import { FaMapMarkerAlt, FaClock, FaTrophy } from 'react-icons/fa';
import Image from 'next/image';

const Education = () => {
  const educationData = [
    {
      institution: "New Jersey Institute of Technology (NJIT)",
      degree: "Masters of Science (Data Science)",
      duration: "January 2024 - May 2025",
      location: "Newark, NJ, USA",
      gpa: "3.381/4 GPA",
      logo: "/NJIT.png",
      courses: [
        "Machine Learning",
        "Deep Learning",
        "Big Data Analytics",
        "Data Visualization",
        "Statistical Analysis",
        "AI & Prompt Engineering",
        "Frontend using AI"
      ]
    },
    {
      institution: "SCSVMV University",
      degree: "B.E., Computer Science and Engineering",
      duration: "June 2019 - June 2023",
      location: "Kanchipuram, TN, India",
      gpa: "9.43/10 GPA",
      logo: "/scsvmv.png",
      courses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems",
        "Software Engineering",
        "Web Technologies",
        "Python Programming"
      ]
    }
  ];

  return (
    <ParallaxLayout>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" id="education">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-12 gradient-heading text-center">
            Education
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {educationData.map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full p-6 sm:p-8 rounded-[20px] bg-white/90 card flex flex-col transition-all duration-300 hover:scale-[0.98] hover:shadow-[0_0_30px_1px_rgba(63,43,150,0.3)] border-2 border-transparent hover:border-[#3f2b96]/30"
              >
                {/* Header Section */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 flex-shrink-0 relative rounded-full overflow-hidden border-2 border-gray-200 bg-white">
                    <Image
                      src={education.logo}
                      alt={education.institution}
                      fill
                      className="object-cover p-1"
                      sizes="(max-width: 80px) 100vw, 80px"
                      priority
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#3f2b96] to-[#a8c0ff] bg-clip-text text-transparent">
                      {education.institution}
                    </h2>
                    <h3 className="text-lg text-gray-700">
                      {education.degree}
                    </h3>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-base text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <FaClock className="text-[#3f2b96] flex-shrink-0" size={16} />
                    <span>{education.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#3f2b96] flex-shrink-0" size={16} />
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTrophy className="text-[#3f2b96] flex-shrink-0" size={16} />
                    <span className="font-medium">{education.gpa}</span>
                  </div>
                </div>

                {/* Courses Section */}
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <FaTrophy className="text-[#3f2b96] flex-shrink-0" size={16} />
                    <span className="text-base font-semibold text-gray-700">Key Areas of Study</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {education.courses.map((course, idx) => (
                      <li key={idx} className="text-gray-600 text-base leading-relaxed flex items-start gap-2">
                        <span className="text-[#3f2b96]">•</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </ParallaxLayout>
  );
};

export default Education;