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
            projectNameTag : ["Mangosteen Thai Restaurant", "MGN Online Pro", "Superior Siding Inc.", "Wisdom Bistro Kirkland"],
            description : ["JavaScript, HTML, CSS, Illustrator, PhotoShop", "UX and UI Design, JavaScript, HTML, CSS, Illustrator, PhotoShop", "Javascript, HTML, CSS, Illustraator, PhotoShop", "WordPress, PHP, HTML, CSS, Illustrator, PhotoShop"],
            buttonLink: [<a href="http://www.719mangosteen.com/" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>, <a href="https://new.mgnonline.com/BMO/Canvas?tab=Graphics&id=0" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>, <a href="#" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>,
            <a href="http://thaiwisdomkirkland.com/" target="_blank" style={{color:'white', textDecoration: 'none'}}>More..</a>
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

                    <ProjectsPage imageSrc={this.state.imageSrc[0]} projectNameTag={this.state.projectNameTag[0]} description={this.state.description[0]}
                    buttonLink={this.state.buttonLink[0]} />  

                    <ProjectsPage imageSrc={this.state.imageSrc[1]} projectNameTag={this.state.projectNameTag[1]} description={this.state.description[1]}
                    buttonLink={this.state.buttonLink[1]} 
                    />

                    <ProjectsPage imageSrc={this.state.imageSrc[2]} projectNameTag={this.state.projectNameTag[2]} description={this.state.description[2]}
                    buttonLink={this.state.buttonLink[2]} 
                    /> 

                    <ProjectsPage imageSrc={this.state.imageSrc[0]} projectNameTag={this.state.projectNameTag[3]} description={this.state.description[3]}
                    buttonLink={this.state.buttonLink[3]} 
                    /> 
                   

                    
                  
                </div>
             </div>
            <Footer />
        </div>
        )
    
    }   
}
export default Projects 