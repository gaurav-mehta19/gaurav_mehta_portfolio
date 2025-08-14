'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SimpleTracingBeamProps {
  children: React.ReactNode;
}

export const SimpleTracingBeam: React.FC<SimpleTracingBeamProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [beamHeight, setBeamHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    if (containerRef.current) {
      setBeamHeight(containerRef.current.scrollHeight);
    }
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Modern Tracing beam line */}
      <div className="absolute left-48 md:left-64 lg:left-80 top-0 h-full">
        <svg
          width="4"
          height={beamHeight}
          viewBox={`0 0 4 ${beamHeight}`}
          className="absolute left-0 top-0"
        >
          {/* Background line with glow */}
          <defs>
            <linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.1" />
              <stop offset="30%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Background track */}
          <line
            x1="2"
            y1="0"
            x2="2"
            y2={beamHeight}
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="2"
          />
          
          {/* Animated progress line */}
          <motion.line
            x1="2"
            y1="0"
            x2="2"
            y2={beamHeight}
            stroke="url(#beamGradient)"
            strokeWidth="3"
            filter="url(#glow)"
            style={{
              pathLength: pathLength
            }}
            strokeDasharray={`${beamHeight} ${beamHeight}`}
            strokeDashoffset={useTransform(pathLength, [0, 1], [beamHeight, 0])}
          />
        </svg>
        
        {/* Modern animated indicator */}
        <motion.div
          className="absolute w-4 h-4 rounded-full shadow-xl"
          style={{
            left: '-6px',
            top: useTransform(scrollYProgress, [0, 1], [0, beamHeight - 16]),
            background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.4)'
          }}
        >
          {/* Inner glow dot */}
          <div className="absolute inset-1 bg-white rounded-full opacity-80" />
          <div className="absolute inset-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full" />
        </motion.div>
        
        {/* Pulse effect */}
        <motion.div
          className="absolute w-6 h-6 rounded-full border-2 border-blue-400"
          style={{
            left: '-10px',
            top: useTransform(scrollYProgress, [0, 1], [-4, beamHeight - 20]),
            opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.2, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content with proper spacing */}
      <div className="pl-56 md:pl-72 lg:pl-88">
        {children}
      </div>
    </div>
  );
};