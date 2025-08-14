'use client';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface Skill {
  name: string;
}

export default function TechnicalSkills() {
  const skills: Skill[] = [
    { name: 'C++' },
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
  const containerVariants: Variants = {
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

  const skillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0
    }
  };

  return (
    <section className="py-16 px-8  md:px-16 bg-transparent min-h-96 flex flex-col items-center justify-start ">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-bold text-white min-h-[3rem] ml-10"
          >
            Skills
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25
          }}
          className="flex flex-wrap gap-4 md:gap-6"
        >
          {skills.map((skill) => (
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
              <div className="relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r min-h-10 min-w-40 flex  items-center justify-center backdrop-blur-sm border border-slate-600/60 rounded-lg hover:border-slate-500/80 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl">

                {/* Text */}
                <span className="relative z-10 text-sm md:text-base font-medium text-slate-100 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}