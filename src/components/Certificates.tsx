'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ParallaxLayout from './ParallaxLayout';
import { FaCalendar, FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const Certificates = () => {
  const certificatesData = [
    {
      title: "Data Science",
      issuer: "ExcelR",
      date: "19th April 2024",
      credentialLink: "https://www.linkedin.com/in/sai-srinivas-pedhapolla-345959256/details/certifications/",
      description: "Comprehensive Data Science certification with distinction covering machine learning algorithms, statistical analysis, data visualization, and end-to-end ML pipeline development using Python, TensorFlow, and industry tools.",
      image: "/certificates.jpeg"
    }
  ];

  return (
    <ParallaxLayout>
      <div className="min-h-screen py-8 md:py-16 px-4" id="certificates">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          {/* Large background title */}
          <h1 className="certificates-bg-title">
            CERTIFICATIONS
          </h1>
          
          <div className="flex justify-center gap-6 flex-wrap px-4 mt-32">
            {certificatesData.map((certificate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="w-[320px] relative h-[380px] overflow-hidden group mx-auto bg-gradient-to-br from-white via-gray-50 to-blue-50 shadow-xl border border-gray-200 rounded-3xl flex flex-col cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-102"
              >
                {/* Certificate Image Background */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
                  {certificate.image ? (
                    <Image
                      src={certificate.image}
                      alt={`${certificate.title} Certificate`}
                      width={700}
                      height={700}
                      className="max-w-full max-h-full object-contain transition-all duration-500 rounded-2xl shadow-lg group-hover:scale-110 group-hover:shadow-2xl"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-[#0d9488] to-[#7dd3fc] transition-all duration-500 rounded-2xl"></div>
                  )}
                </div>

                {/* Hover Overlay - Full Details */}
                <article className="p-4 w-full h-full overflow-y-auto z-10 absolute top-0 left-0 flex flex-col justify-start rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                  <div className="space-y-4 pt-2">
                    <div className="border-l-4 border-blue-400 pl-3">
                      <h1 className="text-lg font-bold text-white mb-1">{certificate.title}</h1>
                      <p className="text-blue-300 font-medium text-sm">{certificate.issuer}</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 space-y-2">
                      <div className="flex items-center text-white">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                          <FaCalendar size={12} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-gray-300 uppercase tracking-wide">Date</p>
                          <p className="font-semibold text-xs truncate">{certificate.date}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-white">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                          <FaCertificate size={12} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs text-gray-300 uppercase tracking-wide">Status</p>
                          <p className="font-semibold text-xs">Verified</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-xs leading-relaxed bg-black/20 p-3 rounded-lg max-h-20 overflow-y-auto">
                      {certificate.description}
                    </p>
                    
                    <a 
                      href={certificate.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#06b6d4] to-[#0f766e] text-white rounded-lg font-semibold hover:from-[#0f766e] hover:to-[#06b6d4] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-xs w-full"
                    >
                      <FaExternalLinkAlt className="mr-2" size={12} />
                      View Credential
                    </a>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .certificates-bg-title {
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
          .certificates-bg-title {
            font-size: 2rem;
            top: 5px;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .certificates-bg-title {
            font-size: 3rem;
            top: 8px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .certificates-bg-title {
            font-size: 4rem;
            top: 12px;
          }
        }
      `}</style>
    </ParallaxLayout>
  );
};

export default Certificates;