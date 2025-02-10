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
      duration: "2024 - 2025",
      location: "Newark, NJ, USA",
      gpa: "3.313/4 CGPA",
      logo: "/NJIT.png",
      courses: [
        "Machine Learning & Deep Learning",
        "Artificial Intelligence & Prompt Engineering",
        "Web Development & Full Stack",
        "Data Visualization & Analytics",
        "Big Data Processing & Python",
        "Data Science & Statistical Analysis"
      ]
    },
    {
      institution: "SCSVMV University",
      degree: "B.E., Computer Science and Engineering",
      duration: "2019 - 2023",
      location: "Kanchipuram, TN, India",
      gpa: "9.43/10 CGPA",
      logo: "/scsvmv.png",
      courses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Computer Networks",
        "Operating Systems",
        "Software Engineering",
        "Web Technologies",
        "Python Programming",
        "Java Development"
      ]
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "Higher Secondary Education",
      duration: "2017 - 2019",
      location: "Tirupati, AP, India",
      gpa: "9.11/10 CGPA",
      logo: "/sc.png",
      courses: [
        "Mathematics & Statistics",
        "Computer Science Fundamentals",
        "Physics & Electronics",
        "Basic Programming",
        "Problem Solving",
        "Analytical Skills"
      ]
    },
    {
      institution: "Keshava Reddy Public School",
      degree: "Secondary Education",
      duration: "2016 - 2017",
      location: "Tirupati, AP, India",
      gpa: "9.2/10 GPA",
      logo: "/ks.png",
      courses: [
        "Mathematics",
        "Basic Computer Science",
        "Science & Technology",
        "Logical Reasoning",
        "Critical Thinking"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
            {educationData.map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full max-w-xl p-4 sm:p-6 rounded-[20px] bg-white/90 card flex flex-col transition-all duration-300 hover:scale-[0.98] hover:shadow-[0_0_30px_1px_rgba(63,43,150,0.3)] border-2 border-transparent hover:border-[#3f2b96]/30"
              >
                {/* Header Section */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 flex-shrink-0 relative rounded-full overflow-hidden border-2 border-gray-200 bg-white">
                    <Image
                      src={education.logo}
                      alt={education.institution}
                      fill
                      className="object-cover p-0.5"
                      sizes="(max-width: 64px) 100vw, 64px"
                      priority
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-lg font-bold mb-1.5 bg-gradient-to-r from-[#3f2b96] to-[#a8c0ff] bg-clip-text text-transparent">
                      {education.institution}
                    </h2>
                    <h3 className="text-base text-gray-700">
                      {education.degree}
                    </h3>
                  </div>
                </div>

                {/* Details Section */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <FaClock className="text-[#3f2b96] flex-shrink-0" size={14} />
                    <span>{education.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#3f2b96] flex-shrink-0" size={14} />
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTrophy className="text-[#3f2b96] flex-shrink-0" size={14} />
                    <span className="font-medium">{education.gpa}</span>
                  </div>
                </div>

                {/* Courses Section */}
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <FaTrophy className="text-[#3f2b96] flex-shrink-0" size={14} />
                    <span className="text-sm font-semibold text-gray-700">Key Areas of Study</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {education.courses.map((course, idx) => (
                      <li key={idx} className="text-gray-600 text-sm leading-relaxed flex items-start gap-2">
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