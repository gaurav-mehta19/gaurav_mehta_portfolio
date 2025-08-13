'use client';

import { motion } from 'framer-motion';
import { Code, Database, Server, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  icon: string;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  columns: string;
}

export default function TechnicalSkills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: <Code className="text-blue-400" size={24} />,
      skills: [
        { name: 'C++', icon: '🔧', color: 'text-blue-500' },
        { name: 'C', icon: '⚙️', color: 'text-slate-400' },
        { name: 'SQL', icon: '🗃️', color: 'text-orange-500' },
        { name: 'JavaScript', icon: '🟨', color: 'text-yellow-500' },
        { name: 'TypeScript', icon: '🔷', color: 'text-blue-600' },
        { name: 'Go', icon: '🐹', color: 'text-cyan-400' }
      ],
      columns: "grid-cols-3 md:grid-cols-6"
    },
    {
      title: "Frontend Technologies",
      icon: <span className="text-green-400 text-2xl">🎨</span>,
      skills: [
        { name: 'React.js', icon: '⚛️', color: 'text-cyan-400' },
        { name: 'Next.js', icon: '▲', color: 'text-white' },
        { name: 'Tailwind CSS', icon: '🎨', color: 'text-teal-400' },
        { name: 'Recoil', icon: '🔄', color: 'text-purple-400' }
      ],
      columns: "grid-cols-2 md:grid-cols-4"
    },
    {
      title: "Backend Technologies",
      icon: <Server className="text-orange-400" size={24} />,
      skills: [
        { name: 'Node.js', icon: '🟢', color: 'text-green-500' },
        { name: 'Express', icon: '🚀', color: 'text-slate-300' },
        { name: 'Hono', icon: '🔥', color: 'text-red-400' },
        { name: 'Cloudflare Workers', icon: '☁️', color: 'text-orange-400' }
      ],
      columns: "grid-cols-2 md:grid-cols-4"
    }
  ];

  const toolCategories: SkillCategory[] = [
    {
      title: "Databases & ORMs",
      icon: <Database className="text-blue-500" size={24} />,
      skills: [
        { name: 'PostgreSQL', icon: '🐘', color: 'text-blue-500' },
        { name: 'MongoDB', icon: '🍃', color: 'text-green-500' },
        { name: 'Prisma', icon: '🔺', color: 'text-indigo-400' }
      ],
      columns: "grid-cols-3"
    },
    {
      title: "Tools & Concepts",
      icon: <Wrench className="text-purple-400" size={24} />,
      skills: [
        { name: 'Docker', icon: '🐳', color: 'text-blue-400' },
        { name: 'Git', icon: '📁', color: 'text-orange-500' },
        { name: 'Turborepo', icon: '🔄', color: 'text-red-400' }
      ],
      columns: "grid-cols-3"
    }
  ];

  const SkillCard = ({ category, delay }: { category: SkillCategory; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
    >
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        {category.icon}
        {category.title}
      </h3>
      <div className={`grid ${category.columns} gap-6`}>
        {category.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay + (index * 0.1) }}
            className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-slate-700/50 transition-colors cursor-pointer"
          >
            <div className="text-2xl">{skill.icon}</div>
            <span className={`font-semibold ${skill.color} text-sm`}>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 px-8 md:px-16 pb-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Modern technologies and frameworks I work with
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} delay={index * 0.1} />
          ))}

          <div className="grid lg:grid-cols-2 gap-8">
            {toolCategories.map((category, index) => (
              <SkillCard key={category.title} category={category} delay={0.3 + (index * 0.1)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}