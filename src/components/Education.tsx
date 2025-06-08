'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ParallaxLayout from './ParallaxLayout';
import { FaMapMarkerAlt, FaClock, FaTrophy, FaCheck, FaGraduationCap } from 'react-icons/fa';
import Image from 'next/image';

const Education = () => {
  const educationData = [
    {
      institution: "New Jersey Institute of Technology (NJIT)",
      degree: "Masters of Science (Data Science)",
      duration: "January 2024 - May 2025",
      location: "Newark, NJ, USA",
      gpa: "3.350/4 GPA",
      logo: "/NJIT.png",
      status: "completed",
      statusText: "Completed",
      graduationYear: "2025",
      description: "Studies in Machine Learning, Deep Learning, Big Data Analytics, Data Visualization, Statistical Analysis, and AI & Prompt Engineering."
    },
    {
      institution: "SCSVMV University",
      degree: "Bachelor of Engineering (Computer Science)",
      duration: "June 2019 - June 2023",
      location: "Kanchipuram, TN, India",
      gpa: "9.43/10 GPA",
      logo: "/scsvmv.png",
      status: "completed",
      statusText: "Completed",
      graduationYear: "2023",
      description: "Studies in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems, and Software Engineering."
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
          {/* Large background title */}
          <h1 className="education-bg-title">
            EDUCATION
          </h1>
          
          <div className="max-w-4xl mx-auto mt-20 px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="education-card"
            >
              <div className="card-body">
                {educationData.map((education, index) => (
                  <div key={index} className="education-card-row">
                    <div className="education-card-row-pic">
                      <Image
                        src={education.logo}
                        alt={education.institution}
                        width={80}
                        height={80}
                        className="img-fluid rounded"
                        priority
                      />
                    </div>
                    <div className="education-card-row-text">
                      <h5 className="mb-0 mt-0">{education.duration}</h5>
                      <p className="description">
                        <b>{education.institution.toUpperCase()}</b><br/>
                        <b>{education.degree}</b><br/>
                        <b>Location:</b> {education.location}<br/>
                        <b>GPA:</b> {education.gpa}<br/>
                        {education.description}
                      </p>
                      {index < educationData.length - 1 && <hr />}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .education-bg-title {
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

        .education-card {
          position: relative;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          box-shadow: 0 15px 35px rgb(50 50 93 / 10%), 0 5px 15px rgb(0 0 0 / 7%);
          background: white;
          border-radius: 15px;
        }

        .card-body {
          flex: 1 1 auto;
          padding: 1.5rem;
        }

        .education-card-row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-bottom: 20px;
        }

        .education-card-row:last-child {
          margin-bottom: 0;
        }

        .education-card-row-pic {
          flex: 0 0 16.666667%;
          max-width: 16.666667%;
          flex: 0 0 25%;
          max-width: 25%;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 10px;
        }

        .education-card-row-pic img {
          max-width: 100%;
          height: auto;
          width: 80px;
          object-fit: contain;
        }

        .img-fluid {
          max-width: 100%;
          height: auto;
        }

        .rounded {
          border-radius: 8px;
        }

        .education-card-row-text {
          padding-left: 0.5rem !important;
          flex: 0 0 66.666667%;
          max-width: 66.666667%;
          flex: 0 0 75%;
          max-width: 75%;
        }

        .education-card-row-text h5 {
          color: #06b6d4;
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          margin-top: 0;
        }

        .education-card-row-text .description {
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .education-card-row-text .description b {
          color: #2d3748;
        }

        .education-card-row-text hr {
          border: 0;
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(6, 182, 212, 0.3),
            transparent
          );
          margin: 1.5rem 0;
        }

        .mb-0 {
          margin-bottom: 0;
        }

        .mt-0 {
          margin-top: 0;
        }

        @media (max-width: 768px) {
          .education-bg-title {
            font-size: 2.5rem;
            top: 8px;
          }

          .education-card-row {
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-bottom: 30px;
          }

          .education-card-row-pic {
            flex: none;
            max-width: none;
            margin-bottom: 15px;
          }

          .education-card-row-text {
            flex: none;
            max-width: none;
            padding-left: 0 !important;
          }

          .card-body {
            padding: 1rem;
          }
        }

        @media (max-width: 480px) {
          .education-bg-title {
            font-size: 2rem;
            top: 5px;
          }

          .education-card {
            padding-right: 8px;
            padding-left: 8px;
          }

          .card-body {
            padding: 0.75rem;
          }

          .education-card-row-text h5 {
            font-size: 1rem;
          }

          .education-card-row-text .description {
            font-size: 0.9rem;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .education-bg-title {
            font-size: 3rem;
            top: 8px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .education-bg-title {
            font-size: 4rem;
            top: 12px;
          }
        }

        .graduation-year {
          color: #0d9488;
          font-size: 1.2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 15px;
        }
      `}</style>
    </ParallaxLayout>
  );
};

export default Education;