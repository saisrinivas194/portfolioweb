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
      title: "Data Science Certification",
      issuer: "ExcelR",
      date: "19th April 2024",
      credentialLink: "https://www.linkedin.com/in/sai-srinivas-pedhapolla-345959256/details/certifications/",
      description: "Comprehensive Data Science certification with distinction covering statistical analysis, machine learning, data visualization, and practical applications using Python and related tools.",
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
          
          <div className="flex justify-center gap-8 flex-wrap px-4 mt-20">
            {certificatesData.map((certificate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="w-[450px] relative h-[520px] overflow-hidden group mx-auto bg-white shadow-2xl border border-gray-100 rounded-2xl flex flex-col cursor-pointer transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-2"
              >
                {/* Certificate Image Background */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                  {certificate.image ? (
                    <Image
                      src={certificate.image}
                      alt={`${certificate.title} Certificate`}
                      width={700}
                      height={700}
                      className="max-w-full max-h-full object-contain transition-all duration-500 rounded-xl shadow-lg group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-[#0d9488] to-[#7dd3fc] transition-all duration-500 rounded-xl"></div>
                  )}
                </div>

                {/* Hover Overlay - Full Details */}
                <article className="p-8 w-full h-full overflow-hidden z-10 absolute top-0 flex flex-col justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-0 group-hover:opacity-95 transition-all duration-500 backdrop-blur-sm">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-all duration-500 space-y-6">
                    <div className="border-l-4 border-blue-400 pl-4">
                      <h1 className="text-2xl font-bold text-white mb-1">{certificate.title}</h1>
                      <p className="text-blue-300 font-medium text-lg">{certificate.issuer}</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 space-y-3">
                      <div className="flex items-center text-white">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                          <FaCalendar size={14} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-300 uppercase tracking-wide">Completion Date</p>
                          <p className="font-semibold">{certificate.date}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-white">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                          <FaCertificate size={14} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-300 uppercase tracking-wide">Certification Status</p>
                          <p className="font-semibold">Verified & Accredited</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed bg-black/20 p-4 rounded-lg">
                      {certificate.description}
                    </p>
                    
                    <a 
                      href={certificate.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#06b6d4] to-[#0f766e] text-white rounded-xl font-semibold hover:from-[#0f766e] hover:to-[#06b6d4] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <FaExternalLinkAlt className="mr-2" size={16} />
                      View Credential
                    </a>
                  </div>
                </article>

                {/* Default Bottom Info */}
                <article className="p-6 w-full h-[30%] flex flex-col justify-end overflow-hidden absolute bottom-0 rounded-b-2xl bg-gradient-to-t from-slate-900 via-slate-800/90 to-transparent opacity-100 group-hover:opacity-0 group-hover:-bottom-4 transition-all duration-500">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-blue-300 text-xs font-medium uppercase tracking-wider">Certified</span>
                    </div>
                    <h1 className="text-xl font-bold text-white leading-tight">{certificate.title}</h1>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <span className="text-sm font-medium">{certificate.issuer}</span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span className="text-sm">{certificate.date}</span>
                    </div>
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