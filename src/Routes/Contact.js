import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';



class Contact extends Component {


  constructor(props){
      super(props)
      this.state = {      
        
        }
      }
    
    
    render() {
      return (
        <div>
          <Header />
          <div className="container-all">
              <h2>Please say hello!</h2>  

                <div id="contact-form">
                  <h2>Contact Glu@y <svg style={{width:"28px", transform: "rotate(-45deg)", margin:"0 0 0 -8px"}} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg></h2> 
                <form>
                  <label for="fname">First Name</label>
                  <input type="text" id="name" placeholder="Enter name" required/>

                  <label for="lname">Last Name</label>
                  <input type="text" id="lastname" placeholder="Enter last name" required/>

                  <label for="email">Email</label>
                  <input type="text" id="email" placeholder="example@email.com" required/>
                  
                  <label for="message">Message</label>
                  <textarea type="text" id="message" placeholder="Enter message" required>
                  </textarea>
                  
                  <button>Submit</button>
                </form>
                      
                </div> 
              
          </div> 
          <Footer />
        </div>
      )
    }   
}
  
export default Contact 