import React from "react";
import { Link } from "react-scroll";
// import { animateScroll as scroll } from "react-scroll";
import './navbar.css';

const Navbar = () => (
  <>
    <nav className="navbar">
      <div className="desktopmenu">
        <Link
          activeClass='active'
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>

        <Link
          activeClass='active'
          to="resume"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          className="desktopMenuListItem"
        >
          Resume
        </Link>

        <Link
          activeClass='active'
          to="about"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>

        

        <Link
          activeClass='active'
          to="projects"
          spy={true}
          smooth={true}
          offset={-300}
          duration={500}
          className="desktopMenuListItem"
        >
          Projects
        </Link>

        
      </div>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-300} 
        duration={800}
      >
        <button className="desktopMenuButton">
          Contact Me
        </button>
      </Link>
    </nav>
  </>
);

export default Navbar;
