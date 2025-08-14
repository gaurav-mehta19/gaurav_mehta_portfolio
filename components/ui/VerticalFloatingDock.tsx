'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

interface DockItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
}

export const VerticalFloatingDock: React.FC = () => {
  const dockItems: DockItem[] = [
    {
      id: 'x',
      icon: <FaXTwitter size={20} />,
      label: 'X (Twitter)',
      href: 'https://x.com/gauravmehta043',
      color: 'hover:bg-black'
    },
    {
      id: 'github',
      icon: <Github size={20} />,
      label: 'GitHub',
      href: 'https://github.com/gaurav-mehta19',
      color: 'hover:bg-gray-700'
    },
    {
      id: 'linkedin',
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gaurav-mehta-286071247',
      color: 'hover:bg-blue-600'
    },
    {
      id: 'resume',
      icon: <FileText size={20} />,
      label: 'Resume',
      href: 'https://drive.google.com/file/d/1OGo8xC55acupy1ga8TIWbcsybKvlJxjr/view?usp=sharing',
      color: 'hover:bg-green-600'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50"
    >
      <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-2xl">
        <div className="flex flex-col gap-3">
          {dockItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                relative group flex items-center justify-center
                w-12 h-12 rounded-xl transition-all duration-300
                text-white/70 hover:text-white
                bg-white/5 hover:bg-white/10 border border-white/10
                hover:scale-110 hover:shadow-lg
                ${item.color}
              `}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item.icon}
              
              {/* Tooltip */}
              <div className="
                absolute right-full mr-3 px-3 py-2
                bg-black/80 text-white text-sm rounded-lg
                opacity-0 group-hover:opacity-100
                pointer-events-none transition-opacity duration-300
                whitespace-nowrap backdrop-blur-sm
              ">
                {item.label}
                {/* Arrow */}
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-black/80" />
              </div>
            </motion.a>
          ))}
        </div>
        
        {/* Decorative glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/10 to-purple-500/10 opacity-50 pointer-events-none" />
      </div>
    </motion.div>
  );
};