import React from "react";
import "./Home.css";
import Countdown from "./Countdown";
import DevfolioButton from "./DevfolioButton";

const Home = () => {
  const targetDate = new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString();

  return (
    <div className="home">
      <section className="section">
        <div className="text-main-home">
          <h1 className="main-title">Engage 4.0</h1>
          <h3 className="tagline">Hack · Engage · Build</h3>
        </div>
        <DevfolioButton />
        <h1>Results Would be announced in :</h1>
        <Countdown targetDate={targetDate} />
      </section>
    </div>
  );
};

export default Home;
