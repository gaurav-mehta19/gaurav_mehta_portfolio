'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CustomButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  target?: '_blank' | '_self';
  rel?: string;
}

export function CustomButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  target,
  rel
}: CustomButtonProps) {
  
  const baseStyles = "relative inline-flex items-center justify-center font-semibold transition-all duration-300 overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-blue-500/25 border-2 border-blue-400/20 hover:border-blue-400/40",
    secondary: "bg-slate-800/60 hover:bg-slate-700/60 text-white border border-slate-600/50 hover:border-slate-500/60 backdrop-blur-md shadow-xl hover:shadow-2xl",
    outline: "bg-transparent border-2 border-slate-400/30 hover:border-slate-300/60 text-slate-200 hover:text-white backdrop-blur-sm hover:bg-slate-800/20"
  };
  
  const sizes = {
    sm: "px-6 py-3 text-sm rounded-lg",
    md: "px-8 py-4 text-base rounded-xl",
    lg: "px-12 py-5 text-xl rounded-2xl"
  };
  
  const hoverEffects = {
    primary: "hover:scale-110",
    secondary: "hover:scale-105", 
    outline: "hover:scale-105"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${hoverEffects[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`;

  const buttonContent = (
    <>
      {/* Animated background shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
      
      {/* Glow effect */}
      {variant === 'primary' && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
      )}
      
      {variant === 'secondary' && (
        <div className="absolute inset-0 rounded-xl bg-slate-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
      )}
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      {/* Ripple effect on click */}
      <div className="absolute inset-0 rounded-full scale-0 group-active:scale-100 group-active:opacity-20 bg-white transition-all duration-200"></div>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={combinedClassName}
        whileHover={{ scale: variant === 'primary' ? 1.1 : 1.05 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      whileHover={{ scale: variant === 'primary' ? 1.1 : 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 30
      }}
    >
      {buttonContent}
    </motion.button>
  );
}