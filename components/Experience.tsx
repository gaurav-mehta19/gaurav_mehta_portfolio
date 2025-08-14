'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function Experience() {
  const achievements = [
    "Delivered over 60 features and system improvements, contributing 61,000+ lines of tested, documented, andmaintainable code that met professional standards for security and performance.",
    "Optimized database operations, slashing query execution time from 3 seconds to under 0.5 seconds.",
    "Elevated code reliability by establishing an automated testing framework that increased test coverage from 40%to 85%, proactively preventing production issues.",
    "Boosted critical system responsiveness by up to 600%, directly improving user satisfaction on the core dataanalytics platform",
    "Spearheaded an intuitive query management system, enabling users to write, save, and analyze complex queries,and created responsive visualizations to make technical data accessible to non-technical users",
    "Engineered seamless data flow across the platform by integrating multiple disparate services and databases."
  ];

  return (
    <section className="py-24 px-8 md:px-16 flex items-center justify-end min-h-96">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl min-h-20 flex flex-col justify-center font-bold text-white mb-4 text-start">Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-transparent backdrop-blur-sm rounded-2xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-lg md:text-xl min-h-10 font-bold text-white mb-2">
                  Full-Stack Software Engineering Intern
                </h3>
                <div className=' flex justify-start gap-40 min-h-10'>
                <p className="text-xl text-blue-400 mb-3">Trading Studio</p>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar size={16} />
                  April 2025 – August 2025
                </div>
                </div>
              </div>

              <div className=" max-w-5xl">
                <div className="space-y-4">
                  <ul className="space-y-3 text-slate-300">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-green-400 mt-1 text-sm">●</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}