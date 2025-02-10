'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ParallaxLayout from './ParallaxLayout';

const skillsData = {
  "Core Technical Skills": {
    icon: "💻",
    skills: [
      "Python Programming",
      "Data Structures",
      "Algorithms",
      "Web Development",
      "Database Management"
    ],
    gradient: "from-[#a8c0ff] to-[#3f2b96]"
  },
  "AI & Machine Learning": {
    icon: "🤖",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "TensorFlow",
      "PyTorch",
      "Natural Language Processing",
      "Computer Vision",
      "AI Prompt Engineering"
    ],
    gradient: "from-[#3f2b96] to-[#a8c0ff]"
  },
  "Data Science & Analytics": {
    icon: "📊",
    skills: [
      "Statistical Analysis",
      "Data Visualization",
      "Pandas & NumPy",
      "Scikit-learn",
      "Web Scraping",
      "Tableau",
      "Data Management"
    ],
    gradient: "from-[#a8c0ff] to-[#3f2b96]"
  },
  "AI-Powered Development": {
    icon: "⚡",
    skills: [
      "Frontend with AI",
      "React.js & Next.js",
      "TailwindCSS",
      "UI/UX Design with AI",
      "Component Architecture",
      "Responsive Design",
      "AI-Driven Development",
      "Modern Web Stack"
    ],
    gradient: "from-[#3f2b96] to-[#a8c0ff]"
  },
  "Research & Tools": {
    icon: "🔬",
    skills: [
      "Research Methodology",
      "Data Collection",
      "VS Code & Jupyter",
      "Technical Documentation",
      "Project Planning",
      "Analysis Tools"
    ],
    gradient: "from-[#a8c0ff] to-[#3f2b96]"
  },
  "Professional Skills": {
    icon: "👥",
    skills: [
      "Problem Solving",
      "Critical Thinking",
      "Team Management",
      "Decision Making",
      "Project Leadership",
      "Communication",
      "Time Management",
      "Agile Methodology"
    ],
    gradient: "from-[#3f2b96] to-[#a8c0ff]"
  }
};

const Skills = () => {
  return (
    <ParallaxLayout>
      <div className="min-h-screen py-16 px-4" id="skills">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="max-w-[1600px] mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#3f2b96] to-[#a8c0ff] bg-clip-text text-transparent animate-gradient">
            Technical Skills
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Object.entries(skillsData).map(([category, { icon, skills, gradient }], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 rounded-[20px] bg-white/90 card transition-all duration-300 hover:scale-[0.98] hover:shadow-[0_0_30px_1px_rgba(63,43,150,0.3)] border-2 border-transparent hover:border-[#3f2b96]/30"
              >
                <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                  <span className="text-xl">{icon}</span>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 text-sm bg-gradient-to-r ${gradient} text-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-gradient-to-l`}
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