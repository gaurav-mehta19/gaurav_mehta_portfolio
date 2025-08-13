'use client';

import { motion } from 'framer-motion';
import { GridBackground } from './ui/GridBackground';
import { SimpleTypewriter } from './ui/CyclingTypewriter';
import { Spotlight } from './ui/SpotLight';
import { CustomButton } from './ui/CustomButton';

export default function Hero() {
  const titles = [
    "Full Stack Developer",
    "Backend Developer",
    "Frontend Developer"
  ];

  return (
    <GridBackground className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center px-8 md:px-16 relative overflow-hidden">
        {/* Spotlight Effect */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
        
        <div className="w-full max-w-7xl mx-auto py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center min-h-[60vh]">
            
            {/* Left Content - Takes 2 columns for more space */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-24 md:space-y-32 lg:space-y-40 xl:space-y-48 flex flex-col justify-center lg:col-span-2"
            >
              {/* Name with Spotlight Effect */}
              <div className="relative">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight whitespace-nowrap relative z-20 bg-gradient-to-r from-white via-blue-100 to-slate-200 bg-clip-text text-transparent drop-shadow-2xl"
                >
                  Gaurav Mehta
                </motion.h1>
                
                {/* Additional spotlight glow behind name */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-transparent rounded-2xl blur-3xl opacity-60 z-10"></div>
              </div>
              
              {/* Simple Typewriter */}
              <div className="text-xl md:text-2xl lg:text-3xl font-medium min-h-[2.5rem]">
                <SimpleTypewriter 
                  texts={titles}
                  className="text-left"
                />
              </div>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl px-8 md:px-12 lg:px-16 py-6 md:py-8 bg-slate-800/20 backdrop-blur-sm rounded-2xl border border-slate-700/30"
              >
                I&apos;m Full Stack Developer skilled in React, Node.js, and Next.js, with a 
                strong passion for building real-world, impactful solutions using modern 
                web technologies. Check out my projects and skills.
              </motion.p>

              {/* Beautiful CTA Button */}
              <div className="pt-20 md:pt-28 lg:pt-32 xl:pt-40">
                <CustomButton
                  href="https://drive.google.com/file/d/1OGo8xC55acupy1ga8TIWbcsybKvlJxjr/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                  className="text-base font-medium px-8 py-4 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 hover:from-slate-600 hover:via-slate-700 hover:to-slate-800 shadow-xl hover:shadow-2xl border border-slate-600/50 hover:border-slate-500/60 rounded-2xl backdrop-blur-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </CustomButton>
              </div>
            </motion.div>

            {/* Right Photo Circle - Takes 1 column */}
            <motion.div 
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-center lg:justify-center lg:col-span-1"
            >
              <div className="relative">
                {/* Main photo container */}
                <div className="w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border-2 border-slate-400/20 flex items-center justify-center overflow-hidden shadow-2xl">
                  <div className="w-[360px] h-[360px] rounded-full overflow-hidden border-4 border-white/10">
                    <img
                      src="/gaurav-photo.jpg"
                      alt="Gaurav Mehta"
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't load
                        const target = e.target as HTMLImageElement;
                        target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='360' height='360' viewBox='0 0 360 360'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23667eea'/%3E%3Cstop offset='100%25' stop-color='%23764ba2'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Ctext x='50%25' y='50%25' font-size='64' fill='white' text-anchor='middle' dy='.3em' font-family='Arial, sans-serif'%3EGM%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                </div>
                
                {/* Enhanced decorative rings */}
                <div className="absolute -inset-6 rounded-full border-2 border-blue-400/30 animate-pulse"></div>
                <div className="absolute -inset-10 rounded-full border border-purple-500/20 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute -inset-14 rounded-full border border-blue-300/10"></div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </GridBackground>
  );
}