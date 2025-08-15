'use client';

import { motion } from 'framer-motion';
import { Calendar, Briefcase, TrendingUp } from 'lucide-react';

export default function Experience() {
  const achievements = [
    "Delivered over 60 features and system improvements, contributing 61,000+ lines of tested, documented, and maintainable code that met professional standards for security and performance.",
    "Optimized database operations, slashing query execution time from 3 seconds to under 0.5 seconds.",
    "Elevated code reliability by establishing an automated testing framework that increased test coverage from 40% to 85%, proactively preventing production issues.",
    "Boosted critical system responsiveness by up to 600%, directly improving user satisfaction on the core data analytics platform",
    "Spearheaded an intuitive query management system, enabling users to write, save, and analyze complex queries, and created responsive visualizations to make technical data accessible to non-technical users",
    "Engineered seamless data flow across the platform by integrating multiple disparate services and databases."
  ];

  return (
    <section className="py-12 xs:py-16 sm:py-20 lg:py-32 relative flex justify-end min-h-[480px] xs:min-h-[580px]">
      <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-8 lg:px-16">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 xs:mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 xs:gap-4 mb-4 xs:mb-6 min-h-16 xs:min-h-20">
            <div className="p-2 xs:p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30">
              <Briefcase className="w-5 h-5 xs:w-6 xs:h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>
        </motion.div>

        {/* Enhanced Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          {/* Main Card */}
          <div className="relative p-4 xs:p-6 sm:p-8 lg:p-12">
            
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 xs:gap-6 mb-6 xs:mb-8">
              <div className="space-y-3 xs:space-y-4 text-center md:text-left">
                <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                  Full-Stack Software Engineering Intern
                </h3>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 xs:gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 xs:gap-3 justify-center md:justify-start">
                    <div className="p-1.5 xs:p-2 bg-blue-500/20 rounded-lg">
                      <TrendingUp className="w-4 h-4 xs:w-5 xs:h-5 text-blue-400" />
                    </div>
                    <span className="text-lg xs:text-xl font-semibold text-blue-400">Trading Studio</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 xs:gap-2 text-slate-400 justify-center md:justify-start">
                    <Calendar className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                    <span className="font-medium text-sm xs:text-base">April 2025 – August 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="space-y-4 xs:space-y-6">
              <div className="flex items-center gap-2 xs:gap-3 mb-4 xs:mb-6">
                <div className="w-6 xs:w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                <h4 className="text-base xs:text-lg font-semibold text-slate-200">Key Achievements</h4>
              </div>
              
              <div className="grid gap-3 xs:gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group/item flex items-start gap-3 xs:gap-4 p-3 xs:p-4 rounded-xl hover:bg-slate-800/30 transition-all duration-300"
                  >
                    {/* Enhanced Bullet Point */}
                    <div className="flex-shrink-0 mt-1.5 xs:mt-2">
                      <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transform group-hover/item:scale-125 transition-transform duration-300"></div>
                    </div>
                    
                    {/* Achievement Text */}
                    <p className="text-md xs:text-base text-slate-300 max-w-[350px] xs:max-w-[400px] sm:max-w-[500px] lg:max-w-6xl leading-relaxed group-hover/item:text-slate-200 transition-colors duration-300">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}