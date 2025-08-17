'use client';

import dynamic from 'next/dynamic';

const SimpleTracingBeam = dynamic(() => import('@/components/ui/SimpleTracingBeam').then(mod => ({ default: mod.SimpleTracingBeam })), {
  loading: () => <div className="w-full min-h-screen" />,
});

const Experience = dynamic(() => import('@/components/Experience'), {
  loading: () => <div className="h-64 bg-slate-900/30 rounded-lg animate-pulse" />,
});

const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="h-64 bg-slate-900/30 rounded-lg animate-pulse" />,
});

export default function ExperienceProjects() {
  return (
    <div>
    <SimpleTracingBeam>
      <Experience />
      <Projects />
    </SimpleTracingBeam>
    </div>
  );
}