'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ParallaxLayout from './ParallaxLayout';
import { FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
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
      <div className="min-h-screen pt-4 pb-16 px-4">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="max-w-[1600px] mx-auto"
        >
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold gradient-heading text-center mb-4">
              Testimonials
            </h1>
            <a 
              href="https://www.linkedin.com/in/sai-srinivas-pedhapolla-345959256/details/recommendations/?detailScreenTabIndex=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#3f2b96] hover:underline text-sm font-medium"
            >
              <FaLinkedin size={16} />
              Verify on LinkedIn
              <FaExternalLinkAlt size={10} />
            </a>
          </div>
          
          <div className="flex justify-center gap-6 flex-wrap">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-[380px] min-h-[340px] p-4 rounded-[20px] bg-white/90 card flex flex-col transition-all duration-300 hover:scale-[0.98] hover:shadow-[0_0_30px_1px_rgba(63,43,150,0.3)] border-2 border-transparent hover:border-[#3f2b96]/30"
              >
                <div className="relative h-full flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1 line-clamp-2">
                    {testimonial.role}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[#3f2b96] mb-4">
                    <span>{testimonial.date}</span>
                    <span>•</span>
                    <span>{testimonial.relationship}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </ParallaxLayout>
  );
};

export default Testimonials;