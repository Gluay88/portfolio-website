import React from "react";

var currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer-main">
      <h2>
        &copy; copyright {currentYear} -
        <a href="https://gluay88.github.io/portfolio-website"> Glu@y</a>
      </h2>
    </footer>
  );
};

export default Footer;
