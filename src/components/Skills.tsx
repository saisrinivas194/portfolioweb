'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ParallaxLayout from './ParallaxLayout';
import { 
  FaPython, 
  FaDatabase, 
  FaChartBar, 
  FaBrain, 
  FaCode, 
  FaCloud,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaAws,
  FaEye,
  FaFileExcel,
  FaRobot,
  FaProjectDiagram,
  FaSearch,
  FaCogs,
  FaChartLine,
  FaFilter,
  FaBroom,
  FaLink,
  FaGit,
  FaSearchPlus,
  FaLightbulb,
  FaUsers,
  FaChartPie,
  FaLayerGroup,
  FaNetworkWired,
  FaServer,
  FaShieldAlt
} from 'react-icons/fa';
import { 
  SiTensorflow,
  SiPytorch,
  SiScala,
  SiMysql,
  SiJupyter,
  SiGooglecolab,
  SiTableau,
  SiApachespark,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiKeras,
  SiOpenai,
  SiDocker,
  SiKubernetes,
  SiApachehadoop,
  SiJavascript,
  SiTypescript,
  SiR,
  SiGraphql,
  SiPostman
} from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    {
      category: "Programming & Data Science",
      icon: <FaPython className="text-[#0d9488]" size={24} />,
      skills: [
        { icon: <FaPython className="text-[#306998]" size={32} />, name: "Python" },
        { icon: <SiPandas className="text-[#150458]" size={32} />, name: "Pandas" },
        { icon: <SiNumpy className="text-[#013243]" size={32} />, name: "NumPy" },
        { icon: <SiScikitlearn className="text-[#F7931E]" size={32} />, name: "Scikit-learn" },
        { icon: <SiTensorflow className="text-[#FF6F00]" size={32} />, name: "TensorFlow" },
        { icon: <SiPytorch className="text-[#EE4C2C]" size={32} />, name: "PyTorch" },
        { icon: <SiScala className="text-[#DC322F]" size={32} />, name: "Scala" },
        { icon: <SiMysql className="text-[#4479A1]" size={32} />, name: "SQL" },
        { icon: <SiJupyter className="text-[#F37626]" size={32} />, name: "Jupyter" },
        { icon: <SiGooglecolab className="text-[#F9AB00]" size={32} />, name: "Google Colab" }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: <FaBrain className="text-[#0d9488]" size={24} />,
      skills: [
        { icon: <FaLayerGroup className="text-[#FF6F00]" size={32} />, name: "Deep Learning" },
        { icon: <SiOpenai className="text-[#412991]" size={32} />, name: "NLP & ChatGPT" },
        { icon: <SiKeras className="text-[#D00000]" size={32} />, name: "Keras" },
        { icon: <FaEye className="text-[#EE4C2C]" size={32} />, name: "Computer Vision" },
        { icon: <FaChartLine className="text-[#0d9488]" size={32} />, name: "Time Series" },
        { icon: <FaShieldAlt className="text-[#6B46C1]" size={32} />, name: "Semi-Supervised" },
        { icon: <FaLightbulb className="text-[#10A37F]" size={32} />, name: "Explainable AI" },
        { icon: <FaUsers className="text-[#8B5CF6]" size={32} />, name: "Recommender" },
        { icon: <FaRobot className="text-[#FF6B35]" size={32} />, name: "Prompt Engineering" }
      ]
    },
    {
      category: "Data Analytics & Visualization",
      icon: <FaChartBar className="text-[#0d9488]" size={24} />,
      skills: [
        { icon: <SiTableau className="text-[#E97627]" size={32} />, name: "Tableau" },
        { icon: <FaFileExcel className="text-[#217346]" size={32} />, name: "Excel" },
        { icon: <FaChartPie className="text-[#3B82F6]" size={32} />, name: "Statistical Analysis" },
        { icon: <FaProjectDiagram className="text-[#6366F1]" size={32} />, name: "Causal Inference" },
        { icon: <FaDatabase className="text-[#8B5CF6]" size={32} />, name: "Dataset Curation" },
        { icon: <FaShieldAlt className="text-[#10B981]" size={32} />, name: "Quality Control" },
        { icon: <FaFilter className="text-[#F59E0B]" size={32} />, name: "Data Preprocessing" },
        { icon: <FaBroom className="text-[#EF4444]" size={32} />, name: "Data Cleaning" }
      ]
    },
    {
      category: "Web Development",
      icon: <FaCode className="text-[#0d9488]" size={24} />,
      skills: [
        { icon: <FaReact className="text-[#61DAFB]" size={32} />, name: "ReactJS" },
        { icon: <FaHtml5 className="text-[#E34F26]" size={32} />, name: "HTML5" },
        { icon: <FaCss3Alt className="text-[#1572B6]" size={32} />, name: "CSS3" },
        { icon: <FaLink className="text-[#6366F1]" size={32} />, name: "API Integration" },
        { icon: <FaGitAlt className="text-[#F05032]" size={32} />, name: "Git" },
        { icon: <FaGit className="text-[#8B5CF6]" size={32} />, name: "Version Control" },
        { icon: <SiOpenai className="text-[#412991]" size={32} />, name: "ChatGPT API" },
        { icon: <FaSearchPlus className="text-[#10B981]" size={32} />, name: "SEO Optimization" }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: <FaCloud className="text-[#0d9488]" size={24} />,
      skills: [
        { icon: <SiApachehadoop className="text-[#66CCFF]" size={32} />, name: "Hadoop" },
        { icon: <SiApachespark className="text-[#E25A1C]" size={32} />, name: "Apache Spark" },
        { icon: <FaAws className="text-[#FF9900]" size={32} />, name: "AWS" },
        { icon: <FaServer className="text-[#3B82F6]" size={32} />, name: "Cloud Computing" },
        { icon: <SiDocker className="text-[#2496ED]" size={32} />, name: "Docker" },
        { icon: <SiKubernetes className="text-[#326CE5]" size={32} />, name: "Kubernetes" }
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
          {/* Large background title */}
          <h1 className="skills-bg-title">
            SKILLS
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-20">
            {skillsData.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#0d9488]/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-lg font-bold text-gray-800 bg-gradient-to-r from-[#06b6d4] to-[#0f766e] bg-clip-text text-transparent">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md border border-gray-100 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer"
                      title={skill.name}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0d9488]/5 to-[#14b8a6]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                        {skill.icon}
                      </div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                        {skill.name}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .skills-bg-title {
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
          .skills-bg-title {
            font-size: 2rem;
            top: 5px;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .skills-bg-title {
            font-size: 3rem;
            top: 8px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .skills-bg-title {
            font-size: 4rem;
            top: 12px;
          }
        }
      `}</style>
    </ParallaxLayout>
  );
};

export default Skills; 