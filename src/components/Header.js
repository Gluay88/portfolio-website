import React from 'react';
import Navigation from './Navigation';
import GitHub from './GitHub';
import EmailLogo from './EmailLogo';

import '../App.css';

function Header() {
   
        return ( 
            <header className="header">
                <a href="https://gluay88.github.io/portfolio-website">Gluay</a>
                <EmailLogo />
                <GitHub />
                <Navigation />
            </header>
         );
    }

 
export default Header;