import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import project_pic2 from '../assets/project_pic2.jpg';
import GluayPhoto from '../assets/gluay_photo.jpg';

function About() {
    return (
        <div>
            <Header />
            <div className="container-all">
                <h2>About Gluay Here!</h2>
                <div id="about-page">
                    <img id="aboutPage-photo" src={GluayPhoto}/>
                        <div id="aboutText">
                            <h3>Gluay stuff goes here!</h3>
                            <br/>
                            <p>Write a bit about yourself here..</p>
                            <br />
                            <p>Background?? Degress?? -- Timeline??</p>
                            <br />
                            <p>Works you have done in the past?? -- Timeline??</p>
                            <br />
                            <p>Softwares you use
                            <br />
                            Ruby on Rails, Ruby, React, JavaScript, HTML, CSS, AferEffect, Illustrator, PhotoShop..??</p>
                        </div>
                    </div>
              
           </div>
           <Footer />
        </div>
    )
}
export default About 