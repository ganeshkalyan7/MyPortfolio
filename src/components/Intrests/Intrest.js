import React from "react";
import { Element } from "react-scroll";
import Bike from "../../image/bike.jpg";
import Football from "../../image/Football2.jpg";
import music from "../../image/music.jpg";
import photoShop from "../../image/photoShop.jpg";
import "./Intrest.css";

function Intrest() {
  return (
    <Element name="intrests" className="intrests">
      <h1>INTREST </h1>
      <div className="intrests__content">
        <div className="intrests__bike">
          <img src={Bike} className="bike" alt="bike" />
          <br />
          <h3>
            <b>Bike Trevelling</b>
          </h3>
        </div>
        <div className="intrests__football">
          <img src={Football} className="bike" alt="football" />
          <h3>
            <b>Love Football</b>
          </h3>
        </div>

        <div className="intrests__music">
          <img src={music} className="bike" alt="music" />
          <h3>
            <b>music</b>
          </h3>
        </div>
        <div className="intrests__editing">
          <img src={photoShop} className="bike" alt="editing" />
          <h3>
            <b>editing</b>
          </h3>
        </div>
      </div>
    </Element>
  );
}

export default Intrest;
