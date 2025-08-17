
'use client';

import dynamic from 'next/dynamic';

// Keep Hero as critical above-the-fold content
import Hero from '../components/Hero';

// Dynamic imports for non-critical components
const ExperienceProjects = dynamic(() => import('../components/ExperienceProjects'), {
  loading: () => <div className="h-96 bg-slate-900/50 animate-pulse rounded-lg" />,
});

const VerticalFloatingDock = dynamic(() => import('../components/ui/VerticalFloatingDock').then(mod => ({ default: mod.VerticalFloatingDock })), {
  ssr: false,
});

const BlankSpace = dynamic(() => import('../components/BlankSpace'), {
  loading: () => <div className="h-24" />,
});

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <ExperienceProjects />
      <BlankSpace />

      <VerticalFloatingDock />
    </main>
  );
}
