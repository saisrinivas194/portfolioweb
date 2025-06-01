'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ParallaxLayout from './ParallaxLayout';
import { FaPython, FaDatabase, FaChartBar, FaBrain, FaCode, FaCloud } from 'react-icons/fa';

const Skills = () => {
  const skillsData = [
    {
      category: "Programming & Data Science",
      icon: <FaPython className="text-[#3f2b96]" size={20} />,
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "scikit-learn",
        "TensorFlow",
        "PyTorch",
        "Scala",
        "SQL",
        "Jupyter",
        "Google Colab"
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: <FaBrain className="text-[#3f2b96]" size={20} />,
      skills: [
        "Deep Learning",
        "NLP (Intent Classification, NLU, NLG)",
        "Computer Vision",
        "Time Series Forecasting",
        "Semi-Supervised Learning",
        "Explainable AI",
        "Recommender Systems",
        "Prompt Engineering",
        "Data Labeling Tools"
      ]
    },
    {
      category: "Data Analytics & Visualization",
      icon: <FaChartBar className="text-[#3f2b96]" size={20} />,
      skills: [
        "Tableau",
        "Excel",
        "Statistical Analysis",
        "Causal Inference",
        "Dataset Curation",
        "Quality Control",
        "Data Preprocessing",
        "Data Cleaning"
      ]
    },
    {
      category: "Web Development",
      icon: <FaCode className="text-[#3f2b96]" size={20} />,
      skills: [
        "ReactJS",
        "HTML",
        "CSS",
        "API Integration",
        "Git",
        "Version Control",
        "ChatGPT",
        "SEO Optimization"
      ]
    },
    {
      category: "Big Data & Cloud",
      icon: <FaCloud className="text-[#3f2b96]" size={20} />,
      skills: [
        "Hadoop",
        "Spark",
        "AWS (Basic)",
        "Cloud Computing",
        "Development Tools",
        "Project Management"
      ]
    }
  ];

  return (
    <ParallaxLayout>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" id="skills">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-12 gradient-heading text-center">
            Skills & Expertise
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillsData.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full p-6 rounded-[20px] bg-white/90 card transition-all duration-300 hover:scale-[0.98] hover:shadow-[0_0_30px_1px_rgba(63,43,150,0.3)] border-2 border-transparent hover:border-[#3f2b96]/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-lg font-bold text-gray-800 bg-gradient-to-r from-[#3f2b96] to-[#a8c0ff] bg-clip-text text-transparent">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-[#3f2b96]/10 to-[#a8c0ff]/10 rounded-full text-gray-700 hover:scale-105 transition-transform duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </ParallaxLayout>
  );
};

export default Skills; 