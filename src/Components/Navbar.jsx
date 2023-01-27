import React, { useState } from "react";
import "../Styles/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuMotion } from "react-icons/cg";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className='navbar'>
      <h3 className='logo'>Logo</h3>
      <ul className={isMobile ? "nav__links__mobile" : "nav__links"}
        onClick={() => setIsMobile(false)}
      >
        <Link
          to="home-wrapper"
          activeClass="active"
          spy={true}
          smooth={true}
          className='home'
          onClick={() => setIsMobile(false)}
        >
          <h4> Home </h4>
        </Link>
        <Link
          to="about-wrapper"
          activeClass="active"
          spy={true}
          smooth={true}
          className='about'
          onClick={() => setIsMobile(false)}
        >
          <h4> About </h4>
        </Link>
        <Link
          to="projects-wrapper"
          activeClass="active"
          spy={true}
          smooth={true}
          className='projects'
          onClick={() => setIsMobile(false)}
        >
          <h4> Projects </h4>
        </Link>

        <Link
          to="skills-wrapper"
          activeClass="active"
          spy={true}
          smooth={true}
          className='skills'
          onClick={() => setIsMobile(false)}
        >
          <h4> Skills </h4>
        </Link>

        <Link
          to="contact-wrapper"
          activeClass="active"
          spy={true}
          smooth={true}
          className='contact'
          onClick={() => setIsMobile(false)}
        >
          <h4> Contact </h4>
        </Link>
      </ul>
      <button className='mobile__menu__icon' onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <CgMenuMotion /> : <GiHamburgerMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
