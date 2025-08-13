'use client';

import { motion } from 'framer-motion';
import { GithubIcon as Github, ExternalLink } from 'lucide-react';

interface ProjectFeature {
  name: string;
  color: string;
}

interface Project {
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  features: ProjectFeature[];
  github: string;
  demo: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Payment Wallet (InstantPay)",
      subtitle: "Full-Stack Fintech Platform",
      description: "Full-stack fintech monorepo with 3 microservices. Features secure P2P payment system with atomic transactions and real-time money transfers using Next.js and Turborepo.",
      emoji: "💳",
      features: [
        { name: "Prisma ACID compliance", color: "text-green-400" },
        { name: "NextAuth.js auth", color: "text-green-400" },
        { name: "PostgreSQL schema", color: "text-green-400" },
        { name: "Production webhooks", color: "text-green-400" },
        { name: "React optimization", color: "text-green-400" },
        { name: "Recoil state mgmt", color: "text-green-400" }
      ],
      github: "https://github.com/gaurav-mehta19/InstantPay",
      demo: "https://instant-pay-user-app-gaurav-mehtas-projects-7afab221.vercel.app"
    },
    {
      title: "Medium Website Clone",
      subtitle: "Full-Stack Blog Platform",
      description: "Medium clone built with React 18/TypeScript and Cloudflare Workers backend. Features JWT authentication, rich text editor, and enterprise-grade security.",
      emoji: "📝",
      features: [
        { name: "Cloudflare Workers", color: "text-purple-400" },
        { name: "Enterprise security", color: "text-purple-400" },
        { name: "Rich text editor", color: "text-purple-400" },
        { name: "Global edge deploy", color: "text-purple-400" },
        { name: "Recoil state mgmt", color: "text-purple-400" },
        { name: "TypeScript NPM", color: "text-purple-400" }
      ],
      github: "https://github.com/gaurav-mehta19/Blog-website",
      demo: "https://blog-website-hlzm.vercel.app/"
    }
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Innovative solutions built with modern technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-colors"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className={project.title.includes('InstantPay') ? 'text-blue-400' : 'text-purple-400'}>
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="text-3xl">{project.emoji}</div>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">
                    {project.title.includes('InstantPay') ? 'Key Features' : 'Technical Highlights'}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-slate-400">
                        <span className={`${feature.color} text-xs`}>●</span>
                        <span>{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-100 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-slate-600 text-white rounded-lg text-sm font-medium hover:border-slate-500 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}