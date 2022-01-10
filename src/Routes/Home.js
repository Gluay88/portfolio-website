import React from 'react';
import '../App.css';
import Header from '../components/Header';
import ContentHome from '../components/ContentHome';
import Footer from '../components/Footer';


function Home() {
    return (
        <div>
            <Header />
            <div className="container-all">
                <ContentHome />     
            </div>
            <Footer />
        </div>
    )
}
export default Home 