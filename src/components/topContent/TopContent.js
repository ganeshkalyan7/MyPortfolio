import React from "react";
import "./TopContent.css";
import { Link } from "react-scroll";

const TopContent = () => {
  return (
    <div className="topContent">
      <div className="topContent__container">
        <h1>MR.GANESH</h1>
        <h4>FULL STACK WEB DEVELOPER</h4>
        <a
          href="https://drive.google.com/file/d/1NSqEZusc5yn2lNkwqSrYzX17iZ030DXx/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          <button className="topContent__downloadButton">Download CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
          <button className="topContent__workButton">My Work</button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;
