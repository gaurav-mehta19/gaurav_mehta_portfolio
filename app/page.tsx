import Link from "next/link";
import Container from "@/components/portfolio/Container";
import FooterLinks from "@/components/portfolio/FooterLinks";
import ProjectCard from "@/components/portfolio/ProjectCard";
import RichText from "@/components/portfolio/RichText";
import Section from "@/components/portfolio/Section";
import ThemeToggle from "@/components/portfolio/ThemeToggle";
import { portfolioData } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main>
      <Container>
        <header className="header">
          <div>
            <h1 className="name-heading">
              {portfolioData.name}
              <span className="name-dot">.</span>
            </h1>
            <p className="role">{portfolioData.role}</p>
            <p className="availability">{portfolioData.availability}</p>
            <p className="summary">{portfolioData.summary}</p>
          </div>
          <div className="header-actions">
            <ThemeToggle />
            <Link
              href={portfolioData.resumeHref}
              className="pill-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.email}`}
              className="pill-link pill-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch
            </a>
          </div>
        </header>

        <Section title="Experience">
          <div className="timeline">
            {portfolioData.experience.map((item) => (
              <div
                key={`${item.company}-${item.role}-${item.period}`}
                className="timeline-item"
              >
                <article className="exp-card">
                  <div className="exp-head">
                    <h3 className="exp-role">
                      {item.role}
                      <span className="exp-company"> · {item.company}</span>
                    </h3>
                    <span className="exp-period">{item.period}</span>
                  </div>
                  <ul className="bullet-list">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>
                        <RichText text={highlight} />
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Featured Work">
          <div className="project-grid">
            {portfolioData.projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </Section>

        <Section title="Skills">
          <div className="skills-groups">
            {portfolioData.skillGroups.map((group) => (
              <div key={group.label} className="skills-group">
                <p className="skills-group-label">{group.label}</p>
                <div className="skills-wrap">
                  {group.items.map((skill) => (
                    <span key={skill} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <footer className="footer">
          <FooterLinks links={portfolioData.socials} />
          <p className="footer-note">Built with Next.js · © 2026 Gaurav Mehta</p>
        </footer>
      </Container>
    </main>
  );
}
