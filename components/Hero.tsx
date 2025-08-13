'use client';

import { motion } from 'framer-motion';
import { GridBackground } from './ui/GridBackground';
import { SimpleTypewriter } from './ui/CyclingTypewriter';
import { Spotlight } from './ui/SpotLight';


export default function Hero() {
  const titles = [
    "I'm a Full Stack Developer",
  ];

  return (
    <GridBackground className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center px-8 md:px-16 relative overflow-hidden">
        {/* Spotlight Effect */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
        
        <div className="w-full max-w-7xl mx-auto py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20 items-center min-h-[80vh]">
            
            {/* Left Content - Takes 2 columns for more space */}
            <div className="space-y-8 h-[600px] md:space-y-12 lg:space-y-16 flex flex-col justify-center lg:col-span-2 pl-4 md:pl-8 lg:pl-12">
              {/* Name with Spotlight Effect */}
              <div className="relative">
                <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl min-h-32 font-bold leading-tight whitespace-nowrap relative z-20 bg-gradient-to-r from-white via-blue-100 to-slate-200 bg-clip-text text-transparent drop-shadow-2xl">
                  Gaurav Mehta
                </div>
                
                {/* Additional spotlight glow behind name */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-transparent rounded-2xl blur-3xl opacity-60 z-10"></div>
              </div>
              
              {/* Simple Typewriter */}
              <div className="text-xl md:text-2xl lg:text-3xl font-medium min-h-[3.5rem] mt-4 md:mt-6">
                <SimpleTypewriter 
                  texts={titles}
                  className="text-left"
                />
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl min-h-36 py-4 md:py-6 mt-6 md:mt-8">
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
                    className="min-h-12 min-w-52 bg-slate-700/30 hover:bg-slate-600/40 border border-slate-600/30 hover:border-slate-500/50 text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
                  >
                    Download Resume
                  </button>
                </a>
              </div>
            </div>

            {/* Right Photo Circle - Takes 1 column */}
            <motion.div 
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-center lg:justify-center lg:col-span-1"
            >
              <div className="relative">
                {/* Main photo container */}
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border-2 border-slate-400/20 flex items-center justify-center overflow-hidden shadow-2xl">
                  <div className="w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden border-4 border-white/10">
                    <img
                      src="/ChatGPT%20Image%20Mar%2029,%202025,%2009_01_11%20AM.png"
                      alt="ChatGPT Generated"
                      className="w-full h-full object-cover object-center"
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