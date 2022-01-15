import React from 'react';
import '../App.css';
import Header from '../components/Header';
// import ContentHome from '../components/ContentHome';
import AnimationHome from '../components/AnimationHome';
import Footer from '../components/Footer';


function Home() {
    return (
        <div>
            <Header />
            <AnimationHome />
            <div className="container-all">
                {/* <ContentHome />    */}
                
            </div>
            <Footer />
        </div>
    )
}
export default Home 