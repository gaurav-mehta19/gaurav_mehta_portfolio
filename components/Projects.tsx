'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

// Simple inline video component for better reliability
const AutoplayVideo = ({ src, title, poster, className }: { src: string; title: string; poster?: string; className?: string }) => {
  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    video.play().catch(() => {
      // Autoplay blocked, this is normal on some browsers
    });
  };

  return (
    <div className={`relative ${className}`}>
      <video
        className="w-full h-auto object-cover rounded-xl"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={poster}
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
        {title}
      </div>
    </div>
  );
};

interface Project {
  title: string;
  subtitle: string;
  description: string;
  github: string;
  demo: string;
}

const Projects = memo(function Projects() {
  const projects: Project[] = useMemo(() => [
    {
      title: "Payment Wallet (InstantPay)",
      subtitle: "Full-Stack Fintech Platform",
      description: "I engineered a full-stack fintech monorepo using Turborepo to manage a Next.js application and multiple microservices. The core of this project was a secure P2P payment system featuring atomic transactions, which were made reliable and ACID-compliant using Prisma and PostgreSQL. I also built a robust security layer with NextAuth.js, JWTs, and Zod validation, alongside a production-ready Express.js webhook service for processing real-time transaction updates.",
      github: "https://github.com/gaurav-mehta19/InstantPay",
      demo: "https://instant-pay-user-app-gaurav-mehtas-projects-7afab221.vercel.app"
    },
    {
      title: "Medium Website Clone",
      subtitle: "Full-Stack Blog Platform",
      description: "I developed a full-stack, serverless Medium clone using React 18 and TypeScript for the frontend and Cloudflare Workers for the backend, all connected to a PostgreSQL database. I engineered a scalable, serverless architecture on Cloudflare's global edge network, featuring RESTful APIs, the Prisma ORM, and connection pooling for high performance with enterprise-grade security.",
      github: "https://github.com/gaurav-mehta19/Blog-website",
      demo: "https://blog-website-hlzm.vercel.app/"
    }
  ], []);

  const videos = useMemo(() => [
    { src: "/instantPay.mp4", title: "InstantPay Demo", poster: "/instantPay-poster.svg" },
    { src: "/medium_blog.mp4", title: "Medium Blog Demo", poster: "/medium_blog-poster.svg" }
  ], []);

  return (
    <section className="py-8 xs:py-12 sm:py-16 lg:py-32 relative flex justify-end min-h-[700px] xs:min-h-[800px]">
      <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-8 lg:px-16">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 xs:mb-8 sm:mb-12 lg:mb-20"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 xs:gap-4 mb-4 xs:mb-6 min-h-16 xs:min-h-20">
            <div className="p-2 xs:p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30">
              <Code2 className="w-5 h-5 xs:w-6 xs:h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-6 xs:space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Main Project Card */}
              <div className="relative p-4 xs:p-6 sm:p-8 lg:p-12 max-w-4xl sm:max-w-6xl min-h-[350px] xs:min-h-[550px]">
                
                {/* Project Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 xs:gap-6 mb-8 xs:mb-12 min-h-16 lg:mb-8">
                  <div className="space-y-3 xs:space-y-4 text-center md:text-left">
                    <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                      {project.title}
                    </h3>
                    <span className="text-lg xs:text-xl font-semibold text-blue-400">{project.subtitle}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 xs:gap-3 pt-1 xs:pt-2 justify-center lg:justify-start">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-28 xs:w-32 h-9 xs:h-10 flex justify-center items-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-2 bg-white text-slate-900 rounded-lg text-sm xs:text-md font-medium hover:bg-slate-100 transition-colors"
                    >
                      <Github size={14} className="xs:w-4 xs:h-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-28 xs:w-32 h-9 xs:h-10 flex justify-center items-center gap-1.5 xs:gap-2 px-3 xs:px-4 py-2 border border-slate-600 text-white rounded-lg text-sm font-medium hover:border-slate-500 transition-colors"
                    >
                      <ExternalLink size={14} className="xs:w-4 xs:h-4" />
                      Demo
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4 xs:space-y-6">
                  
                  <div className="w-full mb-4 xs:mb-6 flex flex-col lg:flex-row justify-center gap-4 xs:gap-6 lg:gap-40 items-center">
                    <div className="order-2 lg:order-1">
                      <div className='flex items-center gap-1.5 xs:gap-2 mb-3 xs:mb-4'>
                        <div className="w-6 xs:w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                        <h4 className="text-base xs:text-lg font-semibold text-slate-200">Project Overview</h4>
                      </div>
                      <p className="text-md xs:text-base text-slate-300 max-w-[350px] xs:max-w-[400px] sm:max-w-[500px] lg:max-w-[700px] leading-relaxed">
                        {project.description}
                      </p>     
                    </div>
                    <AutoplayVideo
                      src={videos[index]?.src}
                      title={videos[index]?.title}
                      poster={videos[index]?.poster}
                      className="order-1 lg:order-2 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] lg:w-[500px]"
                    />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;