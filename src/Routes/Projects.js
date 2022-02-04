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
import catTinder from '../assets/cat_tinder.jpg';



class Projects extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            imageSrc: [project_pic1, project_pic2, project_pic3, project_pic4, project_pic5, project_pic6, catTinder],

            projectNameTag : ["Mangosteen Restaurant", "MGNPro/BMOPro", "Superior Siding Inc.", "Wisdom Bistro Kirkland", "Crystall Skulls", "PigLatin - React Game", "Cat Tinder"],

            description : [
                "Thai restaurant",
                "Graphic bulider",
                "Custom carpentry",
                "Asian fusion restaurant",
                "Tresture hunter game",
                "Language game",
                "Full Stack App"
            ],

            tools : [
                "JavaScript, HTML, CSS, Illustrator, PhotoShop",
                "JavaScript, HTML, CSS, Illustrator, PhotoShop",
                "Javascript, HTML, CSS, Illustrator, PhotoShop",
                "WordPress, PHP, HTML, CSS, Illustrator, PhotoShop",
                "JavaScript, HTML, CSS, Illustrator, PhotoShop",
                "React, JavaScript, HTML, CSS, Illustrator",
                "Rails, React, JavaScript, HTML, CSS, Illustrator"
            ],

            buttonLink: [
            <a href="http://www.719mangosteen.com/" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>,
           
            <a href="https://new.mgnonline.com/BMO/Canvas?tab=Graphics&id=0" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>,

            <a href="https://gluay88.github.io/portfolio-website/" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>,
           
            <a href="http://thaiwisdomkirkland.com/" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>,
           
            <a href="https://gluay88.github.io/" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>,

            <a href="https://github.com/learn-academy-2021-echo/pig-latin-porcuslatin" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>,

            <a href="https://github.com/learn-academy-2021-echo/cat-tinder-frontend-sphinx" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>
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
                    <a href="https://github.com/learn-academy-2021-echo/cat-tinder-frontend-sphinx" target="_blank"> 
                    <ProjectsPage imageSrc={this.state.imageSrc[6]} projectNameTag={this.state.projectNameTag[6]} description={this.state.description[6]}
                    tools={this.state.tools[6]}
                    buttonLink={this.state.buttonLink[6]} 
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

                    <div className="project-div">
                    <a href="https://gluay88.github.io/" target="_blank"> 
                    <ProjectsPage imageSrc={this.state.imageSrc[4]} projectNameTag={this.state.projectNameTag[4]} description={this.state.description[4]}
                    tools={this.state.tools[4]}
                    buttonLink={this.state.buttonLink[4]} 
                    /> 
                    </a>
                   </div>
                   

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

                   
                  
                </div>
             </div>
             
            <Footer />
            
        </div>
        )
    
    }   
}
export default Projects 