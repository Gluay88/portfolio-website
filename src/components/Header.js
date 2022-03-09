import React from "react";
import Navigation from "./Navigation";
import GitHub from "./GitHub";
import EmailLogo from "./EmailLogo";
import LinkedInLogo from "./LinkedinLogo";

import "../App.css";

function Header() {
  return (
    <header className="header">
      <a href="https://gluay88.github.io/portfolio-website">Glu@y</a>
      <EmailLogo />
      <LinkedInLogo />
      <GitHub />
      <Navigation />
    </header>
  );
}

export default Header;
