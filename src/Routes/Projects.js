import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectsPage from '../components/ProjectsPage';
import project_pic1 from '../assets/project_pic1.jpg';
import project_pic2 from '../assets/project_pic2.jpg';
import project_pic3 from '../assets/project_pic3.jpg';



class Projects extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            imageSrc: [project_pic1, project_pic2, project_pic3],
            projectNameTag : ["Project_1", "Project_2", "Project_3"],
            description : ["Description for project 1", "Description for project 2", "Description for project 3"]
        }

    }
    render () {
    return (
        <div>
            <Header />
            <div className="container-all">
                <h2>Awesome Projects go here! (below)</h2> 
                <div className="projects_container">

                    <ProjectsPage imageSrc={this.state.imageSrc[0]} projectNameTag={this.state.projectNameTag[0]} description={this.state.description[0]} />  

                    <ProjectsPage imageSrc={this.state.imageSrc[1]} projectNameTag={this.state.projectNameTag[1]} description={this.state.description[1]} />

                    <ProjectsPage imageSrc={this.state.imageSrc[2]} projectNameTag={this.state.projectNameTag[2]} description={this.state.description[2]} />

                    
                  
                </div>
             </div>
            <Footer />
        </div>
        )
    
    }   
}
export default Projects 