import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectsPage from '../components/ProjectsPage';
import project_pic1 from '../assets/project_pic1.jpg';
import project_pic2 from '../assets/project_pic2.jpg';
import project_pic3 from '../assets/project_pic3.jpg';
import project_pic4 from '../assets/project_pic4.jpg';
import project_pic5 from '../assets/project_pic5.jpg';
import project_pic6 from '../assets/project_pic6.jpg';



class Projects extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            imageSrc: [project_pic1, project_pic2, project_pic3, project_pic4, project_pic5, project_pic6],

            projectNameTag : ["Mangosteen Thai Restaurant, Colorado Springs, CO", "MGNOnline Pro Graphic Builder, San Diego, CA", "Superior Siding Inc. Custom Carpentry, San Diego, CA", "Wisdom Bistro Kirkland Restaurant, WA", "Crystall Skulls - Tresture Hunt, San Diego, CA", "PigLatin - Text Game, San Diego, CA"],

            description : [
                "Create both coding and design parts",
                "Interface for the graphic bulider",
                "Build framework, codign and design",
                "Design webpage using a framework",
                "Create both coding and design parts",
                "Create both coding and design parts"],

            tools : [
                "JavaScript, HTML, CSS, Illustrator, PhotoShop",
                "JavaScript, HTML, CSS, Illustrator, PhotoShop",
                "Javascript, HTML, CSS, Illustr  ator, PhotoShop",
                "WordPress, PHP, HTML, CSS, Illustrator, PhotoShop",
                "JavaScript, HTML, CSS, Illustrator, PhotoShop",
                "JavaScript, HTML, CSS, Illustrator, PhotoShop"],

            buttonLink: [
            <a href="http://www.719mangosteen.com/" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>,
           
            <a href="https://new.mgnonline.com/BMO/Canvas?tab=Graphics&id=0" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>,
            
            <a href="https://gluay88.github.io/portfolio-website/" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>,
           
            <a href="http://thaiwisdomkirkland.com/" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>,
           
            <a href="https://gluay88.github.io/" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>,

            <a href="https://github.com/learn-academy-2021-echo/pig-latin-porcuslatin" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>
        ]
        
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
                    <a href="http://www.719mangosteen.com/" target="_blank">
                    <ProjectsPage imageSrc={this.state.imageSrc[0]} projectNameTag={this.state.projectNameTag[0]} description={this.state.description[0]}
                    tools={this.state.tools[0]}
                    buttonLink={this.state.buttonLink[0]} />  
                    </a>
                    </div>
                

                    <div className="project-div">
                    <a href="https://new.mgnonline.com/BMO/Canvas?tab=Graphics&id=0" target="_blank"> 
                    <ProjectsPage imageSrc={this.state.imageSrc[1]} projectNameTag={this.state.projectNameTag[1]} description={this.state.description[1]}
                    tools={this.state.tools[1]}
                    buttonLink={this.state.buttonLink[1]} 
                    />
                    </a>
                    </div>

                    <div className="project-div">
                    <a href="https://gluay88.github.io/portfolio-website/" target="_blank">
                    <ProjectsPage imageSrc={this.state.imageSrc[2]} projectNameTag={this.state.projectNameTag[2]} description={this.state.description[2]}
                    tools={this.state.tools[2]}
                    buttonLink={this.state.buttonLink[2]} 
                    /> 
                    </a>
                    </div>

                    
                    <div className="project-div">
                    <a href="http://thaiwisdomkirkland.com/" target="_blank"> 
                    <ProjectsPage imageSrc={this.state.imageSrc[3]} projectNameTag={this.state.projectNameTag[3]} description={this.state.description[3]}
                    tools={this.state.tools[3]}
                    buttonLink={this.state.buttonLink[3]} 
                    /> 
                    </a>
                   </div>

                   <div className="project-div">
                    <a href="https://gluay88.github.io/" target="_blank"> 
                    <ProjectsPage imageSrc={this.state.imageSrc[4]} projectNameTag={this.state.projectNameTag[4]} description={this.state.description[4]}
                    tools={this.state.tools[4]}
                    buttonLink={this.state.buttonLink[4]} 
                    /> 
                    </a>
                   </div>

                   <div className="project-div">
                    <a href="https://github.com/learn-academy-2021-echo/pig-latin-porcuslatin" target="_blank"> 
                    <ProjectsPage imageSrc={this.state.imageSrc[5]} projectNameTag={this.state.projectNameTag[5]} description={this.state.description[5]}
                    tools={this.state.tools[5]}
                    buttonLink={this.state.buttonLink[5]} 
                    /> 
                    </a>
                   </div>

                    
                  
                </div>
             </div>
            <Footer />
        </div>
        )
    
    }   
}
export default Projects 