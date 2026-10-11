import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./About.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GluayPhoto from "../assets/gluay_photo.jpg";
import AWS_logo from "../assets/aws_logo.svg";
import Rails from "../assets/rails_logo.svg";
import Ruby from "../assets/ruby_logo.svg";
import React_logo from "../assets/react_logo.svg";
import JS_logo from "../assets/JS_logo.svg";
import HTML_logo from "../assets/html_logo.svg";
import CSS_logo from "../assets/css_logo.svg";
import Git from "../assets/git_logo.svg";
import GitHub_logo from "../assets/github_logo.svg";
import Wordpress from "../assets/wordpress.svg";
import AutoCAD from "../assets/AutoCAD_logo.svg";
import SketchUp from "../assets/SketchUp.svg";
import AfterEffects from "../assets/afterEffects.svg";
import Illustrator from "../assets/illustrator_logo.svg";
import PhotoShop from "../assets/photoshop_logo.svg";
import InDesign from "../assets/inDesign_logo.svg";

const experience = [
  {
    role: "Software Engineer",
    company: "EAGL Technology",
    location: "Albuquerque, NM",
    dates: "Jun 2022 – Present",
    highlights: [
      "Build NG-EAGL, gunshot detection software that uses sensor technology developed by the Department of Energy to detect and analyze active shooter events, indoors and outdoors.",
      "Develop the map-based interface with React and Mapbox GL, working across the stack with Django, GraphQL, middleware and APIs.",
      "Work with real-time event handling using Socket.IO and an event manager, with services running in Docker.",
      "Designed the UX/UI and user flow diagrams for NG-EAGL in Figma.",
    ],
    tech: ["Django", "React", "Mapbox GL", "GraphQL", "Docker", "Socket.IO", "Figma"],
  },
  {
    role: "Web, Graphic Designer and Animator",
    company: "MGNOnline",
    location: "California",
    dates: "Mar 2018 – Oct 2021",
    highlights: [
      "Built MGNPro / BMOPro (BuildMyOwn Graphics), an online graphic builder, with JavaScript, HTML and CSS.",
      "Designed web graphics and created animations with Illustrator, Photoshop and After Effects.",
    ],
    tech: ["JavaScript", "HTML", "CSS", "Illustrator", "Photoshop", "After Effects"],
  },
  {
    role: "Landscape Architect",
    company: "Bermuda Landscape Architects Co., Ltd",
    location: "Thailand",
    dates: "Apr 2013 – Dec 2015",
    highlights: [
      "Designed landscape architecture projects, producing drawings and 3D models with AutoCAD and SketchUp.",
    ],
    tech: ["AutoCAD", "SketchUp"],
  },
];

const education = [
  {
    title: "Full Stack Development Bootcamp",
    school: "Learn Academy, California",
    dates: "Nov 2021 – Apr 2022",
  },
  {
    title: "Certificate in Interaction Design",
    school: "Santa Monica College, California",
  },
  {
    title: "Bachelor’s Degree in Architecture",
    school: "Chulalongkorn University, Thailand",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "HTML", "CSS", "Bootstrap", "Storybook"],
  },
  {
    title: "Backend & Data",
    skills: ["Node.js", "Express", "Ruby on Rails", "Ruby", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS", "Git", "GitHub", "Jest", "Postman", "WordPress", "Shopify"],
  },
  {
    title: "Design",
    skills: ["AutoCAD", "SketchUp", "After Effects", "Illustrator", "Photoshop", "InDesign"],
  },
];

const logos = [
  { src: AWS_logo, alt: "AWS logo" },
  { src: Rails, alt: "Ruby on Rails logo" },
  { src: Ruby, alt: "Ruby logo" },
  { src: React_logo, alt: "React logo" },
  { src: JS_logo, alt: "JavaScript logo" },
  { src: HTML_logo, alt: "HTML logo" },
  { src: CSS_logo, alt: "CSS logo" },
  { src: Git, alt: "Git logo" },
  { src: GitHub_logo, alt: "GitHub logo" },
  { src: Wordpress, alt: "WordPress logo" },
  { src: AutoCAD, alt: "AutoCAD logo" },
  { src: SketchUp, alt: "SketchUp logo" },
  { src: AfterEffects, alt: "After Effects logo" },
  { src: Illustrator, alt: "Illustrator logo" },
  { src: PhotoShop, alt: "Photoshop logo" },
  { src: InDesign, alt: "InDesign logo" },
];

const About = () => {
  return (
    <div>
      <Header />
      <div className="container-all about-page">
        <section className="about-intro">
          <img
            className="about-photo"
            src={GluayPhoto}
            alt="Portrait of Glu@y S. Wang"
          />
          <div className="about-intro-text">
            <p className="eyebrow">About me</p>
            <h2>Glu@y S. Wang</h2>
            <p className="about-role">
              Software Engineer · Full Stack Developer
            </p>
            <p>
              Hello! My name is Gluay <span>(“Glue-A”)</span>. I’m a software
              engineer coming from gunshot and weapon detection software
              development, seeking a challenging position in a company that
              values innovation, excellence and creativity.
            </p>
            <div className="about-actions">
              <Link className="btn-primary" to="/Projects">
                View my projects
              </Link>
              <Link className="btn-outline" to="/Contact">
                Contact me
              </Link>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h3>Experience</h3>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.company}>
                <p className="timeline-dates">{job.dates}</p>
                <h4>{job.role}</h4>
                <p className="timeline-place">
                  {job.company} · {job.location}
                </p>
                <ul className="job-highlights">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="tech-list">
                  {job.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="about-section">
          <h3>Education</h3>
          <ul className="education-list">
            {education.map((item) => (
              <li key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.school}</p>
                {item.dates && <p className="timeline-dates">{item.dates}</p>}
              </li>
            ))}
          </ul>
        </section>

        <section className="about-section">
          <h3>Skills & Tools</h3>
          <div className="logo-strip">
            {logos.map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} />
            ))}
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h4>{group.title}</h4>
                <ul className="tech-list">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default About;
