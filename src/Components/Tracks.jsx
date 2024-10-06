import React from "react";
import "./Tracks.css";
import AnimatedTitle from "./AnimatedTitle";

// Import GIFs from the assets folder

function Tracks() {
  return (
    <div id="Tracks">
      <AnimatedTitle text="TRACKS" />
      {/* <div className="images">
        <div className="tracks">
          <img src={blockchain1} alt="Web3 and Blockchain" />
          <h2>Web3 and Blockchain</h2>
        </div>
        <div className="tracks">
          <img src={cyber} alt="Cyber Security" />
          <h2>Cyber Security</h2>
        </div>
        <div className="tracks">
          <img src={ai1} alt="Artificial Intelligence" />
          <h2>Artificial Intelligence</h2>
        </div>
        <div className="tracks">
          <img src={arvr1} alt="AR/VR" />
          <h2>AR/VR</h2>
        </div>
        <div className="tracks">
          <img src={innovation} alt="Open Innovation" />
          <h2>Open Innovation</h2>
        </div>
      </div> */}
    </div>
  );
}

export default Tracks;
