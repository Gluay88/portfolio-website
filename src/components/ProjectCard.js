import React from "react";
import "../Routes/Projects.css";

// delay: ms to wait before fading in, to stagger cards in a row
const ProjectCard = ({ project, delay = 0 }) => {
  const isCode = project.link.includes("github.com");

  return (
    <a
      className="project-card reveal"
      style={{ "--reveal-delay": `${delay}ms` }}
      href={project.link}
      target="_blank"
      rel="noreferrer"
    >
      <div className="project-card-image">
        <img src={project.image} alt={`${project.title} preview`} />
        {project.inProgress && (
          <span className="project-badge">In progress</span>
        )}
      </div>
      <div className="project-card-body">
        <p className="project-type">{project.type}</p>
        <h3>{project.title}</h3>
        <ul className="tech-list">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <span className="project-link">
          {isCode ? "Source code" : "Live site"} ↗
        </span>
      </div>
    </a>
  );
};

export default ProjectCard;
