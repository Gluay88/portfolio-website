import React from "react";
import "../App.css";

function ProjectsPage(props) {
  return (
    <div>
      <div className="project_page_info">
        <img src={props.imageSrc} />
        <h3>{props.projectNameTag}</h3>
        <br />
        <p>{props.description}</p>
        <br />
        <p>{props.tools}</p>
        <button>{props.buttonLink}</button>
      </div>
    </div>
  );
}

export default ProjectsPage;
