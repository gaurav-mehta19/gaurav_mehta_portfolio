'use client';

import { SimpleTracingBeam } from '@/components/ui/SimpleTracingBeam';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

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