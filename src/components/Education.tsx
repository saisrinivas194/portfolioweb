'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ParallaxLayout from './ParallaxLayout';
import { FaMapMarkerAlt, FaClock, FaTrophy } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import '../styles/HorizontalScroll.css';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const educationData = [
    {
      institution: "New Jersey Institute of Technology (NJIT)",
      degree: "Masters of Science (Data Science)",
      duration: "2024 - 2025",
      location: "Newark, NJ, USA",
      gpa: "3.313/4 CGPA",
      logo: "/njit-logo.gif",
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

  useEffect(() => {
    const container = containerRef.current;
    const timeline = timelineRef.current;
    
    if (!container || !timeline) return;

    const timelineItems = timeline.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      if (item instanceof HTMLElement) {
        item.style.visibility = 'visible';
        item.style.opacity = '1';
      }
    });

    const timelineWidth = timeline.scrollWidth;
    const horizontalScrollLength = timelineWidth - window.innerWidth;

    const scrollTween = gsap.to(timeline, {
      x: -horizontalScrollLength,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${horizontalScrollLength}`,
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        invalidateOnRefresh: true
      }
    });

    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <ParallaxLayout>
      <div className="min-h-[90vh]" ref={containerRef} id="education">
        <motion.div
          className="timeline-header"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-10 gradient-heading text-center pt-16">
            Education Timeline
          </h1>
          
          <div className="horizontal-scroll-section">
            <div className="timeline-container">
              <div className="timeline-wrap" ref={timelineRef}>
                {educationData.map((education, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-[380px] min-h-[340px] p-4 rounded-[20px] bg-white/90 card flex flex-col transition-all duration-300 hover:scale-[0.98] hover:shadow-[0_0_30px_1px_rgba(63,43,150,0.3)] border-2 border-transparent hover:border-[#3f2b96]/30">
                      {/* Header Section */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-14 h-14 flex-shrink-0">
                          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-200 bg-white">
                            <Image
                              src={education.logo}
                              alt={education.institution}
                              fill
                              className="object-contain p-1"
                              priority
                            />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h2 className="text-lg font-bold gradient-heading mb-1.5">{education.institution}</h2>
                          <h3 className="text-base text-gray-700">{education.degree}</h3>
                        </div>
                      </div>

                      {/* Details Section */}
                      <div className="border-t border-b border-gray-200/60 py-3 mb-4">
                        <div className="grid grid-cols-1 gap-2">
                          {/* Location */}
                          <div className="flex items-center">
                            <div className="w-6 flex justify-center">
                              <FaMapMarkerAlt className="text-gray-500 flex-shrink-0" size={13} />
                            </div>
                            <p className="text-gray-600 text-sm flex-1">{education.location}</p>
                          </div>
                          {/* Duration */}
                          <div className="flex items-center">
                            <div className="w-6 flex justify-center">
                              <FaClock className="text-gray-500 flex-shrink-0" size={13} />
                            </div>
                            <p className="text-gray-600 text-sm flex-1">{education.duration}</p>
                          </div>
                          {/* GPA */}
                          <div className="flex items-center">
                            <div className="w-6 flex justify-center">
                              <FaTrophy className="text-[#3f2b96] flex-shrink-0" size={13} />
                            </div>
                            <p className="text-[#3f2b96] text-sm font-medium flex-1">{education.gpa}</p>
                          </div>
                        </div>
                      </div>

                      {/* Courses Section */}
                      <div className="mt-auto">
                        <h4 className="text-xs font-semibold text-gray-700 mb-3 flex items-center">
                          <div className="w-6 flex justify-center">
                            <FaTrophy className="flex-shrink-0" size={13} />
                          </div>
                          <span>Key Areas of Study</span>
                        </h4>
                        <div className="pl-6">
                          <ul className="list-disc list-inside space-y-1.5">
                            {education.courses.map((course, idx) => (
                              <li key={idx} className="text-xs text-gray-600 leading-relaxed">{course}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </ParallaxLayout>
  );
};

export default Education;