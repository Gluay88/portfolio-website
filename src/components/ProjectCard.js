import React from "react";

const ProjectCard = ({ project }) => {
  const isCode = project.link.includes("github.com");

  return (
    <a
      className="project-card"
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
