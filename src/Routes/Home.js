import React from 'react';
import '../App.css';
import Header from '../components/Header';
// import ContentHome from '../components/ContentHome';
import AnimationHome from '../components/AnimationHome';
import Footer from '../components/Footer';
import Rails from '../assets/rails_logo.svg';
import Ruby from '../assets/ruby_logo.svg';
import React_logo from '../assets/react_logo.svg';
import JS_logo from '../assets/JS_logo.svg';
import HTML_logo from '../assets/html_logo.svg';
import CSS_logo from '../assets/css_logo.svg';
import Wordpress from '../assets/wordpress.svg';



function Home() {
    return (
        <div>
            <Header />
            <AnimationHome />
            <div className="container-all">
                {/* <ContentHome />    */}
                
            </div>
            <div className="software">
                        <img src={Rails} alt="Ruby on Rails logo" />
                        <img src={Ruby} alt="Ruby logo" />
                        <img src={React_logo} alt="React logo" />
                        <img src={JS_logo} alt="JavaScript logo" />
                        <img src={HTML_logo} alt="HTML logo" />
                        <img src={CSS_logo} alt="CSS logo" />
                        <img src={Wordpress} alt="Wordpress logo" />
                    </div>
            <Footer />
        </div>
    )
}
export default Home 