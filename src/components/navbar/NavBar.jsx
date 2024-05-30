import { useState } from "react";
import ashan_logo from "./../../assets/ashan_logo.svg";
import "./NavBar.css";

function NavBar() {
  const [navbarActive, setNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  return (
    <nav
      className="navbar is-fixed-top custom-navbar pb-2 pt-2 pr-3 pl-3"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="">
            <img src={ashan_logo} className="custom-logo" />
          </a>

          <a
            role="button"
            className={`navbar-burger ${navbarActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={toggleNavbar}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${navbarActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <a className="navbar-item" href="#top" onClick={toggleNavbar}>
              Home
            </a>
            <a className="navbar-item" href="#about" onClick={toggleNavbar}>
              About Me
            </a>
            <a
              className="navbar-item"
              href="#experience"
              onClick={toggleNavbar}
            >
              Experience
            </a>
            <a className="navbar-item" href="#education" onClick={toggleNavbar}>
              Education
            </a>
            <a className="navbar-item" href="#blog" onClick={toggleNavbar}>
              Blog
            </a>
            <a
              className="navbar-item"
              href="#volunteering"
              onClick={toggleNavbar}
            >
              Volunteering
            </a>
            {/* <a className="navbar-item">Portfolio</a>
            <a className="navbar-item">Volunteering</a> */}

            {/* <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item is-selected">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div> */}
          </div>

          {/* <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
