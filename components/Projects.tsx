'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';


interface Project {
  title: string;
  subtitle: string;
  description: string;
  github: string;
  demo: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Payment Wallet (InstantPay)",
      subtitle: "Full-Stack Fintech Platform",
      description: "Of course. Here is the summary rewritten from a first-person perspective:I engineered a full-stack fintech monorepo using Turborepo to manage a Next.js application and multiple microservices. The core of this project was a secure P2P payment system featuring atomic transactions, which were made reliable and ACID-compliant using Prisma and PostgreSQL.I also built a robust security layer with NextAuth.js, JWTs, and Zod validation, alongside a production-ready Express.js webhook service for processing real-time transaction updates. On the frontend, I focused on performance by creating optimized React components, managing state with Recoil, and visualizing data with Recharts.",
      github: "https://github.com/gaurav-mehta19/InstantPay",
      demo: "https://instant-pay-user-app-gaurav-mehtas-projects-7afab221.vercel.app"
    },
    {
      title: "Medium Website Clone",
      subtitle: "Full-Stack Blog Platform",
      description: "Of course, here is the summary in the first person:I developed a full-stack, serverless Medium clone using React 18 and TypeScript for the frontend and Cloudflare Workers for the backend, all connected to a PostgreSQL database.I engineered a scalable, serverless architecture on Cloudflare's global edge network, featuring RESTful APIs, the Prisma ORM, and connection pooling for high performance. The application ensures enterprise-grade security with JWT authentication, bcrypt.js password hashing, and robust XSS protection. For an enhanced user experience, I implemented custom state management with Recoil, created a shared NPM package for TypeScript types, and built features like protected routing, a rich text editor, image uploads, and skeleton loading states",
      github: "https://github.com/gaurav-mehta19/Blog-website",
      demo: "https://blog-website-hlzm.vercel.app/"
    }
  ];

  const videos = [
    { src: "/instantPay.mp4", title: "InstantPay Demo" },
    { src: "/medium_blog.mp4", title: "Medium Blog Demo" }
  ];

  return (
    <section className="py-24 px-8 md:px-16 flex justify-end items-center">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl min-h-20 flex items-center justify-start font-bold text-white mb-4">Featured Projects</h2>

        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-transparent backdrop-blur-sm  rounded-2xl p-8 hover:border-slate-600 transition-colors"
            >
              <div className="space-y-6 max-w-5xl min-h-[380px] flex flex-col items-center justify-start">

                 <div className="w-full flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-blue-400">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" w-32 h-10 flex justify-center items-center gap-2 px-4 py-2 bg-white text-slate-900 rounded-lg text-md font-medium hover:bg-slate-100 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-32 h-10 flex justify-center items-center gap-2 px-4 py-2 border border-slate-600 text-white rounded-lg text-sm font-medium hover:border-slate-500 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
                </div>


                <div className="w-full mb-6 flex justify-center gap-10 items-center">
                   <p className="text-slate-300 max-w-[600px] leading-relaxed">
                  {project.description}
                </p>     
                  <video
                    className="w-[400px] h-96 md:h-auto  object-cover rounded-xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src={videos[index]?.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                    
                </div>

               

              
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}