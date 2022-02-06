import React, { Component } from 'react';
import '../App.css';

import robot from '../assets/pagenotfound.png';

class NotFound extends Component {
  render() {
    return (
        <div id="not-found-page">
        <img src={robot} alt="404 page not found" />
        
        <a href="/">Back to homepage</a>
        </div>
    )
  }
}
 export default NotFound;
 