'use client';

import React from 'react';
import { FaDownload, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Link 
            href="/"
            className="flex items-center gap-2 text-[#0d9488] hover:text-[#7dd3fc] transition-colors duration-300"
          >
            <FaArrowLeft />
            Back to Portfolio
          </Link>
          <a
            href="https://docs.google.com/document/d/1kaZc-x2a1rjamTYw6DnTVHytLgBR2q9M/edit?usp=sharing&ouid=105303347734911584038&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#06b6d4] to-[#0f766e] text-white rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <FaDownload />
            <span>Download PDF</span>
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="w-full h-[calc(100vh-120px)] bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://docs.google.com/document/d/1kaZc-x2a1rjamTYw6DnTVHytLgBR2q9M/preview"
            className="w-full h-full border-0"
            allow="autoplay"
            title="Sai Srinivas Resume PDF Viewer"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ResumePage; 