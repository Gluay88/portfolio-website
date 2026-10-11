import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import GitHub from "./GitHub";
import EmailLogo from "./EmailLogo";
import LinkedInLogo from "./LinkedinLogo";

import "../App.css";

const Header = () => {
  return (
    <header className="header">
      <Link className="brand" to="/">
        Glu@y
      </Link>
      <Navigation>
        <div className="header-social">
          <EmailLogo />
          <LinkedInLogo />
          <GitHub />
        </div>
      </Navigation>
    </header>
  );
};

export default Header;
