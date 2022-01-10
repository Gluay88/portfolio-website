import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import project_pic2 from '../assets/project_pic2.jpg';

function About() {
    return (
        <div>
            <Header />
            <div className="container-all">
                <h2>About Gluay Here!</h2>
                <div id="about-page">
                    <img id="aboutPage-photo" src={project_pic2}/>
                        <div id="aboutText">
                            <h3>Gluay stuff goes here!</h3>
                            <br/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel diam lacus. Vestibulum a velit tortor. Donec finibus quam sapien, sed dapibus nisi porttitor vitae. Maecenas sodales cursus erat, sit amet ultrices enim blandit at. Nam egestas malesuada justo non iaculis. In suscipit, augue eget malesuada pretium, libero metus pellentesque nunc, quis finibus felis risus sit amet leo. Vivamus ante est, aliquam non tellus nec, ultrices porttitor nisi. Nullam mi nisl, dignissim quis lacus eu, malesuada bibendum velit.
                            </p>
                        </div>
                    </div>
              
           </div>
           <Footer />
        </div>
    )
}
export default About 