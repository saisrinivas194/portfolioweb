'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ParallaxLayout from './ParallaxLayout';
import { 
  FaPython, FaDatabase, FaChartBar, FaBrain, FaCode, FaCloud, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaAws, FaEye, FaRobot, FaProjectDiagram, FaSearch, FaCogs, FaChartLine, FaFilter, FaBroom, FaLink, FaGit, FaSearchPlus, FaLightbulb, FaUsers, FaChartPie, FaLayerGroup, FaNetworkWired, FaServer, FaShieldAlt, FaTrophy, FaBookOpen, FaFileAlt, FaVial, FaSpider, FaRocket
} from 'react-icons/fa';
import { 
  SiTensorflow, SiPytorch, SiScala, SiMysql, SiJupyter, SiGooglecolab, SiTableau, SiApachespark, SiPandas, SiNumpy, SiScikitlearn, SiKeras, SiOpenai, SiDocker, SiKubernetes, SiApachehadoop, SiJavascript, SiTypescript, SiR, SiGraphql, SiPostman, SiPlotly
} from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    {
      category: "Programming & Frameworks",
      skills: [
        { icon: <FaPython className="text-[#306998]" size={32} />, name: "Python (FastAPI, Django, Pandas, NumPy,\nscikit-learn, TensorFlow, PyTorch)" },
        { icon: <SiR className="text-[#276DC3]" size={32} />, name: "R" },
        { icon: <SiMysql className="text-[#4479A1]" size={32} />, name: "SQL (MySQL, PostgreSQL, T-SQL)" },
        { icon: <FaReact className="text-[#61DAFB]" size={32} />, name: "JavaScript/TypeScript (React.js, Next.js)" }
      ]
    },
    {
      category: "Data Analysis & Machine Learning",
      skills: [
        { icon: <SiPandas className="text-[#150458]" size={32} />, name: "Pandas" },
        { icon: <SiNumpy className="text-[#013243]" size={32} />, name: "NumPy" },
        { icon: <SiScikitlearn className="text-[#F7931E]" size={32} />, name: "scikit-learn" },
        { icon: <SiTensorflow className="text-[#FF6F00]" size={32} />, name: "TensorFlow" },
        { icon: <SiPytorch className="text-[#EE4C2C]" size={32} />, name: "PyTorch" },
        { icon: <FaSearch className="text-[#0d9488]" size={32} />, name: "Exploratory Data Analysis (EDA)" },
        { icon: <FaBroom className="text-[#EF4444]" size={32} />, name: "Data Cleaning" },
        { icon: <FaFilter className="text-[#F59E0B]" size={32} />, name: "Data Wrangling" },
        { icon: <FaChartPie className="text-[#3B82F6]" size={32} />, name: "Statistical Modeling" },
        { icon: <FaChartLine className="text-[#0d9488]" size={32} />, name: "Predictive Analytics" },
        { icon: <FaChartBar className="text-[#0d9488]" size={32} />, name: "Sentiment Analysis" },
        { icon: <FaVial className="text-[#6366F1]" size={32} />, name: "A/B Testing" },
        { icon: <FaTrophy className="text-[#FFD700]" size={32} />, name: "KPI Development" }
      ]
    },
    {
      category: "Business Intelligence & Visualization",
      skills: [
        { icon: <SiTableau className="text-[#E97627]" size={32} />, name: "Tableau" },
        { icon: <FaChartBar className="text-[#F2C811]" size={32} />, name: "Power BI" },
        { icon: <SiPlotly className="text-[#3F4F75]" size={32} />, name: "Plotly Dash" },
        { icon: <FaEye className="text-[#0d9488]" size={32} />, name: "Matplotlib" },
        { icon: <FaChartPie className="text-[#3B82F6]" size={32} />, name: "Seaborn" },
        { icon: <FaBookOpen className="text-[#6366F1]" size={32} />, name: "Data Storytelling" },
        { icon: <FaChartBar className="text-[#0d9488]" size={32} />, name: "Dashboard Development" },
        { icon: <FaFileAlt className="text-[#6366F1]" size={32} />, name: "Reporting" }
      ]
    },
    {
      category: "Cloud & Emerging Tech",
      skills: [
        { icon: <FaAws className="text-[#FF9900]" size={32} />, name: "AWS (EC2, S3)" },
        { icon: <FaCloud className="text-[#0d9488]" size={32} />, name: "Google Cloud Platform" },
        { icon: <FaLink className="text-[#6366F1]" size={32} />, name: "API Integration" },
        { icon: <SiApachehadoop className="text-[#66CCFF]" size={32} />, name: "Big Data (Hadoop, Spark)" },
        { icon: <FaSpider className="text-[#6366F1]" size={32} />, name: "Web Scraping (BeautifulSoup, Selenium, Scrapy)" },
        { icon: <SiOpenai className="text-[#412991]" size={32} />, name: "LLMs/AI" }
      ]
    },
    {
      category: "Development & Tools",
      skills: [
        { icon: <FaGitAlt className="text-[#F05032]" size={32} />, name: "Version Control (Git, GitHub)" },
        { icon: <FaCogs className="text-[#6366F1]" size={32} />, name: "Automation & ETL Pipelines" },
        { icon: <FaRocket className="text-[#10B981]" size={32} />, name: "CI/CD" },
        { icon: <FaProjectDiagram className="text-[#6366F1]" size={32} />, name: "Agile Project Management (Jira, Trello)" }
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
                  <FaChartBar className="text-[#0d9488]" size={24} />
                  <h3 className="text-lg font-bold text-gray-800 bg-gradient-to-r from-[#06b6d4] to-[#0f766e] bg-clip-text text-transparent">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  {category.skills.map((skill, idx) => {
                    const [showTooltip, setShowTooltip] = useState(false);
                    const [tooltipPos, setTooltipPos] = useState({ left: 0, top: 0 });
                    const iconRef = useRef<HTMLDivElement>(null);

                    const handleMouseEnter = (e: React.MouseEvent) => {
                      if (iconRef.current) {
                        const rect = iconRef.current.getBoundingClientRect();
                        const tooltipHeight = 32; // Approximate height of tooltip
                        let top = rect.top - tooltipHeight - 8;
                        if (top < 0) top = rect.bottom + 8; // If too close to top, show below
                        const left = rect.left + rect.width / 2;
                        setTooltipPos({ left, top });
                        setShowTooltip(true);
                        
                        // Set CSS custom properties on the document root
                        document.documentElement.style.setProperty('--tooltip-left', `${left}px`);
                        document.documentElement.style.setProperty('--tooltip-top', `${top}px`);
                      }
                    };
                    const handleMouseLeave = () => setShowTooltip(false);

                    return (
                      <React.Fragment key={idx}>
                        <div
                          className="skill-icon-container"
                          title={typeof skill.name === 'string' ? skill.name : 'Skill'}
                          ref={iconRef}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="relative z-10 transition-transform duration-300 hover:scale-110">
                            {skill.icon}
                          </div>
                        </div>
                        {showTooltip && (
                          <div className="skill-tooltip skill-tooltip-positioned">
                            {typeof skill.name === 'string' ? skill.name.split('\n').map((line, i) => (
                              <div key={i}>{line}</div>
                            )) : 'Skill'}
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
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

        .skill-icon-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 4rem;
          height: 4rem;
          background: linear-gradient(to bottom right, #fff, #f9fafb);
          border-radius: 1rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          border: 1px solid #f3f4f6;
          transition: box-shadow 0.3s, transform 0.3s;
          cursor: pointer;
        }
        .skill-icon-container:hover {
          box-shadow: 0 4px 16px rgba(139,92,246,0.2);
          transform: scale(1.1);
        }
        .skill-tooltip {
          background: #1f2937;
          color: #fff;
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          border-radius: 0.375rem;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          transition: opacity 0.3s;
          opacity: 1;
          pointer-events: none;
        }
        .skill-tooltip-positioned {
          position: fixed;
          left: var(--tooltip-left);
          top: var(--tooltip-top);
          transform: translate(-50%, 0);
          z-index: 9999;
          pointer-events: none;
        }
        @media (max-width: 480px) {
          .skill-tooltip {
            font-size: 0.65rem;
            padding: 0.15rem 0.5rem;
            top: -2rem;
          }
        }
      `}</style>
    </ParallaxLayout>
  );
};

export default Skills; 