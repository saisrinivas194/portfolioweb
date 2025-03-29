'use client';

import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import ParallaxLayout from './ParallaxLayout';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectsData = [
    {
      title: "Real Traffic Analysis (Http/Https)",
      duration: "Oct 2024 - Dec 2024",
      description: [
        "Monitored 10,000+ daily web requests across servers to identify traffic patterns using python",
        "Analysed http/https protocols to optimize performance, reducing latency by 15%",
        "Detected and resolved security vulnerabilities in 5+ critical endpoints",
        "Built diagnostic dashboards to visualize traffic bottlenecks in real-time"
      ],
      githubLink: "https://github.com/saisrinivas194/Traffic-analysis-tool-",
      liveLink: ""
    },
    {
      title: "Loan Wise (Webdaddy)",
      duration: "Aug 2024 - Oct 2024",
      description: [
        "Spearheaded R&D for loan application workflows, cutting processing time by 30%",
        "Designed ai-driven content strategies that improved user engagement by 25%",
        "Developed tableau dashboards to track approval rates and risk factors",
        "Proposed UX improvements that reduced form abandonment by 20%"
      ],
      githubLink: "",
      liveLink: "https://loanwise.sg"
    },
    {
      title: "AI-Powered Real Estate Website (JCR Builders)",
      duration: "Nov 2024 - Jan 2025",
      description: [
        "Built a responsive website without prior Nextjs knowledge using ai-generated code, SEO best practices (keyword optimization, heading hierarchy)",
        "Leveraged ChatGPT to debug 40+ issues and optimize react components",
        "Implemented dynamic property listings with 95% uptime reliability",
        "Reduced development time by 50% through ai-assisted programming",
        "Developed a top-ranking google search site using Reactjs and",
        "Integrated google maps API with location metadata, boosting local traffic by 150%"
      ],
      githubLink: "",
      liveLink: "https://www.jcrbuilders.in"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col h-full p-4 sm:p-6 rounded-[20px] bg-white/90 card transition-all duration-300 hover:scale-[0.98] hover:shadow-[0_0_30px_1px_rgba(63,43,150,0.3)] border-2 border-transparent hover:border-[#3f2b96]/30"
              >
                {/* Content */}
                <div className="relative flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-[#3f2b96] to-[#a8c0ff] bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-[#3f2b96] text-sm font-medium mb-4">
                    {project.duration}
                  </p>
                  <div className="flex-grow">
                    <ul className="list-disc list-inside space-y-2 mb-6">
                      {project.description.map((item, idx) => (
                        <li key={idx} className="text-gray-600 text-sm leading-relaxed">
                          <span className="pl-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-4 pt-4 border-t border-gray-100 mt-auto">
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
        </motion.div>
      </div>
    </ParallaxLayout>
  );
};

export default Projects; 