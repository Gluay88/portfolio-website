import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'
import { Link } from "react-router-dom";
  

function Navigation() {

    const [showMenu, setShowMenu] = useState(false)

    const transitions = useTransition(showMenu, {
        from: { opacity: 0, transform: "translateY(-100%)" },
        enter: { opacity: 1, transform: "translateY(0%)" },
        leave: { opacity: 0, transform: "translateY(-100%)" },
    
      })

      const transitionsOverlay = useTransition(showMenu, {
        from: { position: "absolute", opacity: 0 },
        enter: { opacity: .5 },
        leave: { opacity: 0 },
    
      })
    
//     let menu 
//     let menuOverlay

//     if(showMenu){
//         menu = 
//         <div className="nav-menu-small">
//             The menu
//         </div>
   

//     menuOverlay = 
//     <div className="menu-mask"
//     onClick={() => setShowMenu(false)}>

//     </div>
//  }

        return ( 
            <nav>
                
                <FontAwesomeIcon 
                icon={ faBars }
                onClick={() => setShowMenu(!showMenu)}
                 className="menu-icon-mobile"/>
                {/* { menuOverlay }
                { menu } */}

                {
                    transitionsOverlay(
                    (styles, item) => item &&
                    <animated.div style={styles} className="menu-mask" onClick={() => setShowMenu(false)}>
                    
                    </animated.div>
                    )
                }

                {
                    transitions(
                    (styles, item) => item &&
                    <animated.div style={styles} className="nav-menu-small">
                        
                        <ul className="nav-links">
                            <li>
                                <Link to="/" onClick={()=>setShowMenu(false)}>Home</Link>
                            </li>
                            <li>
                                <Link to="/Projects" onClick={()=>setShowMenu(false)}>Projects</Link>
                            </li>
                            <li>
                                <Link to="/About" onClick={()=>setShowMenu(false)}>About</Link>
                            </li>
                            <li>
                                <Link to="/Contact" onClick={()=>setShowMenu(false)}>Contact</Link>
                            </li>
            
                            
                        </ul>
                    </animated.div>
                    )
                }
                
            </nav>
         );
    }

 
export default Navigation;