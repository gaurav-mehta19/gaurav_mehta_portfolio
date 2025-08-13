
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import TechnicalSkills from '../components/TechnicalSkills';
import ContactCapsule from '../components/ContactCapsule';

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <TechnicalSkills />
      <ContactCapsule />
    </main>
  );
}
