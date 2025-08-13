'use client';

import { motion } from 'framer-motion';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { FloatingDock } from './ui/FloatingDock';

interface ContactLink {
  title: string;
  icon: React.ReactNode;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
}

export default function ContactCapsule() {

  const contactLinks: ContactLink[] = [
    {
      title: "X (Twitter)",
      icon: <FaXTwitter size={28} className="text-slate-200" />,
      href: "https://x.com/gauravmehta043"
    },
    {
      title: "GitHub",
      icon: <Github size={28} className="text-slate-200" />,
      href: "https://github.com/gaurav-mehta19"
    },
    {
      title: "LinkedIn",
      icon: <Linkedin size={28} className="text-slate-200" />,
      href: "https://www.linkedin.com/in/gaurav-mehta-286071247"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <FloatingDock
        items={contactLinks}
        desktopClassName=""
        mobileClassName=""
      />
    </motion.div>
  );
}