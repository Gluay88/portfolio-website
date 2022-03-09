import React, { Component } from "react";
import "../App.css";

class LinkedinLogo extends Component {
  render() {
    return (
      <>
        <div className="linkedin-logo">
          <a href="https://www.linkedin.com/in/gluay-s-wang/" target="_blank">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 86.73 86.73"
            >
              <path
                class="cls-1"
                fill="currentColor"
                d="M78.26,0H8.47A8.47,8.47,0,0,0,0,8.47V78.26a8.47,8.47,0,0,0,8.47,8.47H78.26a8.47,8.47,0,0,0,8.47-8.47V8.47A8.47,8.47,0,0,0,78.26,0ZM28.21,74.71H15.28V32.92H28.21ZM21.68,27.44a7.71,7.71,0,1,1,7.65-7.71A7.68,7.68,0,0,1,21.68,27.44Zm55,47.27H63.82V52.77c0-6-2.29-9.38-7-9.38-5.18,0-7.89,3.51-7.89,9.38V74.71H36.48V32.92H48.89v5.63a14.57,14.57,0,0,1,12.6-6.91c8.86,0,15.2,5.41,15.2,16.61Z"
                transform="translate(0 0)"
              />
            </svg>
          </a>
        </div>
      </>
    );
  }
}

export default LinkedinLogo;
