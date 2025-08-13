'use client';

import { motion } from 'framer-motion';

interface Skill {
  name: string;
}

export default function TechnicalSkills() {
  const skills: Skill[] = [
    { name: 'C++' },
    { name: 'C' },
    { name: 'SQL' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'Go' },
    { name: 'React.js' },
    { name: 'Next.js' },
    { name: 'Tailwind CSS' },
    { name: 'Recoil' },
    { name: 'Node.js' },
    { name: 'Express' },
    { name: 'Hono' },
    { name: 'Cloudflare Workers' },
    { name: 'PostgreSQL' },
    { name: 'MongoDB' },
    { name: 'Prisma' },
    { name: 'Docker' },
    { name: 'Git' },
    { name: 'Turborepo' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.08
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };

  return (
    <section className="py-16 px-8 md:px-16 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-2"
          >
            Skills
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              whileHover={{ 
                scale: 1.05, 
                transition: { duration: 0.2 } 
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-slate-700/90 via-slate-800/80 to-slate-900/90 backdrop-blur-sm border border-slate-600/60 rounded-2xl hover:border-slate-500/80 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl">
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-600/30 via-slate-500/20 to-slate-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Text */}
                <span className="relative z-10 text-sm md:text-base font-medium text-slate-100 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
                
                {/* Animated background on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-slate-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}