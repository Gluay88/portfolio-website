import React, { Component } from 'react'
import '../App.css';
import project_pic1 from '../assets/project_pic1.jpg';
import project_pic2 from '../assets/project_pic2.jpg';
import project_pic3 from '../assets/project_pic3.jpg';


class ProjectsPage extends Component {

    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    render() {
        return (
            <div>
                <div className="project_page_info">
                    <img src={this.props.imageSrc}/>
                    <h3>{this.props.projectNameTag}</h3>
                    <br />
                    <p>{this.props.description}</p>
                    <br />
                    <p>{this.props.tools}</p>
                    <button>{this.props.buttonLink}</button>
              
                    
                </div>  
            </div>
        )
    }
}

export default ProjectsPage
