import React, { useState } from "react";
import "../App.css";
import "./Projects.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import useReveal from "../hooks/useReveal";
import { projects } from "../data/projects";
import UXUI from "../assets/uxui.jpg";
import UserDiagram from "../assets/userdiagram.jpg";

const EAGL_TECH = [
  "Django",
  "React",
  "Mapbox GL",
  "Middleware",
  "GraphQL",
  "REST API",
  "Docker",
  "Socket.IO",
];

const EAGL_DESIGNS = [
  {
    title: "UX/UI Design",
    image: UXUI,
    link: "https://www.figma.com/file/P0YuLcZ1vWox4dNCcgXAGW/09%2F29%2F2022%3D%3EEAGL?node-id=0-1&t=mCIkl3cAMXIkvtGv-0",
  },
  {
    title: "User Flow Diagram",
    image: UserDiagram,
    link: "https://www.figma.com/file/sEYC12zQ3ipg9RddF5z4NN/UserFlowDiagram-EAGL%3D%3E09282022?node-id=0-1&t=FDOwSXwDgPeKhpzY-0",
  },
];

const FILTERS = ["All", "React", "Node.js", "Ruby on Rails", "TypeScript", "MongoDB"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  useReveal([filter]);

  const shown =
    filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter));

  return (
    <div>
      <Header />
      <div className="container-all projects-page">
        <h2>Projects</h2>
        <p className="projects-intro">
          Professional work and personal builds, from full stack apps to
          e&#8209;commerce stores.
        </p>

        <section className="featured-project">
          <div className="featured-info">
            <p className="eyebrow">Featured · Professional work</p>
            <h3>Gunshot Detection Software (NG&#8209;EAGL)</h3>
            <p>
              The core of EAGL’s <span>sensor technology</span> (developed by
              the <span>Department of Energy</span>) uses advanced algorithms to
              analyze firearm discharge event energy.
            </p>
            <p>
              The EAGL System reacts during an active shooter event (indoor or
              outdoor) by capturing energy levels with acoustic characteristics
              and performing on-board sensor waveform analysis. The analysis
              results determine whether further examination of the captured
              event signal is needed and what other system actions to initiate.
            </p>
            <ul className="tech-list">
              {EAGL_TECH.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <div className="featured-video">
            <iframe
              src="https://player.vimeo.com/video/832462113?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="NG-EAGL map demo"
            ></iframe>
          </div>

          <div className="featured-designs">
            {EAGL_DESIGNS.map((d) => (
              <a
                key={d.title}
                className="design-card"
                href={d.link}
                target="_blank"
                rel="noreferrer"
              >
                <img src={d.image} alt={`${d.title} for NG-EAGL`} />
                <div>
                  <span>{d.title} ↗</span>
                  <small>View in Figma</small>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="other-projects">
          <h3 className="reveal">More projects</h3>
          <div className="project-filters reveal">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className={f === filter ? "active" : ""}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {shown.map((p, i) => (
              <ProjectCard key={p.title} project={p} delay={(i % 4) * 80} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default Projects;
