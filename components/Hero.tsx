'use client';

import { motion } from 'framer-motion';
import { GridBackground } from './ui/GridBackground';
import { SimpleTypewriter } from './ui/CyclingTypewriter';
import Image from 'next/image';


export default function Hero() {
  const titles = [
    "I'm a Full Stack Developer",
  ];

  return (
    <GridBackground className="h-[65vh]">
      <section className="h-[65vh] flex items-center justify-center px-8 md:px-16 relative overflow-hidden">
        
        <div className="w-full max-w-7xl mx-auto py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20 items-center h-full">
            
            {/* Left Content - Takes 2 columns for more space */}
            <div className="space-y-8 md:space-y-12 lg:space-y-16 flex flex-col justify-center lg:col-span-2 pl-4 md:pl-8 lg:pl-12">
              {/* Enhanced Name Section */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Main name with stunning styling */}
                <div className="relative z-30">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl min-h-32 font-bold leading-tight whitespace-nowrap relative">
                    {/* Primary text with gradient */}
                    <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent filter drop-shadow-lg">
                      Gaurav
                    </span>
                    {/* Space between names */}
                    {' '}
                    <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent filter drop-shadow-lg">
                      Mehta
                    </span>
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
                <div className="text-xl md:text-2xl lg:text-3xl font-medium min-h-[3.5rem] mt-4 md:mt-6 relative z-20">
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

              {/* Description */}
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl min-h-32 py-4 md:py-6 mt-6 md:mt-8">
                I&apos;m Full Stack Developer skilled in React, Node.js, and Next.js, with a 
                strong passion for building real-world, impactful solutions using modern 
                web technologies. Check out my projects and skills.
              </p>

              {/* Simple CTA Button */}
              <div className="pt-8 md:pt-12 lg:pt-16">
                <a
                  href="https://drive.google.com/file/d/1OGo8xC55acupy1ga8TIWbcsybKvlJxjr/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    className="min-h-12 min-w-52  border border-slate-600/30 bg-gray-300  text-black font-semibold text-lg backdrop-blur-sm rounded-lg hover:border-slate-500/80 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    Download Resume
                  </button>
                </a>
              </div>
            </div>

            {/* Right Image - Takes 1 column */}
            <motion.div 
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-center lg:justify-center lg:col-span-1"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <Image
                  src="/comp2.webp"
                  alt="Profile"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </GridBackground>
  );
}