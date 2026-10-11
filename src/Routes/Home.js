import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import useReveal from "../hooks/useReveal";
import { projects } from "../data/projects";
import CodeEditor from "../assets/code_editor.svg";
import AWS_logo from "../assets/aws_logo.svg";
import Rails from "../assets/rails_logo.svg";
import Ruby from "../assets/ruby_logo.svg";
import React_logo from "../assets/react_logo.svg";
import JS_logo from "../assets/JS_logo.svg";
import HTML_logo from "../assets/html_logo.svg";
import CSS_logo from "../assets/css_logo.svg";
import Wordpress from "../assets/wordpress.svg";

// Headline typed out like a typewriter; "accent" parts are pink
const HEADLINE = [
  { text: "Hi, I’m " },
  { text: "Glu@y", accent: true },
  { text: "." },
];
const TYPE_SPEED_MS = 110;
const TYPE_START_MS = 400;

const AnimatedHeadline = () => {
  const total = HEADLINE.reduce((n, part) => n + [...part.text].length, 0);
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const [typed, setTyped] = useState(reduceMotion ? total : 0);

  useEffect(() => {
    if (typed >= total) return;
    const timer = setTimeout(
      () => setTyped(typed + 1),
      typed === 0 ? TYPE_START_MS : TYPE_SPEED_MS
    );
    return () => clearTimeout(timer);
  }, [typed, total]);

  // Every letter is rendered so the line keeps its full width;
  // letters not typed yet are invisible and the cursor follows the last one.
  let index = 0;
  return (
    <h1 aria-label={HEADLINE.map((part) => part.text).join("")}>
      <span aria-hidden="true">
        {typed === 0 && <span className="type-cursor"></span>}
        {HEADLINE.map((part) => (
          <span
            key={part.text}
            className={part.accent ? "accent" : undefined}
          >
            {[...part.text].map((char) => {
              index += 1;
              return (
                <React.Fragment key={index}>
                  <span className={index > typed ? "untyped" : undefined}>
                    {char}
                  </span>
                  {index === typed && <span className="type-cursor"></span>}
                </React.Fragment>
              );
            })}
          </span>
        ))}
      </span>
    </h1>
  );
};

// Kinds of real-world software built, each backed by a project on the site
const domains = [
  {
    label: "Public safety",
    text: "Gunshot detection software with real\u2011time maps",
  },
  {
    label: "E-commerce",
    text: "Online stores with Shopify and the MERN stack",
  },
  {
    label: "AI apps",
    text: "ChatGPT-powered apps with the OpenAI API",
  },
];

const services = [
  {
    title: "Frontend",
    text: "Responsive, accessible interfaces and web apps.",
    tech: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend & Cloud",
    text: "APIs, databases and serverless services.",
    tech: ["Node.js", "Express", "Ruby on Rails", "MongoDB", "AWS"],
  },
  {
    title: "UX/UI Design",
    text: "User flows, wireframes and visual design.",
    tech: ["Figma", "Illustrator", "Photoshop", "After Effects"],
  },
];

const FEATURED_TITLES = ["Lego Cars", "Customers-DB", "ChatWithMeGPT"];
const featured = FEATURED_TITLES.map((title) =>
  projects.find((p) => p.title === title)
);

const logos = [
  { src: AWS_logo, alt: "AWS logo" },
  { src: Rails, alt: "Ruby on Rails logo" },
  { src: Ruby, alt: "Ruby logo" },
  { src: React_logo, alt: "React logo" },
  { src: JS_logo, alt: "JavaScript logo" },
  { src: HTML_logo, alt: "HTML logo" },
  { src: CSS_logo, alt: "CSS logo" },
  { src: Wordpress, alt: "WordPress logo" },
];

const Home = () => {
  useReveal();

  return (
    <div>
      <Header />
      <div className="container-all home-page">
        <section className="home-hero">
          <div className="hero-text">
            <p className="eyebrow">Software Engineer · Full Stack Developer</p>
            <AnimatedHeadline />
            <p className="hero-summary">
              I build full stack web apps with React, Node.js and AWS, with a
              designer’s eye from my background in architecture and UX/UI.
            </p>
            <p className="hero-status">
              <span className="status-dot" aria-hidden="true"></span>
              Currently: Software Engineer at EAGL Technology
            </p>
            <div className="hero-actions">
              <Link className="btn-primary" to="/Projects">
                View my projects
              </Link>
              <Link className="btn-outline" to="/Contact">
                Contact me
              </Link>
            </div>
          </div>
          <img
            className="hero-image"
            src={CodeEditor}
            alt="Code editor with a Node.js AWS Lambda handler and a terminal"
          />
        </section>

        <section className="home-domains">
          <p className="domains-title">Where I’ve built software</p>
          <ul className="home-highlights">
            {domains.map((d) => (
              <li key={d.label}>
                <span>{d.label}</span>
                <p>{d.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="home-section">
          <h2>What I do</h2>
          <div className="services">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul className="tech-list">
                  {s.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="home-logos">
            {logos.map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </section>

        <section className="home-section">
          <div className="section-heading">
            <h2>Featured projects</h2>
            <Link to="/Projects">See all projects →</Link>
          </div>
          <div className="projects-grid">
            {featured.map((p, i) => (
              <ProjectCard key={p.title} project={p} delay={i * 100} />
            ))}
          </div>
        </section>

        <section className="home-cta">
          <h2>Have a role or project in mind?</h2>
          <p>I’d love to hear about it.</p>
          <Link className="btn-primary" to="/Contact">
            Let’s talk
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
