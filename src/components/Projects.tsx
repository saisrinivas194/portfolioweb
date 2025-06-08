'use client';

import React, { useState, useEffect } from 'react';
import { FaGithub, FaGlobe, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ParallaxLayout from './ParallaxLayout';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollMomentum, setScrollMomentum] = useState(0);

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
      liveLink: "",
      image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?q=80&w=1000&auto=format&fit=crop"
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
      liveLink: "",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
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
      liveLink: "https://loanwise.sg",
      image: "https://image.thum.io/get/width/1200/crop/800/https://loanwise.sg"
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
      liveLink: "https://www.jcrbuilders.in",
      image: "https://image.thum.io/get/width/1200/crop/800/https://www.jcrbuilders.in"
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
      liveLink: "",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop"
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
      liveLink: "",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1000&auto=format&fit=crop"
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
      liveLink: "",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  const updateCarousel = (newIndex: number, momentum = 0) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsScrolling(true);
    setScrollMomentum(momentum);
    
    const targetIndex = (newIndex + projectsData.length) % projectsData.length;
    setCurrentIndex(targetIndex);
    
    // Smooth momentum decay
    if (momentum > 0) {
      setTimeout(() => {
        setScrollMomentum(momentum * 0.8);
      }, 100);
    }
    
    setTimeout(() => {
      setIsAnimating(false);
      setScrollMomentum(0);
    }, 800);

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  const getCardClass = (index: number) => {
    const offset = (index - currentIndex + projectsData.length) % projectsData.length;
    
    if (offset === 0) {
      return "center";
    } else if (offset === 1) {
      return "right-1";
    } else if (offset === 2) {
      return "right-2";
    } else if (offset === projectsData.length - 1) {
      return "left-1";
    } else if (offset === projectsData.length - 2) {
      return "left-2";
    } else {
      return "hidden";
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        updateCarousel(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        updateCarousel(currentIndex + 1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  // Touch navigation
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          updateCarousel(currentIndex + 1);
        } else {
          updateCarousel(currentIndex - 1);
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex]);

  // Enhanced smooth wheel navigation
  useEffect(() => {
    let wheelTimeout: NodeJS.Timeout;
    let accumulatedDelta = 0;
    let lastWheelTime = Date.now();
    
    const handleWheel = (e: Event) => {
      const wheelEvent = e as WheelEvent;
      wheelEvent.preventDefault();
      
      const currentTime = Date.now();
      const timeDiff = currentTime - lastWheelTime;
      
      // Calculate velocity for smoother scrolling
      const velocity = Math.abs(wheelEvent.deltaY) / Math.max(timeDiff, 1);
      const momentum = Math.min(velocity / 10, 3);
      
      accumulatedDelta += wheelEvent.deltaY;
      lastWheelTime = currentTime;
      
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
        if (Math.abs(accumulatedDelta) > 30) {
          if (accumulatedDelta > 0) {
            updateCarousel(currentIndex + 1, momentum);
          } else {
            updateCarousel(currentIndex - 1, momentum);
          }
        }
        accumulatedDelta = 0;
      }, 100);
    };

    const carouselElement = document.querySelector('.carousel-container');
    if (carouselElement) {
      carouselElement.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('wheel', handleWheel);
      }
      clearTimeout(wheelTimeout);
    };
  }, [currentIndex]);

  return (
    <ParallaxLayout>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" id="projects">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          {/* Large background title */}
          <h1 className="projects-bg-title">
            PROJECTS
          </h1>
          
          {/* Carousel Container */}
          <div className="carousel-container">


            {/* Navigation Arrows */}
            <button
              onClick={() => updateCarousel(currentIndex - 1)}
              className="nav-arrow left"
              aria-label="Previous project"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={() => updateCarousel(currentIndex + 1)}
              className="nav-arrow right"
              aria-label="Next project"
            >
              <FaChevronRight />
            </button>

            {/* Carousel Track */}
            <div className="carousel-track">
                {projectsData.map((project, index) => (
                <div
                  key={index}
                  className={`card ${getCardClass(index)}`}
                  onClick={() => updateCarousel(index)}
                  data-index={index}
                >
                  <img src={project.image} alt={project.title} />
                </div>
              ))}
            </div>


          </div>

          {/* Project Info */}
          <div className="project-info">
            <AnimatePresence mode="wait">
                  <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <h2 className="project-name">{projectsData[currentIndex].title}</h2>
                <p className="project-duration">{projectsData[currentIndex].duration}</p>
                
                <div className="project-description">
                  <ul>
                    {projectsData[currentIndex].description.map((item, idx) => (
                      <li key={idx}>
                        <span className="bullet"></span>
                        {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                <div className="project-links">
                  {projectsData[currentIndex].githubLink && (
                    <a 
                      href={projectsData[currentIndex].githubLink} 
                             target="_blank" 
                             rel="noopener noreferrer" 
                      className="project-link"
                    >
                      <FaGithub />
                      <span>Source Code</span>
                          </a>
                        )}
                  {projectsData[currentIndex].liveLink && (
                    <a 
                      href={projectsData[currentIndex].liveLink} 
                             target="_blank" 
                             rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGlobe />
                      <span>Live Site</span>
                          </a>
                        )}
                      </div>
              </motion.div>
            </AnimatePresence>
                    </div>

          {/* Dots Navigation */}
          <div className="dots">
            {projectsData.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => updateCarousel(index)}
                data-index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        * {
          scroll-behavior: smooth;
        }

        .projects-bg-title {
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

        .carousel-container {
          width: 100%;
          max-width: 1000px;
          height: 350px;
          position: relative;
          perspective: 1000px;
          margin: 60px auto 0 auto;
        }

        .carousel-track {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          left: 50%;
          transform: translateX(-50%);
        }

        .card {
          position: absolute;
          width: 220px;
          height: 300px;
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
        }

        .card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }



        .card.center {
          z-index: 10;
          transform: scale(1.1) translateZ(0);
        }

        .card.center img {
          filter: none;
        }

        .card.left-2 {
          z-index: 1;
          transform: translateX(-320px) scale(0.8) translateZ(-250px);
          opacity: 0.7;
        }

        .card.left-2 img {
          filter: grayscale(100%);
        }

        .card.left-1 {
          z-index: 5;
          transform: translateX(-160px) scale(0.9) translateZ(-80px);
          opacity: 0.9;
        }

        .card.left-1 img {
          filter: grayscale(100%);
        }

        .card.right-1 {
          z-index: 5;
          transform: translateX(160px) scale(0.9) translateZ(-80px);
          opacity: 0.9;
        }

        .card.right-1 img {
          filter: grayscale(100%);
        }

        .card.right-2 {
          z-index: 1;
          transform: translateX(320px) scale(0.8) translateZ(-250px);
          opacity: 0.7;
        }

        .card.right-2 img {
          filter: grayscale(100%);
        }

        .card.hidden {
          opacity: 0;
          pointer-events: none;
        }



        .project-info {
          text-align: center;
          margin: 30px auto;
          max-width: 700px;
          transition: all 0.5s ease-out;
        }

        .project-name {
          color: #06b6d4;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 8px;
          position: relative;
          display: inline-block;
        }

        .project-name::before,
        .project-name::after {
          content: "";
          position: absolute;
          top: 100%;
          width: 60px;
          height: 2px;
          background: #06b6d4;
        }

        .project-name::before {
          left: -80px;
        }

        .project-name::after {
          right: -80px;
        }

        .project-duration {
          color: #848696;
          font-size: 1rem;
          font-weight: 500;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 8px 0;
          margin-top: -10px;
          position: relative;
        }

        .project-description {
          margin-bottom: 20px;
          text-align: left;
        }

        .project-description ul {
          list-style: none;
          padding: 0;
        }

        .project-description li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 8px;
          color: #666;
          line-height: 1.5;
          font-size: 0.9rem;
        }

        .bullet {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: linear-gradient(to right, #06b6d4, #0f766e);
          margin-top: 6px;
          flex-shrink: 0;
        }

        .project-links {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 15px;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 20px;
          background: linear-gradient(to right, #06b6d4, #0f766e);
          color: white;
          text-decoration: none;
          border-radius: 20px;
          transition: all 0.3s ease;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .project-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(6, 182, 212, 0.3);
        }

        .dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 40px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(6, 182, 212, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #06b6d4;
          transform: scale(1.2);
        }

        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(63, 43, 150, 0.6);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 20;
          transition: all 0.3s ease;
          font-size: 1.5rem;
          border: none;
          outline: none;
          padding-bottom: 4px;
        }

        .nav-arrow:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: translateY(-50%) scale(1.1);
        }

        .nav-arrow.left {
          left: 20px;
          padding-right: 3px;
        }

        .nav-arrow.right {
          right: 20px;
          padding-left: 3px;
        }









         @media (max-width: 480px) {
           .projects-bg-title {
             font-size: 2rem;
             top: 5px;
           }
         }

         @media (min-width: 481px) and (max-width: 768px) {
           .projects-bg-title {
             font-size: 3rem;
             top: 8px;
           }
         }

         @media (min-width: 769px) and (max-width: 1024px) {
           .projects-bg-title {
             font-size: 4rem;
             top: 12px;
           }

           .carousel-container {
             height: 280px;
             margin: 40px auto 0 auto;
           }

           .card {
             width: 160px;
             height: 220px;
           }

           .card.left-2 {
             transform: translateX(-200px) scale(0.8) translateZ(-200px);
           }

           .card.left-1 {
             transform: translateX(-100px) scale(0.9) translateZ(-80px);
           }

           .card.right-1 {
             transform: translateX(100px) scale(0.9) translateZ(-80px);
           }

           .card.right-2 {
             transform: translateX(200px) scale(0.8) translateZ(-200px);
           }

           .project-name {
             font-size: 1.5rem;
           }

           .project-duration {
             font-size: 0.9rem;
           }

           .project-description li {
             font-size: 0.85rem;
           }

           .project-link {
             font-size: 0.8rem;
             padding: 8px 16px;
           }

           .project-name::before,
           .project-name::after {
             width: 40px;
           }

           .project-name::before {
             left: -60px;
           }

           .project-name::after {
             right: -60px;
           }
         }

        /* Keyframe Animations */






      `}</style>
    </ParallaxLayout>
  );
};

export default Projects; 