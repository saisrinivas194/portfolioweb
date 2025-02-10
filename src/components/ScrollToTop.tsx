'use client';

import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scrolling to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Handle scroll visibility
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Scroll to top on mount/page load
    scrollToTop();

    window.addEventListener('scroll', toggleVisibility);
    // Add popstate event listener for browser back/forward buttons
    window.addEventListener('popstate', scrollToTop);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('popstate', scrollToTop);
    };
  }, []);

  // Add a second useEffect specifically for handling route changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Force scroll to top on route change
      window.history.scrollRestoration = 'manual';
      scrollToTop();
    }
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop; 