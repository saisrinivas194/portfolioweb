'use client';

import React, { useRef } from 'react';
import { FaGithub, FaGlobe, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ParallaxLayout from './ParallaxLayout';
import { motion } from 'framer-motion';

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Adjust this value to control scroll distance
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const projectsData = [
    {
      title: "Recipe Health Dashboard – NJIT",
      duration: "Jan 2024 - Present",
      description: [
        "Developed an interactive dashboard using Plotly Dash for analyzing 1,000+ recipes",
        "Explored nutrient distribution, calorie-health score relationships, and popularity trends",
        "Integrated deployment options (Heroku, Render, PythonAnywhere) with Flask and Gunicorn",
        "Used Dv_Final.csv as a data source for nutritional modeling and user behavior analysis"
      ],
      githubLink: "https://github.com/saisrinivas194/Recipe_Health_Dashboard",
      liveLink: ""
    },
    {
      title: "Real Traffic Analysis (Http/Https) – NJIT",
      duration: "Oct 2024 - Dec 2024",
      description: [
        "Performed real-time traffic monitoring and HTTP/HTTPS analysis on 10K+ requests",
        "Built dashboards to detect bottlenecks and optimize performance",
        "Analyzed http/https protocols to optimize performance, reducing latency by 15%",
        "Detected and resolved security vulnerabilities in 5+ critical endpoints"
      ],
      githubLink: "https://github.com/saisrinivas194/Traffic-analysis-tool-",
      liveLink: ""
    },
    {
      title: "Loan Wise – Webdaddy",
      duration: "Aug 2024 - Oct 2024",
      description: [
        "Automated loan workflows using AI and recommendation systems",
        "Built Tableau dashboards to monitor approval trends and risk analysis",
        "Designed AI-driven content strategies that improved user engagement by 25%",
        "Proposed UX improvements that reduced form abandonment by 20%"
      ],
      githubLink: "",
      liveLink: "https://loanwise.sg"
    },
    {
      title: "AI-Powered Real Estate Website - JCR Builders",
      duration: "Nov 2024 - Jan 2025",
      description: [
        "Built a dynamic ReactJS site enhanced by ChatGPT code generation and SEO optimization",
        "Leveraged ChatGPT to debug 40+ issues and optimize react components",
        "Implemented dynamic property listings with 95% uptime reliability",
        "Reduced development time by 50% through AI-assisted programming",
        "Integrated Google Maps API with location metadata, boosting local traffic by 150%"
      ],
      githubLink: "",
      liveLink: "https://www.jcrbuilders.in"
    },
    {
      title: "Stock Market Forecasting",
      duration: "Sep 2023 - Nov 2023",
      description: [
        "Deployed a predictive dashboard using real-time APIs and ML models",
        "Implemented time series forecasting algorithms for market trend analysis",
        "Created interactive visualizations for stock performance metrics",
        "Integrated multiple data sources for comprehensive market analysis"
      ],
      githubLink: "https://github.com/saisrinivas194/Stock_market_prediction",
      liveLink: ""
    },
    {
      title: "Netflix Data Analysis",
      duration: "Aug 2023 - Sep 2023",
      description: [
        "Analyzed Netflix content library to identify viewing patterns and trends",
        "Created visualizations to showcase content distribution by genre and region",
        "Developed insights on content strategy and audience preferences",
        "Built interactive dashboards for content performance analysis"
      ],
      githubLink: "https://github.com/saisrinivas194/Netflix-Movies-and-TV-shows-analysis",
      liveLink: ""
    },
    {
      title: "Customer Personality Insights",
      duration: "Jul 2023 - Aug 2023",
      description: [
        "Clustered customer personas using unsupervised ML for targeted marketing strategies",
        "Applied advanced segmentation techniques to identify key customer groups",
        "Developed actionable insights for marketing campaign optimization",
        "Created visualization dashboards for customer behavior analysis"
      ],
      githubLink: "https://github.com/saisrinivas194/Customer-Personality-Analysis-",
      liveLink: ""
    }
  ];

  return (
    <ParallaxLayout>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" id="projects">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-12 gradient-heading text-center">
            Projects
          </h1>
          
          <div className="relative w-full group">
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 -translate-x-1/2"
              aria-label="Scroll left"
            >
              <FaChevronLeft className="text-[#3f2b96]" size={20} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 translate-x-1/2"
              aria-label="Scroll right"
            >
              <FaChevronRight className="text-[#3f2b96]" size={20} />
            </button>

            <div ref={scrollContainerRef} className="overflow-x-auto pb-8 hide-scrollbar">
              <div className="flex gap-6 sm:gap-8 min-w-max px-4">
                {projectsData.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col h-[500px] w-[350px] p-4 sm:p-6 rounded-[20px] bg-white/90 card transition-all duration-300 hover:scale-[0.98] hover:shadow-[0_0_30px_1px_rgba(63,43,150,0.3)] border-2 border-transparent hover:border-[#3f2b96]/30"
                  >
                    {/* Content */}
                    <div className="relative flex flex-col h-full">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-[#3f2b96] to-[#a8c0ff] bg-clip-text text-transparent min-h-[56px] flex items-center">
                        {project.title}
                      </h3>
                      <p className="text-[#3f2b96] text-sm font-medium mb-4">
                        {project.duration}
                      </p>
                      <div className="flex-grow overflow-y-auto custom-scrollbar">
                        <ul className="space-y-3 mb-6 pr-2">
                          {project.description.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                              <span className="flex-shrink-0 w-2 h-2 mt-1.5 rounded-full bg-gradient-to-r from-[#3f2b96] to-[#a8c0ff]"></span>
                              <span className="flex-grow">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex gap-4 pt-4 border-t border-gray-100 mt-4">
                        {project.githubLink && (
                          <a href={project.githubLink} 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             className="text-gray-600 hover:text-[#3f2b96] transition-colors flex items-center gap-2"
                             title="View Source Code">
                            <FaGithub size={20} />
                            <span className="text-sm">Source Code</span>
                          </a>
                        )}
                        {project.liveLink && (
                          <a href={project.liveLink} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-gray-600 hover:text-[#3f2b96] transition-colors flex items-center gap-2"
                             title="Visit Website">
                            <FaGlobe size={20} />
                            <span className="text-sm">Live Site</span>
                          </a>
                        )}
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

export default Projects; 