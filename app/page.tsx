
import Hero from '../components/Hero';
import ExperienceProjects from '../components/ExperienceProjects';
// import TechnicalSkills from '../components/TechnicalSkills';
import { VerticalFloatingDock } from '../components/ui/VerticalFloatingDock';
import BlankSpace from '../components/BlankSpace';

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
