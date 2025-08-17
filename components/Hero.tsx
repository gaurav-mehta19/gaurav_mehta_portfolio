'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { GridBackground } from './ui/GridBackground';
import { SimpleTypewriter } from './ui/CyclingTypewriter';
import Image from 'next/image';

const Hero = memo(function Hero() {
  const titles = useMemo(() => [
    "I'm a Full Stack Developer",
  ], []);

  const motionVariants = useMemo(() => ({
    nameVariant: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8 }
    },
    typewriterVariant: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: 0.3, duration: 0.8 }
    },
    summaryVariant: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.6, duration: 0.8 }
    },
    buttonVariant: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.8, duration: 0.8 }
    },
    imageVariant: {
      initial: { opacity: 0, x: 50, scale: 0.8 },
      animate: { opacity: 1, x: 0, scale: 1 },
      transition: { delay: 0.4, duration: 0.8 }
    }
  }), []);

  return (
    <GridBackground className="min-h-[90vh] sm:min-h-[80vh] md:min-h-[70vh] lg:h-[65vh]">
      <section className="min-h-[90vh] sm:min-h-[80vh] md:min-h-[70vh] lg:h-[65vh] flex items-center justify-center px-3 sm:px-4 md:px-8 lg:px-16 relative overflow-hidden">
        
        <div className="w-full max-w-7xl mx-auto py-6 sm:py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-20 items-center h-full">
            
            {/* Left Content - Takes 2 columns for more space */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-12 flex flex-col justify-center lg:col-span-2 text-center lg:text-left px-2 sm:px-4 lg:pl-8">
              {/* Enhanced Name Section */}
              <motion.div 
                {...motionVariants.nameVariant}
                className="relative"
              >
                {/* Main name with consistent styling */}
                <div className="relative z-30">
                  <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl min-h-12 xs:min-h-16 sm:min-h-24 lg:min-h-32 font-bold leading-tight relative bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                    Gaurav Mehta
                  </h1>
                </div>
              </motion.div>
              
              {/* Enhanced Typewriter Section */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative"
              >
                <div className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium min-h-10 xs:min-h-12 sm:min-h-14 lg:min-h-[3.5rem] mt-3 xs:mt-4 md:mt-6 relative z-20">
                  <div className="relative inline-block">
                    <SimpleTypewriter 
                      texts={titles}
                      className="text-left bg-gradient-to-r from-slate-200 via-blue-200 to-slate-300 bg-clip-text text-transparent"
                    />
                    {/* Subtle accent line */}
                    <div className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 w-full opacity-60"></div>
                  </div>
                </div>
                
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-lg blur-sm"></div>
              </motion.div>

              {/* Enhanced Summary Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative"
              >
                <div className="space-y-6">              
                  <div className="relative z-10 min-h-32 xs:min-h-36 sm:min-h-44 flex justify-center lg:justify-start">
                    <p className="text-sm xs:text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-[350px] xs:max-w-[400px] sm:max-w-[500px] lg:max-w-4xl">
                      <span className="text-blue-400 font-semibold">Full-Stack Software Engineer</span> specializing in building scalable and secure web applications. 
                      Proficient in the <span className="text-cyan-400 font-medium">MERN/PERN stack</span>, with expertise in{' '}
                      <span className="text-cyan-400 font-medium">Next.js</span>,{' '}
                      <span className="text-cyan-400 font-medium">TypeScript</span>, and serverless backends using{' '}
                      <span className="text-cyan-400 font-medium">Cloudflare Workers</span>. 
                      Demonstrated success in <span className="text-white font-semibold">optimizing database performance</span>,{' '}
                      <span className="text-white font-semibold">implementing robust security protocols</span>, and{' '}
                      <span className="text-white font-semibold">designing resilient, full-stack architectures</span> from the ground up.
                    </p>
                  </div>
                </div>
                
                {/* Subtle background accent */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-xl blur-lg"></div>
              </motion.div>

              {/* Animated CTA Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="pt-8 xs:pt-10 md:pt-12 lg:pt-16 flex justify-center lg:justify-start"
              >
                <a
                  href="https://drive.google.com/file/d/1OGo8xC55acupy1ga8TIWbcsybKvlJxjr/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="min-h-10 xs:min-h-12 min-w-44 xs:min-w-52 border border-slate-600/30 bg-white text-black font-medium text-sm xs:text-md backdrop-blur-sm rounded-lg hover:border-slate-500/80 hover:bg-white hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer shadow-lg transform flex items-center justify-center gap-2"
                  >
                    Download Resume
                    <svg 
                      className="w-4 h-4 xs:w-5 xs:h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </a>
              </motion.div>
            </div>

            {/* Enhanced Right Image - Takes 1 column */}
            <motion.div 
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-center lg:justify-center lg:col-span-1 relative order-first lg:order-last"
            >
              {/* Background Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Secondary Ring */}
                <div className="absolute w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 border border-cyan-400/10 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
                {/* Gradient Background */}
                <div className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-purple-500/10 rounded-full blur-3xl"></div>
              </div>
              
              {/* Main Image Container */}
              <div className="relative z-10 group">
                {/* Image Wrapper */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-2xl overflow-hidden">
                  {/* Enhanced Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20 rounded-2xl blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                  
                  {/* Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/comp2.webp"
                      alt="Gaurav Mehta - Full Stack Developer"
                      fill
                      className="object-contain rounded-2xl group-hover:scale-105 transition-transform duration-500"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-1/3 left-4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 shadow-xl">
                    <div className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </GridBackground>
  );
});

export default Hero;