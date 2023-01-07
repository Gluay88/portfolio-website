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

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
          href="https://pig-latin-game.herokuapp.com/"
          target="_blank"
          style={{ color: "white", textDecoration: "none" }}
        >
          More..
        </a>,

        <a
          href="https://light-bulbs-project.herokuapp.com/"
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
          href="http://shlf-app.herokuapp.com/"
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
          href="https://lloyd-pest-control.herokuapp.com/"
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
      ],
    };
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container-all">
          <h2>Projects</h2>
          <div className="projects_container">
            <div className="project-div">
              <a
                href="https://lloyd-pest-control.herokuapp.com/"
                target="_blank"
              >
                <ProjectsPage
                  imageSrc={this.state.imageSrc[10]}
                  projectNameTag={this.state.projectNameTag[10]}
                  description={this.state.description[10]}
                  tools={this.state.tools[10]}
                  buttonLink={this.state.buttonLink[10]}
                />
              </a>
            </div>
            <div className="project-div">
              <a
                href="https://magnificent-blini-b769ee.netlify.app/"
                target="_blank"
              >
                <ProjectsPage
                  imageSrc={this.state.imageSrc[12]}
                  projectNameTag={this.state.projectNameTag[12]}
                  description={this.state.description[12]}
                  tools={this.state.tools[12]}
                  buttonLink={this.state.buttonLink[12]}
                />
              </a>
            </div>

            <div className="project-div">
              <a href="https://github.com/Gluay88/JWT" target="_blank">
                <ProjectsPage
                  imageSrc={this.state.imageSrc[13]}
                  projectNameTag={this.state.projectNameTag[13]}
                  description={this.state.description[13]}
                  tools={this.state.tools[13]}
                  buttonLink={this.state.buttonLink[13]}
                />
              </a>
            </div>
            <div className="project-div">
              <a href="https://gluay88.github.io/" target="_blank">
                <ProjectsPage
                  imageSrc={this.state.imageSrc[4]}
                  projectNameTag={this.state.projectNameTag[4]}
                  description={this.state.description[4]}
                  tools={this.state.tools[4]}
                  buttonLink={this.state.buttonLink[4]}
                />
              </a>
            </div>
            <div className="project-div">
              <a href="https://github.com/EnCiv/undebate-ssp" target="_blank">
                <ProjectsPage
                  imageSrc={this.state.imageSrc[9]}
                  projectNameTag={this.state.projectNameTag[9]}
                  description={this.state.description[9]}
                  tools={this.state.tools[9]}
                  buttonLink={this.state.buttonLink[9]}
                />
              </a>
            </div>
            <div className="project-div">
              <a
                href="https://new.mgnonline.com/BMO/Canvas?tab=Graphics&id=0"
                target="_blank"
              >
                <ProjectsPage
                  imageSrc={this.state.imageSrc[1]}
                  projectNameTag={this.state.projectNameTag[1]}
                  description={this.state.description[1]}
                  tools={this.state.tools[1]}
                  buttonLink={this.state.buttonLink[1]}
                />
              </a>
            </div>
            <div className="project-div">
              <a href="http://shlf-app.herokuapp.com/" target="_blank">
                <ProjectsPage
                  imageSrc={this.state.imageSrc[8]}
                  projectNameTag={this.state.projectNameTag[8]}
                  description={this.state.description[8]}
                  tools={this.state.tools[8]}
                  buttonLink={this.state.buttonLink[8]}
                />
              </a>
            </div>

            <div className="project-div">
              <a
                href="https://62587a976ff44006313b265c--musical-tartufo-215d4b.netlify.app/"
                target="_blank"
              >
                <ProjectsPage
                  imageSrc={this.state.imageSrc[11]}
                  projectNameTag={this.state.projectNameTag[11]}
                  description={this.state.description[11]}
                  tools={this.state.tools[11]}
                  buttonLink={this.state.buttonLink[11]}
                />
              </a>
            </div>
            <div className="project-div">
              <a
                href="https://github.com/Gluay88/cat-tinder-backend"
                target="_blank"
              >
                <ProjectsPage
                  imageSrc={this.state.imageSrc[7]}
                  projectNameTag={this.state.projectNameTag[7]}
                  description={this.state.description[7]}
                  tools={this.state.tools[7]}
                  buttonLink={this.state.buttonLink[7]}
                />
              </a>
            </div>
            <div className="project-div">
              <a href="http://gluita.com/" target="_blank">
                <ProjectsPage
                  imageSrc={this.state.imageSrc[0]}
                  projectNameTag={this.state.projectNameTag[0]}
                  description={this.state.description[0]}
                  tools={this.state.tools[0]}
                  buttonLink={this.state.buttonLink[0]}
                />
              </a>
            </div>

            <div className="project-div">
              <a
                href="https://light-bulbs-project.herokuapp.com/"
                target="_blank"
              >
                <ProjectsPage
                  imageSrc={this.state.imageSrc[6]}
                  projectNameTag={this.state.projectNameTag[6]}
                  description={this.state.description[6]}
                  tools={this.state.tools[6]}
                  buttonLink={this.state.buttonLink[6]}
                />
              </a>
            </div>

            <div className="project-div">
              <a href="https://pig-latin-game.herokuapp.com/" target="_blank">
                <ProjectsPage
                  imageSrc={this.state.imageSrc[5]}
                  projectNameTag={this.state.projectNameTag[5]}
                  description={this.state.description[5]}
                  tools={this.state.tools[5]}
                  buttonLink={this.state.buttonLink[5]}
                />
              </a>
            </div>

            <div className="project-div">
              <a href="https://superiorsidinginc.net/" target="_blank">
                <ProjectsPage
                  imageSrc={this.state.imageSrc[2]}
                  projectNameTag={this.state.projectNameTag[2]}
                  description={this.state.description[2]}
                  tools={this.state.tools[2]}
                  buttonLink={this.state.buttonLink[2]}
                />
              </a>
            </div>

            <div className="project-div">
              <a href="http://thaiwisdomkirkland.com/" target="_blank">
                <ProjectsPage
                  imageSrc={this.state.imageSrc[3]}
                  projectNameTag={this.state.projectNameTag[3]}
                  description={this.state.description[3]}
                  tools={this.state.tools[3]}
                  buttonLink={this.state.buttonLink[3]}
                />
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Projects;
