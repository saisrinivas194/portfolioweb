'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParallaxLayout from './ParallaxLayout';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  Filler,
} from 'chart.js';
import { Line, Bar, Doughnut, Radar, PolarArea } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  Filler
);

const DataVisualization = () => {
  const [activeTab, setActiveTab] = useState('skills');

  // Section Introduction
  const sectionIntro =
    "Explore my skills, project impact, experience growth, and technology stack through interactive and insightful visualizations. Each chart below highlights key aspects of my professional journey, making it easy to understand my strengths and achievements at a glance.";

  // Chart Descriptions & Insights
  const chartDescriptions = {
    skills: {
      radar: {
        title: 'Skills Distribution',
        desc: 'This radar chart shows my proficiency across core technical skills. Higher values indicate greater expertise.',
        insight: 'Python and Data Analysis are my strongest skills, closely followed by AI/ML and React.'
      },
      polar: {
        title: 'Project Excellence',
        desc: 'This polar area chart evaluates my projects on key quality metrics.',
        insight: 'User Experience and Code Quality are consistently high across my projects.'
      }
    },
    projects: {
      bar: {
        title: 'Project Impact',
        desc: 'This bar chart compares the performance improvement and user engagement delivered by my major projects.',
        insight: 'JCR Builders achieved the highest user engagement and performance improvement.'
      },
      radar: {
        title: 'Project Metrics',
        desc: 'This radar chart breaks down project excellence by category.',
        insight: 'Innovation and Documentation are areas of continuous improvement.'
      }
    },
    experience: {
      line: {
        title: 'Experience Growth',
        desc: 'This line chart tracks my professional growth and technical skill development over time.',
        insight: 'There is a steady upward trend in both project complexity and technical skills.'
      },
      line2: {
        title: 'Skills Evolution',
        desc: 'This chart mirrors my technical skills progression alongside experience.',
        insight: 'Technical skills have grown in parallel with project complexity.'
      }
    },
    tech: {
      doughnut: {
        title: 'Technology Stack',
        desc: 'This doughnut chart visualizes the distribution of my expertise across different technology domains.',
        insight: 'Data Science and Frontend are my most prominent domains.'
      },
      polar: {
        title: 'Tech Distribution',
        desc: 'This polar area chart offers another view of my technology stack.',
        insight: 'AI/ML and Backend are also significant strengths.'
      }
    }
  };

  // Skills Distribution Data
  const skillsData = {
    labels: ['Python', 'React', 'AI/ML', 'Data Analysis', 'Web Dev', 'Cloud', 'SQL', 'Git'],
    datasets: [
      {
        label: 'Proficiency Level',
        data: [90, 85, 88, 92, 87, 75, 82, 88],
        backgroundColor: 'rgba(63, 43, 150, 0.3)',
        borderColor: '#3f2b96',
        pointBackgroundColor: '#a8c0ff',
        pointBorderColor: '#3f2b96',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  // Project Impact Data
  const projectData = {
    labels: ['Traffic Analysis', 'Loan Wise', 'JCR Builders'],
    datasets: [
      {
        label: 'Performance Improvement (%)',
        data: [15, 30, 50],
        backgroundColor: [
          'rgba(63, 43, 150, 0.7)',
          'rgba(168, 192, 255, 0.7)',
          'rgba(63, 43, 150, 0.9)',
        ],
        borderRadius: 8,
      },
      {
        label: 'User Engagement (%)',
        data: [25, 40, 150],
        backgroundColor: [
          'rgba(63, 43, 150, 0.4)',
          'rgba(168, 192, 255, 0.4)',
          'rgba(63, 43, 150, 0.6)',
        ],
        borderRadius: 8,
      },
    ],
  };

  // Experience Timeline Data
  const experienceData = {
    labels: ['2023 Q3', '2023 Q4', '2024 Q1', '2024 Q2', '2024 Q3', '2024 Q4'],
    datasets: [
      {
        label: 'Project Complexity',
        data: [65, 75, 85, 90, 95, 100],
        borderColor: '#3f2b96',
        backgroundColor: 'rgba(63, 43, 150, 0.2)',
        pointBackgroundColor: '#a8c0ff',
        pointBorderColor: '#3f2b96',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Technical Skills',
        data: [70, 80, 85, 90, 95, 98],
        borderColor: '#a8c0ff',
        backgroundColor: 'rgba(168, 192, 255, 0.2)',
        pointBackgroundColor: '#3f2b96',
        pointBorderColor: '#a8c0ff',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Technology Stack Data
  const techStackData = {
    labels: ['Frontend', 'Backend', 'Data Science', 'AI/ML', 'DevOps', 'Tools'],
    datasets: [
      {
        label: 'Technology Distribution',
        data: [85, 80, 90, 88, 75, 82],
        backgroundColor: [
          '#3f2b96',
          '#a8c0ff',
          '#7b4397',
          '#43cea2',
          '#f7971e',
          '#fd5c63',
        ],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  // Project Metrics Data
  const projectMetricsData = {
    labels: ['Code Quality', 'Performance', 'User Experience', 'Innovation', 'Documentation'],
    datasets: [
      {
        label: 'Project Excellence',
        data: [92, 88, 95, 90, 85],
        backgroundColor: [
          '#3f2b96',
          '#a8c0ff',
          '#43cea2',
          '#f7971e',
          '#fd5c63',
        ],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#222',
          font: { size: 14, weight: 'bold' as const },
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: '#3f2b96',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#a8c0ff',
        borderWidth: 1,
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) label += ': ';
            if (context.parsed !== null) label += context.parsed;
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: '#3f2b96',
          font: { size: 12, weight: 'bold' as const },
        },
        grid: {
          color: '#a8c0ff',
        },
      },
      x: {
        ticks: {
          color: '#3f2b96',
          font: { size: 12, weight: 'bold' as const },
        },
        grid: {
          color: '#a8c0ff',
        },
      },
    },
    interaction: {
      mode: 'nearest' as const,
      axis: 'x' as const,
      intersect: false,
    },
    animation: {
      duration: 1200,
      easing: 'easeInOutQuart',
    } as any,
  };

  const tabs = [
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'tech', label: 'Tech Stack' },
  ];

  return (
    <ParallaxLayout>
      <div className="min-h-screen py-4 sm:py-8 px-2 sm:px-4 lg:px-8 w-full max-w-full overflow-x-hidden" id="visualization">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading text-center">
            Data Visualization
          </h1>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white/90" role="tablist" aria-label="Visualization Tabs">
              {tabs.map((tab) => {
                const isSelected = activeTab === tab.id ? 'true' : 'false';
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#3f2b96] ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-[#3f2b96] to-[#a8c0ff] text-white shadow'
                        : 'text-gray-600 hover:text-[#3f2b96]'
                    }`}
                    role="tab"
                    aria-selected={activeTab === tab.id && "true"}
                    tabIndex={activeTab === tab.id ? 0 : -1}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activeTab === 'skills' && (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white/90 rounded-[20px] p-4 sm:p-6 shadow-lg w-full max-w-full overflow-x-auto"
                  aria-labelledby="skills-radar-title"
                >
                  <h2 id="skills-radar-title" className="text-xl font-semibold mb-2 text-[#3f2b96] flex items-center gap-2">
                    <span role="img" aria-label="radar">📊</span> {chartDescriptions.skills.radar.title}
                  </h2>
                  <p className="text-gray-600 mb-2 text-sm">{chartDescriptions.skills.radar.desc}</p>
                  <div className="w-full max-w-full min-w-0">
                    <Radar data={skillsData} options={chartOptions} aria-label="Skills Radar Chart" style={{ width: '100%', height: 'auto' }} />
                  </div>
                  <div className="mt-4 p-2 bg-[#f5f7fa] rounded text-[#3f2b96] text-sm font-medium">
                    <span role="img" aria-label="insight">💡</span> {chartDescriptions.skills.radar.insight}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white/90 rounded-[20px] p-4 sm:p-6 shadow-lg w-full max-w-full overflow-x-auto"
                  aria-labelledby="skills-polar-title"
                >
                  <h2 id="skills-polar-title" className="text-xl font-semibold mb-2 text-[#3f2b96] flex items-center gap-2">
                    <span role="img" aria-label="polar">🏆</span> {chartDescriptions.skills.polar.title}
                  </h2>
                  <p className="text-gray-600 mb-2 text-sm">{chartDescriptions.skills.polar.desc}</p>
                  <div className="w-full max-w-full min-w-0">
                    <PolarArea data={projectMetricsData} options={chartOptions} aria-label="Project Excellence Polar Chart" style={{ width: '100%', height: 'auto' }} />
                  </div>
                  <div className="mt-4 p-2 bg-[#f5f7fa] rounded text-[#3f2b96] text-sm font-medium">
                    <span role="img" aria-label="insight">💡</span> {chartDescriptions.skills.polar.insight}
                  </div>
                </motion.div>
              </>
            )}

            {activeTab === 'projects' && (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white/90 rounded-[20px] p-4 sm:p-6 shadow-lg w-full max-w-full overflow-x-auto"
                  aria-labelledby="projects-bar-title"
                >
                  <h2 id="projects-bar-title" className="text-xl font-semibold mb-2 text-[#3f2b96] flex items-center gap-2">
                    <span role="img" aria-label="bar">📈</span> {chartDescriptions.projects.bar.title}
                  </h2>
                  <p className="text-gray-600 mb-2 text-sm">{chartDescriptions.projects.bar.desc}</p>
                  <div className="w-full max-w-full min-w-0">
                    <Bar data={projectData} options={chartOptions} aria-label="Project Impact Bar Chart" style={{ width: '100%', height: 'auto' }} />
                  </div>
                  <div className="mt-4 p-2 bg-[#f5f7fa] rounded text-[#3f2b96] text-sm font-medium">
                    <span role="img" aria-label="insight">💡</span> {chartDescriptions.projects.bar.insight}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white/90 rounded-[20px] p-4 sm:p-6 shadow-lg w-full max-w-full overflow-x-auto"
                  aria-labelledby="projects-radar-title"
                >
                  <h2 id="projects-radar-title" className="text-xl font-semibold mb-2 text-[#3f2b96] flex items-center gap-2">
                    <span role="img" aria-label="radar">🛠️</span> {chartDescriptions.projects.radar.title}
                  </h2>
                  <p className="text-gray-600 mb-2 text-sm">{chartDescriptions.projects.radar.desc}</p>
                  <div className="w-full max-w-full min-w-0">
                    <Radar data={projectMetricsData} options={chartOptions} aria-label="Project Metrics Radar Chart" style={{ width: '100%', height: 'auto' }} />
                  </div>
                  <div className="mt-4 p-2 bg-[#f5f7fa] rounded text-[#3f2b96] text-sm font-medium">
                    <span role="img" aria-label="insight">💡</span> {chartDescriptions.projects.radar.insight}
                  </div>
                </motion.div>
              </>
            )}

            {activeTab === 'experience' && (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white/90 rounded-[20px] p-4 sm:p-6 shadow-lg w-full max-w-full overflow-x-auto"
                  aria-labelledby="experience-line-title"
                >
                  <h2 id="experience-line-title" className="text-xl font-semibold mb-2 text-[#3f2b96] flex items-center gap-2">
                    <span role="img" aria-label="line">🚀</span> {chartDescriptions.experience.line.title}
                  </h2>
                  <p className="text-gray-600 mb-2 text-sm">{chartDescriptions.experience.line.desc}</p>
                  <div className="w-full max-w-full min-w-0">
                    <Line data={experienceData} options={chartOptions} aria-label="Experience Growth Line Chart" style={{ width: '100%', height: 'auto' }} />
                  </div>
                  <div className="mt-4 p-2 bg-[#f5f7fa] rounded text-[#3f2b96] text-sm font-medium">
                    <span role="img" aria-label="insight">💡</span> {chartDescriptions.experience.line.insight}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white/90 rounded-[20px] p-4 sm:p-6 shadow-lg w-full max-w-full overflow-x-auto"
                  aria-labelledby="experience-line2-title"
                >
                  <h2 id="experience-line2-title" className="text-xl font-semibold mb-2 text-[#3f2b96] flex items-center gap-2">
                    <span role="img" aria-label="line2">📈</span> {chartDescriptions.experience.line2.title}
                  </h2>
                  <p className="text-gray-600 mb-2 text-sm">{chartDescriptions.experience.line2.desc}</p>
                  <div className="w-full max-w-full min-w-0">
                    <Line data={experienceData} options={chartOptions} aria-label="Skills Evolution Line Chart" style={{ width: '100%', height: 'auto' }} />
                  </div>
                  <div className="mt-4 p-2 bg-[#f5f7fa] rounded text-[#3f2b96] text-sm font-medium">
                    <span role="img" aria-label="insight">💡</span> {chartDescriptions.experience.line2.insight}
                  </div>
                </motion.div>
              </>
            )}

            {activeTab === 'tech' && (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white/90 rounded-[20px] p-4 sm:p-6 shadow-lg w-full max-w-full overflow-x-auto"
                  aria-labelledby="tech-doughnut-title"
                >
                  <h2 id="tech-doughnut-title" className="text-xl font-semibold mb-2 text-[#3f2b96] flex items-center gap-2">
                    <span role="img" aria-label="doughnut">🍩</span> {chartDescriptions.tech.doughnut.title}
                  </h2>
                  <p className="text-gray-600 mb-2 text-sm">{chartDescriptions.tech.doughnut.desc}</p>
                  <div className="w-full max-w-full min-w-0">
                    <Doughnut data={techStackData} options={chartOptions} aria-label="Technology Stack Doughnut Chart" style={{ width: '100%', height: 'auto' }} />
                  </div>
                  <div className="mt-4 p-2 bg-[#f5f7fa] rounded text-[#3f2b96] text-sm font-medium">
                    <span role="img" aria-label="insight">💡</span> {chartDescriptions.tech.doughnut.insight}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white/90 rounded-[20px] p-4 sm:p-6 shadow-lg w-full max-w-full overflow-x-auto"
                  aria-labelledby="tech-polar-title"
                >
                  <h2 id="tech-polar-title" className="text-xl font-semibold mb-2 text-[#3f2b96] flex items-center gap-2">
                    <span role="img" aria-label="polar">🧑‍💻</span> {chartDescriptions.tech.polar.title}
                  </h2>
                  <p className="text-gray-600 mb-2 text-sm">{chartDescriptions.tech.polar.desc}</p>
                  <div className="w-full max-w-full min-w-0">
                    <PolarArea data={techStackData} options={chartOptions} aria-label="Tech Distribution Polar Chart" style={{ width: '100%', height: 'auto' }} />
                  </div>
                  <div className="mt-4 p-2 bg-[#f5f7fa] rounded text-[#3f2b96] text-sm font-medium">
                    <span role="img" aria-label="insight">💡</span> {chartDescriptions.tech.polar.insight}
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </ParallaxLayout>
  );
};

export default DataVisualization; 