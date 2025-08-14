'use client';

import { SimpleTracingBeam } from '@/components/ui/SimpleTracingBeam';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

export default function ExperienceProjects() {
  return (
    <div className='min-h-[1300px]'>
    <SimpleTracingBeam>
      <Experience />
      <Projects />
    </SimpleTracingBeam>
    </div>
  );
}