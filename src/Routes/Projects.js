import React, { useState } from "react";
import "../App.css";
import "./Projects.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import MGNPro from "../assets/project_pic2.jpg";
import catTinder from "../assets/cat_tinder.jpg";
import shlfApp from "../assets/shlf_app.jpg";
import EnCiv from "../assets/enciv_icon.jpg";
import LloydPestControl from "../assets/lloyd-pest-control.jpg";
import TopNotchTech from "../assets/top-notch-tech.jpg";
import JWTAuth from "../assets/JWT.jpg";
import SneakyOnes from "../assets/sneakyones.jpg";
import Firebase from "../assets/firebase.jpg";
import LegoCars from "../assets/LegoCars.jpg";
import Friends from "../assets/80steam.jpg";
import ChatWithMeGPT from "../assets/ChatWithMe.jpg";
import UXUI from "../assets/uxui.jpg";
import UserDiagram from "../assets/userdiagram.jpg";
import Customers from "../assets/Customers.jpg";
import MorningMoms from "../assets/MorningMoms.jpg";

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

const projects = [
  {
    title: "Morning Moms",
    type: "E-Commerce App",
    image: MorningMoms,
    tech: ["Liquid (Ruby)", "JSON", "JavaScript", "CSS", "REST API"],
    link: "https://morningmoms.myshopify.com/",
  },
  {
    title: "Customers-DB",
    type: "Full Stack App",
    image: Customers,
    tech: ["Node.js", "Express", "MongoDB", "TypeScript", "Postman", "TailwindCSS"],
    link: "https://github.com/Gluay88/customers-node-BACKEND",
  },
  {
    title: "Lego Cars",
    type: "E-Commerce App",
    image: LegoCars,
    tech: ["React", "TypeScript", "Vite", "Google Autocomplete"],
    link: "https://lego-shop-gluay.netlify.app/",
  },
  {
    title: "ChatWithMeGPT",
    type: "OpenAI ChatGPT App",
    image: ChatWithMeGPT,
    tech: ["OpenAI", "ChatGPT", "Node.js", "JavaScript"],
    link: "https://github.com/Gluay88/ChatWithMeGPT",
  },
  {
    title: "80s Dream Team",
    type: "Full Stack App",
    image: Friends,
    tech: ["Django", "Python", "React"],
    link: "https://80sfrienddreamteam.netlify.app/",
  },
  {
    title: "Firebase Authentication",
    type: "Full Stack App",
    image: Firebase,
    tech: ["Firebase", "Google Console", "TypeScript", "React"],
    link: "https://github.com/Gluay88/firebase-fullstack",
  },
  {
    title: "Sneaky Ones",
    type: "Full Stack App",
    image: SneakyOnes,
    tech: ["Node.js", "Express", "MySQL", "React"],
    link: "https://github.com/Gluay88/sneakyones",
  },
  {
    title: "Lloyd Pest Control",
    type: "Ruby on Rails App",
    image: LloydPestControl,
    tech: ["Ruby on Rails", "CSV", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/Gluay88/lloyd-pest-control",
  },
  {
    title: "TopNotch Tech",
    type: "MERN E-Commerce",
    image: TopNotchTech,
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://magnificent-blini-b769ee.netlify.app/",
    inProgress: true,
  },
  {
    title: "myBucketList",
    type: "JWT Authentication",
    image: JWTAuth,
    tech: ["JWT", "Redux", "React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/Gluay88/JWT",
  },
  {
    title: "EnCiv",
    type: "Full Stack App",
    image: EnCiv,
    tech: ["MongoDB", "React", "Storybook", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/EnCiv/undebate-ssp",
  },
  {
    title: "MGNPro / BMOPro",
    type: "Graphic Builder",
    image: MGNPro,
    tech: ["JavaScript", "HTML", "CSS", "Illustrator", "Photoshop"],
    link: "https://new.mgnonline.com/BMO/Canvas?tab=Graphics&id=0",
  },
  {
    title: "Shlf App",
    type: "Full Stack App",
    image: shlfApp,
    tech: ["Ruby on Rails", "React", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/Rydg-Tech/shlf-app",
  },
  {
    title: "Cat Tinder",
    type: "Full Stack App",
    image: catTinder,
    tech: ["Ruby on Rails", "React", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/Gluay88/cat-tinder-backend",
  },
];

const FILTERS = ["All", "React", "Node.js", "Ruby on Rails", "TypeScript", "MongoDB"];

const Projects = () => {
  const [filter, setFilter] = useState("All");

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
          <h3>More projects</h3>
          <div className="project-filters">
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
            {shown.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default Projects;
