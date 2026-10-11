import React from "react";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectsPage from "../components/ProjectsPage";
import project_pic1 from "../assets/project_pic1.jpg";
import project_pic2 from "../assets/project_pic2.jpg";
import project_pic3 from "../assets/project_pic3.jpg";
import project_pic4 from "../assets/project_pic4.jpg";
import project_pic5 from "../assets/project_pic5.jpg";
import project_pic6 from "../assets/project_pic6.jpg";
import catTinder from "../assets/cat_tinder.jpg";
import shlfApp from "../assets/shlf_app.jpg";
import EnCiv from "../assets/enciv_icon.jpg";
import LigthBulbs from "../assets/light_bulbs.jpg";
import LloydPestControl from "../assets/lloyd-pest-control.jpg";
import PrimeVideo from "../assets/prime-video.jpg";
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

const projectData = {
  imageSrc: [
    project_pic1,
    project_pic2,
    project_pic3,
    project_pic4,
    project_pic5,
    project_pic6,
    LigthBulbs,
    catTinder,
    shlfApp,
    EnCiv,
    LloydPestControl,
    PrimeVideo,
    TopNotchTech,
    JWTAuth,
    SneakyOnes,
    Firebase,
    LegoCars,
    Friends,
    ChatWithMeGPT,
    Customers,
    MorningMoms,
  ],

  projectNameTag: [
    "Mangosteen Restaurant",
    "MGNPro/BMOPro",
    "Superior Siding Inc.",
    "Wisdom Bistro Kirkland",
    "Crystall Skulls",
    "PigLatin - React Game",
    "Light Bulbs",
    "Cat Tinder",
    "Shlf App",
    "EnCiv",
    "Lloy Pest Control",
    "Prime Video (Work in process)",
    "TopNotch Tech (Work in process)",
    "myBucketList",
    "Sneaky Ones",
    "Firebase Authentication",
    "Lego Cars",
    "80s Dream Team",
    "ChatWithMeGPT",
    "Customers-DB",
    "Morning Moms",
  ],

  description: [
    "Thai restaurant",
    "Graphic bulider",
    "Custom carpentry",
    "Asian fusion restaurant",
    "Tresture hunter game",
    "Language game",
    "React game",
    "Full Stack App",
    "Full Stack App",
    "Full Stack App",
    "Ruby on Rails",
    "UI/UX API",
    "MERN-Ecommerce",
    "JWT Authentication",
    "Full Stack App",
    "Full Stack App",
    "Vite-React E-Commerce",
    "Full Stack App",
    "OpenAI ChatGPT App",
    "Full Stack App",
    "E-Commerce App",
  ],

  tools: [
    "JavaScript, HTML, CSS, Illustrator, PhotoShop",
    "JavaScript, HTML, CSS, Illustrator, PhotoShop",
    "Javascript, HTML, CSS, Illustrator, PhotoShop",
    "WordPress, PHP, HTML, CSS, Illustrator, PhotoShop",
    "JavaScript, HTML, CSS, Illustrator, PhotoShop",
    "React, JavaScript, HTML, CSS, Illustrator",
    "React, JavaScript, HTML, CSS, Illustrator",
    "Rails, React, JavaScript, HTML, CSS, Illustrator",
    "Rails, React, JavaScript, HTML, CSS, Illustrator",
    "MongoDB, React, Storybook, JavaScript, HTML, CSS",
    "Rails, CSV, JavaScript, HTML, CSS",
    "JavaScript, HTML, CSS, API",
    "React, Node, Express, MongoDB",
    "JWT, Redux, React, Node, Express, MongoDB",
    "Node, Express, MySQL, React",
    "Firebase, Google Console, TypeScript, React",
    "Google Autocomplete,Vite, React, TypeScript",
    "Django/Python and React",
    "OpenAI, ChatGPT, Node, JavaScript",
    "Node, MongoDB, Express, TypeScript, Postman and TailwindCSS",
    "Liquid (written In Ruby), JSON, JavaScript, CSS and REST API",
  ],

  buttonLink: [
    <a
      href="http://gluita.com/"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,

    <a
      href="https://new.mgnonline.com/BMO/Canvas?tab=Graphics&id=0"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,

    <a
      href="https://superiorsidinginc.net/"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,

    <a
      href="http://thaiwisdomkirkland.com/"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,

    <a
      href="https://gluay88.github.io/"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,

    <a
      href="https://github.com/Gluay88/pig-latin"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,

    <a
      href="https://github.com/Gluay88/light-bulbs"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,

    <a
      href="https://github.com/Gluay88/cat-tinder-backend"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,

    <a
      href="https://github.com/Rydg-Tech/shlf-app"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,

    <a
      href="https://github.com/EnCiv/undebate-ssp"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,
    <a
      href="https://github.com/Gluay88/lloyd-pest-control"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,
    <a
      href="https://62587a976ff44006313b265c--musical-tartufo-215d4b.netlify.app/"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,
    <a
      href="https://magnificent-blini-b769ee.netlify.app/"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,
    <a
      href="https://github.com/Gluay88/JWT"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,
    <a
      href="https://github.com/Gluay88/sneakyones"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,
    <a
      href="https://github.com/Gluay88/firebase-fullstack"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,
    <a
      href="https://lego-shop-gluay.netlify.app/"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,
    <a
      href="https://80sfrienddreamteam.netlify.app/"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,
    <a
      href="https://github.com/Gluay88/ChatWithMeGPT"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,
    <a
      href="https://github.com/Gluay88/customers-node-BACKEND"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,
    <a
      href="https://morningmoms.myshopify.com/"
      target="_blank"
      style={{ color: "white", textDecoration: "none" }}
    >
      More..
    </a>,
  ],
};

