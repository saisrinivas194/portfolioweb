'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ParallaxLayout from './ParallaxLayout';
import { FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Hari Kumar Somakantan",
      role: "Director of Business Development",
      company: "Webdaddy",
      image: "/hari.jpg",
      content: "I had the pleasure of working with Sai Srinivas during his time at WebDaddy, where he played a crucial role in Research and Development for AI, Machine Learning, and Deep Learning solutions. Sai's expertise in data science was evident in the way he developed and optimized predictive models, ensuring efficient and scalable implementations. Beyond his technical skills, Sai also contributed significantly to lead generation and content creation, leveraging data-driven strategies to enhance engagement and outreach. His ability to blend analytical thinking with creative content strategies made a remarkable impact on our projects. Sai is not only an innovative problem-solver but also a collaborative team player who is always eager to explore new technologies and trends. I highly recommend him for any organization looking for a skilled and versatile data science professional!",
      date: "April 10, 2025",
      relationship: "Direct Manager @Webdaddy"
    },
    {
      name: "Yash Malviya",
      role: "Product Enablement & Data Analyst at Findem",
      date: "April 23, 2024",
      relationship: "Direct Manager",
      content: "During Sai's internship, he demonstrated excellent technical skills and a sincere interest in our work. His curiosity and dedication to understanding our industry and business goals made him a valuable team member. Sai's eagerness to learn and contribute across various data projects was highly appreciated. He comes highly recommended."
    },
    {
      name: "Rajita Rao",
      role: "Product Ops | Enablement | Postgraduate Certificate in Product Management - Duke University",
      date: "April 22, 2024",
      relationship: "Direct Manager",
      content: "I had the pleasure of working alongside Sai during his internship with our team, and I highly recommend him. In addition to the technical skills, Sai showed a genuine passion for the work we do. His curiosity and drive to understand the industry and our business objectives made him a valuable asset to our team."
    },
    {
      name: "Rajat Gupta",
      role: "Product & Data",
      date: "April 10, 2024",
      relationship: "Direct Manager",
      content: "Sai has always shown keen interest in learning new aspects of Research as an intern. His contribution across different data projects was valuable."
    }
  ];

  return (
    <ParallaxLayout>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" id="testimonials">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-12 gradient-heading text-center">
            Recommendations
          </h1>
          
          {/* LinkedIn Link */}
          <div className="flex flex-col items-center mb-8">
            <a 
              href="https://www.linkedin.com/in/sai-srinivas-pedhapolla-345959256/details/recommendations/?detailScreenTabIndex=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-[#3f2b96] transition-colors duration-300 flex items-center gap-2"
            >
              View on LinkedIn
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-[1600px] mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full h-[400px] p-6 rounded-[20px] bg-white/90 card flex flex-col transition-all duration-300 hover:scale-[0.98] hover:shadow-[0_0_30px_1px_rgba(63,43,150,0.3)] border-2 border-transparent hover:border-[#3f2b96]/30"
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex-shrink-0">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {testimonial.role} {testimonial.company && `at ${testimonial.company}`}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-[#3f2b96] mb-4">
                      <span>{testimonial.date}</span>
                      <span>•</span>
                      <span>{testimonial.relationship}</span>
                    </div>
                  </div>

                  {/* Content with Scroll */}
                  <div className="flex-grow overflow-y-auto custom-scrollbar pr-2">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add custom scrollbar styles */}
          <style jsx global>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: transparent;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background-color: rgba(63, 43, 150, 0.2);
              border-radius: 20px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background-color: rgba(63, 43, 150, 0.4);
            }
            .custom-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: rgba(63, 43, 150, 0.2) transparent;
            }
          `}</style>
        </motion.div>
      </div>
    </ParallaxLayout>
  );
};

export default Testimonials;