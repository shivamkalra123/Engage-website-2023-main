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
            <a href="https://devfolio.co/projects/flick-0945">
              <img src={first} alt="Winner 1" />
              <div className="overlay">
                <span className="overlay-text">Hacktopians</span>
              </div>
            </a>
          </div>
          <div className="card raised">
            <a href="https://devfolio.co/projects/kisan-sathi-a6d7">
              {" "}
              {/* Add the 'raised' class here */}
              <img src={second} alt="Winner 2" />
              <div className="overlay">
                <span className="overlay-text">Agritech Architects</span>
              </div>
            </a>
          </div>
          <div className="card">
            <a href="https://devfolio.co/projects/facemed-e7cf">
              <img src={third} alt="Winner 3" />
              <div className="overlay">
                <span className="overlay-text">CyberDawgs</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Sponsors />
    </div>
  );
};

export default Winners;