function Projects() {
  return (
    <div>
      <Header />
      <div className="container-all">
        <h2>Projects</h2>
        <div className="eagl-project">
          <h4>Gun Shot Detection Software (NG-EAGL)</h4>
          <p>
            The core of EAGL’s <span>sensor technology</span> (developed by
            the <span>Department of Energy</span>) uses advanced algorithms to
            analyze firearm discharge event energy
          </p>
          <br />
          <p>
            The EAGL System reacts during an active shooter event (Indoor or
            Outdoor) by capturing energy levels with acoustic characteristics
            and performing on-board sensor waveform analysis. The analysis
            results determine whether or not further captured event signal
            examination is needed and what other system actions to initiate.
          </p>
          <br />

          <div className="ux-contents">
            <div className="ux-container">
              <a
                href="https://www.figma.com/file/P0YuLcZ1vWox4dNCcgXAGW/09%2F29%2F2022%3D%3EEAGL?node-id=0-1&t=mCIkl3cAMXIkvtGv-0"
                target="_blank"
              >
                UX/UI Design ↗️
              </a>
              <a
                href="https://www.figma.com/file/P0YuLcZ1vWox4dNCcgXAGW/09%2F29%2F2022%3D%3EEAGL?node-id=0-1&t=mCIkl3cAMXIkvtGv-0"
                target="_blank"
              >
                <img src={UXUI} alt="UX UI design" />
              </a>
            </div>

            <div className="userflow-container">
              <a
                href="https://www.figma.com/file/sEYC12zQ3ipg9RddF5z4NN/UserFlowDiagram-EAGL%3D%3E09282022?node-id=0-1&t=FDOwSXwDgPeKhpzY-0"
                target="_blank"
              >
                User Flow Diagram ↗️
              </a>
              <a
                href="https://www.figma.com/file/sEYC12zQ3ipg9RddF5z4NN/UserFlowDiagram-EAGL%3D%3E09282022?node-id=0-1&t=FDOwSXwDgPeKhpzY-0"
                target="_blank"
              >
                <img src={UserDiagram} />
              </a>
            </div>
          </div>
          <div className="video-eagl">
            <p>
              Tools for the project:{" "}
              <span>
                Django, React, MapboxGL, Middleware, GraphQL, API, Docker and
                SocketIO / Event Manager
              </span>{" "}
              ⬇️
            </p>
            <iframe
              src="https://player.vimeo.com/video/832462113?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="100%"
              height="996"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="MapBoxEAGL.mp4"
            ></iframe>
          </div>
        </div>
        {/* Ends EAGL */}

        <div className="projects_container">
          <div className="project-div">
            <a href="https://morningmoms.myshopify.com/" target="_blank">
              <ProjectsPage
                imageSrc={projectData.imageSrc[20]}
                projectNameTag={projectData.projectNameTag[20]}
                description={projectData.description[20]}
                tools={projectData.tools[20]}
                buttonLink={projectData.buttonLink[20]}
              />
            </a>
          </div>
          <div className="project-div">
            <a
              href="https://github.com/Gluay88/customers-node-BACKEND"
              target="_blank"
            >
              <ProjectsPage
                imageSrc={projectData.imageSrc[19]}
                projectNameTag={projectData.projectNameTag[19]}
                description={projectData.description[19]}
                tools={projectData.tools[19]}
                buttonLink={projectData.buttonLink[19]}
              />
            </a>
          </div>

          <div className="project-div">
            <a href="https://lego-shop-gluay.netlify.app/" target="_blank">
              <ProjectsPage
                imageSrc={projectData.imageSrc[16]}
                projectNameTag={projectData.projectNameTag[16]}
                description={projectData.description[16]}
                tools={projectData.tools[16]}
                buttonLink={projectData.buttonLink[16]}
              />
            </a>
          </div>
          <div className="project-div">
            <a
              href="https://github.com/Gluay88/ChatWithMeGPT"
              target="_blank"
            >
              <ProjectsPage
                imageSrc={projectData.imageSrc[18]}
                projectNameTag={projectData.projectNameTag[18]}
                description={projectData.description[18]}
                tools={projectData.tools[18]}
                buttonLink={projectData.buttonLink[18]}
              />
            </a>
          </div>

          <div className="project-div">
            <a href="https://80sfrienddreamteam.netlify.app/" target="_blank">
              <ProjectsPage
                imageSrc={projectData.imageSrc[17]}
                projectNameTag={projectData.projectNameTag[17]}
                description={projectData.description[17]}
                tools={projectData.tools[17]}
                buttonLink={projectData.buttonLink[17]}
              />
            </a>
          </div>

          <div className="project-div">
            <a
              href="https://github.com/Gluay88/firebase-fullstack"
              target="_blank"
            >
              <ProjectsPage
                imageSrc={projectData.imageSrc[15]}
                projectNameTag={projectData.projectNameTag[15]}
                description={projectData.description[15]}
                tools={projectData.tools[15]}
                buttonLink={projectData.buttonLink[15]}
              />
            </a>
          </div>
          <div className="project-div">
            <a href="https://github.com/Gluay88/sneakyones" target="_blank">
              <ProjectsPage
                imageSrc={projectData.imageSrc[14]}
                projectNameTag={projectData.projectNameTag[14]}
                description={projectData.description[14]}
                tools={projectData.tools[14]}
                buttonLink={projectData.buttonLink[14]}
              />
            </a>
          </div>
          <div className="project-div">
            <a
              href="https://github.com/Gluay88/lloyd-pest-control"
              target="_blank"
            >
              <ProjectsPage
                imageSrc={projectData.imageSrc[10]}
                projectNameTag={projectData.projectNameTag[10]}
                description={projectData.description[10]}
                tools={projectData.tools[10]}
                buttonLink={projectData.buttonLink[10]}
              />
            </a>
          </div>
          <div className="project-div">
            <a
              href="https://magnificent-blini-b769ee.netlify.app/"
              target="_blank"
            >
              <ProjectsPage
                imageSrc={projectData.imageSrc[12]}
                projectNameTag={projectData.projectNameTag[12]}
                description={projectData.description[12]}
                tools={projectData.tools[12]}
                buttonLink={projectData.buttonLink[12]}
              />
            </a>
          </div>

          <div className="project-div">
            <a href="https://github.com/Gluay88/JWT" target="_blank">
              <ProjectsPage
                imageSrc={projectData.imageSrc[13]}
                projectNameTag={projectData.projectNameTag[13]}
                description={projectData.description[13]}
                tools={projectData.tools[13]}
                buttonLink={projectData.buttonLink[13]}
              />
            </a>
          </div>

          <div className="project-div">
            <a href="https://github.com/EnCiv/undebate-ssp" target="_blank">
              <ProjectsPage
                imageSrc={projectData.imageSrc[9]}
                projectNameTag={projectData.projectNameTag[9]}
                description={projectData.description[9]}
                tools={projectData.tools[9]}
                buttonLink={projectData.buttonLink[9]}
              />
            </a>
          </div>
          <div className="project-div">
            <a
              href="https://new.mgnonline.com/BMO/Canvas?tab=Graphics&id=0"
              target="_blank"
            >
              <ProjectsPage
                imageSrc={projectData.imageSrc[1]}
                projectNameTag={projectData.projectNameTag[1]}
                description={projectData.description[1]}
                tools={projectData.tools[1]}
                buttonLink={projectData.buttonLink[1]}
              />
            </a>
          </div>
          <div className="project-div">
            <a href="https://github.com/Rydg-Tech/shlf-app" target="_blank">
              <ProjectsPage
                imageSrc={projectData.imageSrc[8]}
                projectNameTag={projectData.projectNameTag[8]}
                description={projectData.description[8]}
                tools={projectData.tools[8]}
                buttonLink={projectData.buttonLink[8]}
              />
            </a>
          </div>

          <div className="project-div">
            <a
              href="https://github.com/Gluay88/cat-tinder-backend"
              target="_blank"
            >
              <ProjectsPage
                imageSrc={projectData.imageSrc[7]}
                projectNameTag={projectData.projectNameTag[7]}
                description={projectData.description[7]}
                tools={projectData.tools[7]}
                buttonLink={projectData.buttonLink[7]}
              />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Projects;
