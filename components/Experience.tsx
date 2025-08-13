'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function Experience() {
  const achievements = [
    "Delivered 60+ features with 61,000+ lines of tested code",
    "Boosted system responsiveness by up to 600%",
    "Reduced query time from 3s to under 0.5s"
  ];

  const innovations = [
    "Increased test coverage from 40% to 85%",
    "Built query management with visualizations", 
    "Integrated multiple services and databases"
  ];

  return (
    <section className="py-24 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Building scalable solutions with cutting-edge technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-xl font-bold text-white">
                TS
              </div>
            </div>
            
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Full-Stack Software Engineering Intern
                </h3>
                <p className="text-xl text-blue-400 mb-3">Trading Studio</p>
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar size={16} />
                  April 2025 – August 2025
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Key Achievements</h4>
                  <ul className="space-y-3 text-slate-300">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-green-400 mt-1 text-sm">●</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Impact & Innovations</h4>
                  <ul className="space-y-3 text-slate-300">
                    {innovations.map((innovation, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1 text-sm">●</span>
                        <span>{innovation}</span>
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