import React from "react";
import "./SkillContainer.css";
import skillImg from "../../image/skill.jpg";
// import LinearProgress from "@material-ui/core/LinearProgress";
import { LinearProgress } from "@mui/material";
import { Element } from "react-scroll";

const SkillContainer = () => {
  return (
    <Element className="skillContainer" name="skills">
      <div className="skillContainer__image">
        <img src={skillImg} alt="" />
      </div>
      <div className="skillContainer__text">
        <h1>SKILLSET</h1>
        <div className="skillContainer__skillSet">
          <h5>Html</h5>
          <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Css</h5>
          <div className="skillContainer__slider skillContainer__slider2">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Javascript</h5>
          <div className="skillContainer__slider skillContainer__slider3">
            <LinearProgress variant="determinate" value={85} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>React js</h5>
          <div className="skillContainer__slider skillContainer__slider4">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Mysql</h5>
          <div className="skillContainer__slider skillContainer__slider4">
            <LinearProgress variant="determinate" value={60} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>MongoDB</h5>
          <div className="skillContainer__slider skillContainer__slider5">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Node js</h5>
          <div className="skillContainer__slider skillContainer__slider6">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Express js</h5>
          <div className="skillContainer__slider skillContainer__slider7">
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Aws</h5>
          <div className="skillContainer__slider skillContainer__slider8">
            <LinearProgress variant="determinate" value={30} />
          </div>
        </div>
      </div>
      <div className="skillContainer__sliderTools">
        <div className="skillContainer__text">
          <h1>TOOLS</h1>
          <ul>
            <li>
              <h4>GIT</h4>
            </li>
            <li>
              <h4>NETLIFY</h4>
            </li>
            <li>
              <h4>HEROKU</h4>
            </li>
          </ul>
          <br /> <br />
          <h1>OTHERS</h1>
          <ul>
            <li>
              <h4>MATERIAL UI</h4>
            </li>
            <li>
              <h4>BOOTSTARP</h4>
            </li>
          </ul>
        </div>
      </div>
    </Element>
  );
};

export default SkillContainer;
