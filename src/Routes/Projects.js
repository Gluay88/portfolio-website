import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectsPage from '../components/ProjectsPage';
import project_pic1 from '../assets/project_pic1.jpg';
import project_pic2 from '../assets/project_pic2.jpg';
import project_pic3 from '../assets/project_pic3.jpg';
import project_pic4 from '../assets/project_pic4.jpg';



class Projects extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            imageSrc: [project_pic1, project_pic2, project_pic3, project_pic4],

            projectNameTag : ["Mangosteen Thai Restaurant, CO", "MGNOnline Pro Graphic Builder, CA", "Superior Siding Inc. Custom Carpentry, CA", "Wisdom Bistro Kirkland Restaurant, WA"],

            description : [
                "Create both both coding and design parts",
                "Design interface for the graphic bulider: graphic and map",
                "Javascript, HTML, CSS, Illustraator, PhotoShop",
                "WordPress, PHP, HTML, CSS, Illustrator, PhotoShop"],

            tools : [
                "JavaScript, HTML, CSS, Illustrator, PhotoShop",
                "UX and UI Design, JavaScript, HTML, CSS, Illustrator, PhotoShop",
                "Javascript, HTML, CSS, Illustraator, PhotoShop",
                "WordPress, PHP, HTML, CSS, Illustrator, PhotoShop"],

            buttonLink: [
            <a href="http://www.719mangosteen.com/" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>,
            <a href="https://new.mgnonline.com/BMO/Canvas?tab=Graphics&id=0" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>,
            <a href="#" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>,
            <a href="http://thaiwisdomkirkland.com/" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>]
        }

    }
    render () {
    return (
        <div>
            <Header />
            <div className="container-all">
                <h2>Projects</h2> 
                <div className="projects_container">

                    <div className="project-div">
                    <ProjectsPage imageSrc={this.state.imageSrc[0]} projectNameTag={this.state.projectNameTag[0]} description={this.state.description[0]}
                    tools={this.state.tools[0]}
                    buttonLink={this.state.buttonLink[0]} />  
                    </div>

                    <div className="project-div">
                    <ProjectsPage imageSrc={this.state.imageSrc[1]} projectNameTag={this.state.projectNameTag[1]} description={this.state.description[1]}
                    tools={this.state.tools[1]}
                    buttonLink={this.state.buttonLink[1]} 
                    />
                    </div>

                    <div className="project-div">
                    <ProjectsPage imageSrc={this.state.imageSrc[0]} projectNameTag={this.state.projectNameTag[2]} description={this.state.description[2]}
                    tools={this.state.tools[2]}
                    buttonLink={this.state.buttonLink[2]} 
                    /> 
                    </div>

                    
                    <div className="project-div">
                    <ProjectsPage imageSrc={this.state.imageSrc[3]} projectNameTag={this.state.projectNameTag[3]} description={this.state.description[3]}
                    tools={this.state.tools[3]}
                    buttonLink={this.state.buttonLink[3]} 
                    /> 
                   </div>

                    
                  
                </div>
             </div>
            <Footer />
        </div>
        )
    
    }   
}
export default Projects 