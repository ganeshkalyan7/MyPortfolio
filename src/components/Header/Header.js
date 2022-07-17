import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h1>
          DEVELOP<span>ER</span>
        </h1>
      </div>
      <div className="header__right">
        <Link to="about" smooth={true} duration={500}>
          <h4>aboutme</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <h4>skills</h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <h4>projects</h4>
        </Link>
        <Link to="intrests" smooth={true} duration={500}>
          <h4>intrest</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <h4>contact</h4>
        </Link>
      </div>
    </div>
  );
};

export default Header;
