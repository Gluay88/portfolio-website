import React, { Component } from "react";

var currentYear = new Date().getFullYear();

class Footer extends Component {
  render() {
    return (
      <footer className="footer-main">
        <h2>
          &copy; copyright {currentYear} -
          <a href="https://gluay88.github.io/portfolio-website"> Glu@y</a>
        </h2>
      </footer>
    );
  }
}

export default Footer;
