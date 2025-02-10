'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ParallaxLayout from './ParallaxLayout';
import { FaCalendar, FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';

const Certificates = () => {
  const certificatesData = [
    {
      title: "Data Science Course",
      issuer: "ExcelR",
      date: "07/2024 - 09/2024",
      credentialLink: "https://www.linkedin.com/in/sai-srinivas-pedhapolla-345959256/details/certifications/",
      description: "Comprehensive Data Science course covering statistical analysis, machine learning, data visualization, and practical applications using Python and related tools."
    }
  ];

  return (
    <ParallaxLayout>
      <div className="min-h-screen py-16 px-4" id="certificates">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="max-w-[1600px] mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-heading text-center">
            Certifications
          </h1>
          
          <div className="flex justify-center gap-6 flex-wrap">
            {certificatesData.map((certificate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-[380px] min-h-[340px] p-4 rounded-[20px] bg-white/90 card flex flex-col transition-all duration-300 hover:scale-[0.98] hover:shadow-[0_0_30px_1px_rgba(63,43,150,0.3)] border-2 border-transparent hover:border-[#3f2b96]/30"
              >
                {/* Header Section */}
                <div className="mb-4">
                  <h2 className="text-lg font-bold gradient-heading mb-1.5">{certificate.title}</h2>
                  <h3 className="text-base text-gray-700">{certificate.issuer}</h3>
                </div>

                {/* Details Section */}
                <div className="border-t border-b border-gray-200/60 py-3 mb-4">
                  <div className="grid grid-cols-1 gap-2">
                    {/* Date */}
                    <div className="flex items-center">
                      <div className="w-6 flex justify-center">
                        <FaCalendar className="text-gray-500 flex-shrink-0" size={13} />
                      </div>
                      <p className="text-gray-600 text-sm flex-1">{certificate.date}</p>
                    </div>
                    {/* Credential Link */}
                    <div className="flex items-center">
                      <div className="w-6 flex justify-center">
                        <FaCertificate className="text-[#3f2b96] flex-shrink-0" size={13} />
                      </div>
                      <a 
                        href={certificate.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#3f2b96] text-sm font-medium flex-1 hover:underline flex items-center gap-1"
                      >
                        View Credential
                        <FaExternalLinkAlt size={10} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="flex-grow">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {certificate.description}
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

export default Certificates;