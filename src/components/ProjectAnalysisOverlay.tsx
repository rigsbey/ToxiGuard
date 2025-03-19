'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SECTIONS } from '@/constants/sections';

export default function ProjectAnalysisOverlay() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <div className="max-w-6xl mx-auto" id={SECTIONS.RISK_SCANNER}>
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 px-4">
          Instant Risk Scanner
          <span className="ml-2 text-xs md:text-sm text-white bg-blue-500 px-2 py-1 rounded-full">DEMO</span>
        </h2>
        <p className="text-gray-500 mt-1 md:mt-2 text-sm md:text-base">
          AI-powered analysis of project requirements
        </p>
      </div>

      <div className="relative">
        <motion.div
          className="relative cursor-pointer group"
          whileHover={{ scale: 1.01 }}
        >
          <div className="relative rounded-xl overflow-hidden">
            <video 
              ref={videoRef}
              src="/demo.mp4"
              width={1200}
              height={800}
              className="object-cover w-full"
              muted
              loop
              autoPlay
              playsInline
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
          </div>
        </motion.div>
      </div>
    </div>
  );
} 