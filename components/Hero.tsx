'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { GridBackground } from './ui/GridBackground';

export default function Hero() {
  return (
    <GridBackground className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center px-8 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
            >
              Gaurav Mehta
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-slate-400 font-light"
            >
              Full-Stack Software Engineer
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto"
            >
              Specializing in building scalable and secure web applications with the MERN/PERN stack, 
              Next.js, TypeScript, and serverless backends. Proven track record of optimizing database 
              performance and implementing robust security protocols.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <a
                href="https://drive.google.com/file/d/1OGo8xC55acupy1ga8TIWbcsybKvlJxjr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105"
              >
                <Download size={20} />
                View Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </GridBackground>
  );
}