'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ParallaxLayout from './ParallaxLayout';
import { FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Hari Kumar Somakantan",
      username: "@harikumar",
      role: "Director of Business Development",
      company: "Webdaddy",
      img: "https://avatar.vercel.sh/harikumar",
      body: "I had the pleasure of working with Sai Srinivas during his time at WebDaddy, where he played a crucial role in Research and Development for AI, Machine Learning, and Deep Learning solutions. Sai's expertise in data science was evident in the way he developed and optimized predictive models, ensuring efficient and scalable implementations. Beyond his technical skills, Sai also contributed significantly to lead generation and content creation, leveraging data-driven strategies to enhance engagement and outreach. His ability to blend analytical thinking with creative content strategies made a remarkable impact on our projects. Sai is not only an innovative problem-solver but also a collaborative team player who is always eager to explore new technologies and trends. I highly recommend him for any organization looking for a skilled and versatile data science professional!",
      date: "April 10, 2025",
      relationship: "Direct Manager @Webdaddy"
    },
    {
      name: "Yash Malviya",
      username: "@yashmalviya",
      role: "Product Enablement & Data Analyst",
      company: "Findem",
      img: "https://avatar.vercel.sh/yashmalviya",
      body: "During Sai's internship, he demonstrated excellent technical skills and a sincere interest in our work. His curiosity and dedication to understanding our industry and business goals made him a valuable team member. Sai's eagerness to learn and contribute across various data projects was highly appreciated. He comes highly recommended.",
      date: "April 23, 2024",
      relationship: "Direct Manager"
    },
    {
      name: "Rajita Rao",
      username: "@rajitarao",
      role: "Product Ops | Enablement",
      company: "Duke University",
      img: "https://avatar.vercel.sh/rajitarao",
      body: "I had the pleasure of working alongside Sai during his internship with our team, and I highly recommend him. In addition to the technical skills, Sai showed a genuine passion for the work we do. His curiosity and drive to understand the industry and our business objectives made him a valuable asset to our team.",
      date: "April 22, 2024",
      relationship: "Direct Manager"
    },
    {
      name: "Rajat Gupta",
      username: "@rajatgupta",
      role: "Product & Data",
      company: "Findem",
      img: "https://avatar.vercel.sh/rajatgupta",
      body: "Sai has always shown keen interest in learning new aspects of Research as an intern. His contribution across different data projects was valuable.",
      date: "April 10, 2024",
      relationship: "Direct Manager"
    }
  ];

  const ReviewCard = ({ img, name, username, body, role, company }: any) => {
    return (
      <figure
        className={cn(
          'relative w-96 cursor-pointer overflow-hidden rounded-xl border p-6 mx-4',
          'border-gray-200 bg-white/90 hover:bg-gray-50',
          'shadow-lg hover:shadow-xl transition-all duration-300'
        )}
      >
        <div className="flex flex-row items-center gap-3 mb-4">
          <img className="rounded-full border-2 border-gray-200" width="45" height="45" alt="" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-base font-bold text-gray-800">
              {name}
            </figcaption>
            <p className="text-sm text-[#0d9488] font-medium">{username}</p>
            <p className="text-sm text-gray-600">{role} {company && `at ${company}`}</p>
          </div>
        </div>
        <blockquote className="text-sm text-gray-600 leading-relaxed">
          "{body}"
        </blockquote>
      </figure>
    );
  };

  return (
    <ParallaxLayout>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" id="testimonials">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto"
        >
          {/* Large background title */}
          <h1 className="testimonials-bg-title">
            RECOMMENDATIONS
          </h1>
          
          {/* LinkedIn Link */}
          <div className="flex flex-col items-center mb-8 mt-20">
            <a 
              href="https://www.linkedin.com/in/sai-srinivas-pedhapolla-345959256/details/recommendations/?detailScreenTabIndex=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-[#0d9488] transition-colors duration-300 flex items-center gap-2"
            >
              View on LinkedIn
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Marquee Testimonials */}
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg py-6 mt-4">
            <Marquee pauseOnHover className="[--duration:30s]">
              {testimonials.concat(testimonials).map((review, index) => (
                <ReviewCard key={`${review.username}-${index}`} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-white/50 to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white via-white/50 to-transparent"></div>
          </div>

        </motion.div>
      </div>

      <style jsx>{`
        .testimonials-bg-title {
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
          .testimonials-bg-title {
            font-size: 2rem;
            top: 5px;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .testimonials-bg-title {
            font-size: 3rem;
            top: 8px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .testimonials-bg-title {
            font-size: 4rem;
            top: 12px;
          }
        }
      `}</style>

      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - var(--gap)));
          }
        }

        @keyframes marquee-reverse {
          from {
            transform: translateX(calc(-100% - var(--gap)));
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee var(--duration) linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse var(--duration) linear infinite;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </ParallaxLayout>
  );
};

export default Testimonials;