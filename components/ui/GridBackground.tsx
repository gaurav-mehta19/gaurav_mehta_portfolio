'use client';

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface GridBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function GridBackground({ children, className = "" }: GridBackgroundProps) {
  const [hoveredCell, setHoveredCell] = useState<{x: number, y: number} | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const gridX = Math.floor(x / 50) * 50;
    const gridY = Math.floor(y / 50) * 50;
    
    setHoveredCell({ x: gridX, y: gridY });
  };

  const handleMouseLeave = () => {
    setHoveredCell(null);
  };

  return (
    <div 
      className={`relative w-full ${className}`} 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Static Grid Pattern Background */}
      <div className="absolute inset-0 grid-background pointer-events-none" />
      
      {/* Radial gradient overlay for fade effect */}
      <div 
        className="pointer-events-none absolute inset-0 flex items-center justify-center z-[1]"
        style={{
          background: 'var(--primary-bg)',
          maskImage: 'radial-gradient(ellipse_at_center, transparent 20%, black)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black)'
        }}
      />

      {/* Grid cell highlight with smooth animation */}
      <AnimatePresence>
        {hoveredCell && (
          <motion.div
            key={`${hoveredCell.x}-${hoveredCell.y}`}
            className="absolute bg-slate-400/15 pointer-events-none z-[2]"
            initial={{ 
              opacity: 0, 
              scale: 0.8,
              x: hoveredCell.x,
              y: hoveredCell.y,
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: hoveredCell.x,
              y: hoveredCell.y,
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.9,
              transition: {
                type: "tween",
                duration: 1.5,
                ease: "easeOut"
              }
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
              mass: 0.8,
            }}
            style={{
              width: 50,
              height: 50,
            }}
          />
        )}
      </AnimatePresence>

      <div className="relative z-[10]">
        {children}
      </div>
    </div>
  );
}