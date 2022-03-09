import React, { Component } from "react";
import "../App.css";

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="project_page_info">
          <img src={this.props.imageSrc} />
          <h3>{this.props.projectNameTag}</h3>
          <br />
          <p>{this.props.description}</p>
          <br />
          <p>{this.props.tools}</p>
          <button>{this.props.buttonLink}</button>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
