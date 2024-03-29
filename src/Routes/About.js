import React from "react";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GluayPhoto from "../assets/gluay_photo.jpg";
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

function About() {
  return (
    <div>
      <Header />
      <div className="container-all">
        <h2>About Glu@y</h2>
        <div id="about-page">
          <img id="aboutPage-photo" src={GluayPhoto} />
          <div id="aboutText">
            <h3>Glu@y S. Wang</h3>
            <br />

            <p>
              Hello! My name is Gluay ("Glue-A"). <br />
              Software Engineer coming from gunshot and weapon detection
              software development. Seeking a challenging position in a company
              that values innovation, excellence and creativity.
            </p>
            <br />
            <br />

            <h4>Work Experience..........</h4>
            <p>
              &#10148; Software Engineer, EAGL Technology, Alburquerque, NM June
              2022 - Present
            </p>
            <p>
              &#10148; Full Stack Development Bootcamp Course, Learn Academy,
              California Nov 2021 - April 2022
            </p>
            <p>
              &#10148; Web, Graphic Designer and Animator , MGNOnline,
              California Mar 2018 - Oct 2021
            </p>
            <p>
              &#10148; Landscape Architect, Bermuda Landscape Architects Co,
              Ltd, Thailand Apr 2013 - Dec 2015
            </p>
            <br />
            <br />

            <h4>Education....................</h4>
            <p>
              &#10148; Bachelor’s Degrees in Architecture, Chulalongkorn
              University, Thailand
            </p>

            <p>
              &#10148; Certification of Interaction Design, Santa Monica
              College, California
            </p>

            <br />
            <br />

            <h4>Softwares....................</h4>
            <p>
              Ruby on Rails, Ruby, MongoDB, React, Node, Storybook, JavaScript,
              Git, GitHub, HTML, CSS, Express, TypeScript, Jest, Postgresql,
              Postman, WordPress, Bootstrap, AutoCAD, Shopify, SketchUp,
              AfterEffect, Illustrator, PhotoShop, InDesign
            </p>
          </div>
        </div>
        <div className="software">
          <img src={Rails} alt="Ruby on Rails logo" />
          <img src={Ruby} alt="Ruby logo" />
          <img src={React_logo} alt="React logo" />
          <img src={JS_logo} alt="JavaScript logo" />
          <img src={HTML_logo} alt="HTML logo" />
          <img src={CSS_logo} alt="CSS logo" />
          <img src={Git} alt="Git logo" />
          <img src={GitHub_logo} alt="GitHub logo" />
          <img src={Wordpress} alt="Wordpress logo" />
          <img src={AutoCAD} alt="AutoCAD logo" />
          <img src={SketchUp} alt="SketchUp logo" />
          <img src={AfterEffects} alt="AfterEffects logo" />
          <img src={Illustrator} alt="Illustrator logo" />
          <img src={PhotoShop} alt="PhotoShop logo" />
          <img src={InDesign} alt="InDesign logo" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
