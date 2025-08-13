'use client';

import React from "react";

interface GridBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function GridBackground({ children, className = "" }: GridBackgroundProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-background" />
      
      {/* Radial gradient overlay for fade effect */}
      <div 
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        style={{
          background: 'var(--primary-bg)',
          maskImage: 'radial-gradient(ellipse_at_center, transparent 20%, black)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black)'
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}