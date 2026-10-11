import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";
import { Link, NavLink } from "react-router-dom";

const PAGES = [
  { to: "/", label: "Home" },
  { to: "/Projects", label: "Projects" },
  { to: "/About", label: "About" },
  { to: "/Contact", label: "Contact" },
];

// Desktop shows the links in the header; phones use the hamburger menu.
// children: extra header items (the social icons) shown between them.
const Navigation = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const transitions = useTransition(showMenu, {
    from: { opacity: 0, transform: "translateY(-100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(-100%)" },
  });

  const transitionsOverlay = useTransition(showMenu, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 0.5 },
    leave: { opacity: 0 },
  });

  return (
    <nav className="site-nav">
      <ul className="nav-desktop">
        {PAGES.map((page) => (
          <li key={page.to}>
            <NavLink to={page.to} end={page.to === "/"}>
              {page.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {children}

      <button
        type="button"
        className="menu-toggle"
        aria-label="Open menu"
        aria-expanded={showMenu}
        onClick={() => setShowMenu(!showMenu)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {transitionsOverlay(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="menu-mask"
              onClick={() => setShowMenu(false)}
            ></animated.div>
          )
      )}

      {transitions(
        (styles, item) =>
          item && (
            <animated.div style={styles} className="nav-menu-small">
              <ul className="nav-links">
                {PAGES.map((page) => (
                  <li key={page.to}>
                    <Link to={page.to} onClick={() => setShowMenu(false)}>
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </animated.div>
          )
      )}
    </nav>
  );
};

export default Navigation;
