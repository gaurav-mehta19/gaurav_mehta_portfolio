import Image from "next/image";
import LinkRow from "@/components/portfolio/LinkRow";
import RichText from "@/components/portfolio/RichText";
import TechIcon from "@/components/portfolio/TechIcon";
import type { Project } from "@/lib/portfolio-data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-thumb">
        <Image
          src={project.thumbnail}
          alt={`${project.name} preview`}
          fill
          sizes="(max-width: 760px) 100vw, 440px"
          className="project-thumb-img"
        />
      </div>
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
            {project.highlights.slice(0, 3).map((highlight) => (
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
                <TechIcon name={tech} />
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
