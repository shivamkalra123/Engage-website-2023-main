import React from "react";
import "./Home.css";
import Countdown from "./Countdown";
import DevfolioButton from "./DevfolioButton";

// Set target time for 4 hours from now
// const fixedTargetTime = new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString();

const Home = () => {
  return (
    <div className="home">
      <section className="section">
        <div className="text-main-home">
          <h1 className="main-title">Engage 4.0</h1>
          <h3 className="tagline">Hack · Engage · Build</h3>
        </div>
        <DevfolioButton />
        <h1>Results Will be Announced In:</h1>
        <Countdown />
      </section>
    </div>
  );
};

export default Home;
