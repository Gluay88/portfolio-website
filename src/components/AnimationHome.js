import React, { Component } from 'react'
import './AnimationStyle.css';
import Typist from 'react-typist';
import GluayHomePhoto from '../assets/gluayLaptop.png';
// import Laptop from '../assets/laptop.svg';
import Laptop from '../assets/laptop.png';



export class AnimationHome extends Component {
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    render() {
        return (
       <div className="homepage_gluay">
          
                <div className="gluay">
                    <div className="gluayInfo">
                        <Typist cursor={{ show: false}}>
                            <Typist.Delay ms={1000} />
                            <h4>Hello there!</h4>
                        </Typist>
                        <br />
                        <div className="description">
                            <Typist cursor={{ show: false}}>
                            <Typist.Delay ms={2300} />
                                <h1>
                                    I'm <span>Glu@y</span>, <br /> <span>full stack developer</span>.
                                </h1>
                            </Typist>
                        </div>
                        <br />
                        <div className="text-description">
                            <Typist cursor={{ show: false}}>
                            <Typist.Delay ms={4600} />
                                <h3>
                                    I love to code and design.
                                </h3>
                            </Typist>
                            <br />    
                        </div> 
                        <Typist cursor={{ show: false}}>
                            <Typist.Delay ms={6800} />
                                <a href="https://gluay88.github.io/portfolio-website/#/Projects">My Projects</a>
                        </Typist>    
                    </div>  
                    <div className="gluay_home_pic">
                        {/* <img src={GluayHomePhoto} alt="Gluay Workign Picture"/>     */}
                        <img src={Laptop} alt="laptop" />
                    </div>
                        
                </div>
            
        </div>   
           
        )
    }
}

export default AnimationHome
