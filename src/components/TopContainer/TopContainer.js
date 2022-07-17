import React from "react";
import "./TopContainer.css";
import { Element } from "react-scroll";
import TopContent from "../topContent/TopContent";

const TopContainer = () => {
  return (
    <Element className="topContainer" name="about">
      <TopContent />
    </Element>
  );
};

export default TopContainer;
