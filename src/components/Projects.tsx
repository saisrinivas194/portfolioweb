'use client';

import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import ParallaxLayout from './ParallaxLayout';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectsData = [
    {
      title: "Real Traffic Analysis HTTP/HTTPS",
      duration: "10/2024 - 12/2024",
      description: [
        "Monitoring real-time data flow across web servers to identify traffic trends.",
        "Analyzing HTTP/HTTPS requests for optimization and performance improvements.",
        "Identifying and resolving bottlenecks in web traffic through diagnostic tools.",
        "Enhancing security by tracking potential vulnerabilities in HTTP/HTTPS protocols."
      ],
      githubLink: "https://github.com/saisrinivas194/Traffic-analysis-tool-",
      liveLink: ""
    },
    {
      title: "Loan Wise (Webdaddy)",
      duration: "08/2024 - 10/2024",
      description: [
        "Conducted research and development for internal pages, focusing on functionality and user experience.",
        "Analyzed and optimized the workflow of loan applications to improve efficiency.",
        "Provided strategic advice on content creation for clarity and engagement.",
        "Offered design recommendations to enhance visual appeal and usability."
      ],
      githubLink: "",
      liveLink: "https://loanwise.sg"
    },
    {
      title: "Web Development (JCR Builders)",
      duration: "11/2024 - 01/2025",
      description: [
        "Developed a real estate business website using ReactJS, HTML, and CSS without prior knowledge of NEXTJS.",
        "Leveraged AI prompting through ChatGPT to guide the development process and troubleshoot challenges.",
        "Focused on creating a functional, user-friendly, and visually appealing web design for the real estate domain."
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