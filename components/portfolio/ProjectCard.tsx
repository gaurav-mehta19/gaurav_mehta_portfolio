import ImageCarousel from "@/components/portfolio/ImageCarousel";
import LinkRow from "@/components/portfolio/LinkRow";
import RichText from "@/components/portfolio/RichText";
import type { Project } from "@/lib/portfolio-data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <ImageCarousel images={project.images} alt={project.name} />
      <div className="project-body">
        <div className="project-title-row">
          <h3>{project.name}</h3>
          {project.status ? (
            <span
              className={`status-badge${project.status === "Building" ? " is-building" : ""}`}
            >
              {project.status}
            </span>
          ) : null}
        </div>
        <p className="project-description">{project.description}</p>
        {project.highlights.length > 0 ? (
          <ul className="bullet-list">
            {project.highlights.map((highlight) => (
              <li key={highlight}>
                <RichText text={highlight} />
              </li>
            ))}
          </ul>
        ) : null}
        {project.tech.length > 0 ? (
          <div className="tech-row">
            {project.tech.map((tech) => (
              <span key={tech} className="tech-chip">
                {tech}
              </span>
            ))}
          </div>
        ) : null}
        {project.links.length > 0 ? (
          <LinkRow links={project.links} className="project-links" />
        ) : null}
      </div>
    </article>
  );
}
