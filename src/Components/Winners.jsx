import React from "react";
import "./winners.css";

import ehlogo from "../assets/ehlogo.svg";

import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import Sponsors from "./Sponsors";
const Winners = () => {
  return (
    <div>
      <div className="container">
        <img className="ehlogo" src={ehlogo} alt="logo" />
        <h1 className="winners">Engage 2024 Winners</h1>
        <h4 className="winners">Congratulations to all the Winners</h4>
        <div className="cards-container">
          <div className="card">
            <img src={first} alt="Winner 1" />
            <div className="overlay">
              <span className="overlay-text">Winner 1</span>
            </div>
          </div>
          <div className="card raised">
            {" "}
            {/* Add the 'raised' class here */}
            <img src={second} alt="Winner 2" />
            <div className="overlay">
              <span className="overlay-text">Winner 2</span>
            </div>
          </div>
          <div className="card">
            <img src={third} alt="Winner 3" />
            <div className="overlay">
              <span className="overlay-text">Winner 3</span>
            </div>
          </div>
        </div>
      </div>
      <Sponsors />
    </div>
  );
};

export default Winners;
