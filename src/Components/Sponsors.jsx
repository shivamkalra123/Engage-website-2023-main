import React from "react";
import "./Sponsors.css";
import AnimatedTitle from "./AnimatedTitle";

// Import sponsor images from assets
import devfolio from "../assets/devfolio.png";
import poly from "../assets/poly.png";
import woldram from "../assets/woldram.png";
import internshala from "../assets/internshala-logo.png";
// import codingninjas from '../assets/woldram.png';
// import internshala from '../assets/woldram.png';
// import ethindia from '../assets/woldram.png';
import bee from "../assets/bee.png";
import sticker from "../assets/sticker.png";
import echo from "../assets/echo.png";
import rosen from "../assets/rosen.webp";
import replit from "../assets/replit.png";
import gdsc1 from "../assets/gdsc1.png";
import gdg from "../assets/gdg.png";
import gdscncut from "../assets/gdscncut.png";
import devfolio from '../assets/devfolio.png';
import poly from '../assets/poly.png';
import woldram from '../assets/woldram.png';
// import codingninjas from '../assets/woldram.png';
// import internshala from '../assets/woldram.png';
// import ethindia from '../assets/woldram.png';
import bee from '../assets/bee.png';
import sticker from '../assets/sticker.png';
import echo from '../assets/echo.png';
import rosen from '../assets/rosen.webp';
import replit from '../assets/replit.png';
import gdsc1 from '../assets/gdsc1.png';
import gdg from '../assets/gdg.png';
import gdscncut from '../assets/gdscncut.png';

function Sponsors() {
  return (
    <div id="Sponsors">
      <AnimatedTitle text="SPONSORS" />
      <div className="sponsors-flex">
        <div className="sponsorship">
          <h1 className="gold">Platform Partners</h1>
        
        <div className="sponsorship">
          <h1 className='gold'>Platform Partners</h1>
          <div className="images-sponsors">
            <a
              href="https://devfolio.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={devfolio} alt="DEVFOLIO LOGO" />
            <a href="https://devfolio.co/" target="_blank" rel="noopener noreferrer">
              <img src={devfolio} alt="DEVFOLIO LOGO" />
            </a>
            <a
              href="https://www.polygon.technology/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={poly} alt="POLYGON LOGO" />
            </a>
            <a
              href="https://ethindia.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://devfolio.co/blog/content/images/size/w600/2021/04/ethindia-1.jpg"
                alt="ETHINDIA LOGO"
              />
            <a href="https://www.polygon.technology/" target="_blank" rel="noopener noreferrer">
              <img src={poly} alt="POLYGON LOGO" />
            </a>
            <a href="https://ethindia.co/" target="_blank" rel="noopener noreferrer">
              <img src="https://devfolio.co/blog/content/images/size/w600/2021/04/ethindia-1.jpg" alt="ETHINDIA LOGO" />
            </a>
          </div>
          
        </div>

        <div className="sponsorship">
          <h1 className="silver">Educational Partners</h1>
          <h1 className='silver'>Educational Partners</h1>
          <div className="images-sponsors">
            <a
              href="https://internshala.com/user_preference/preferences"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={internshala} alt="internshala" height={300} />
            </a>
            <a
              href="https://www.codingninjas.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/C5612AQGq1UcbuVociQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1588843291712?e=2147483647&v=beta&t=GjHzfs9MlZP_pkTeIhaOMtNuKmHSWsh2661jm5GQyhk"
                alt="coding ninjas"
              />
            </a>
            <a
              href="https://www.wolfram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={woldram} alt="wolfram" />
            <a href="https://internshala.com/user_preference/preferences" target="_blank" rel="noopener noreferrer">
              <img src="https://internshala.com//static/images/internshala_og_image.jpg" alt="internshala" />
            </a>
            <a href="https://www.codingninjas.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://media.licdn.com/dms/image/v2/C5612AQGq1UcbuVociQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1588843291712?e=2147483647&v=beta&t=GjHzfs9MlZP_pkTeIhaOMtNuKmHSWsh2661jm5GQyhk" alt="coding ninjas" />
            </a>
            <a href="https://www.wolfram.com/" target="_blank" rel="noopener noreferrer">
              <img src={woldram} alt="wolfram" />
            </a>
            
          </div>
        </div>

        {/* <h1 className='gold'>COMING SOON</h1> */}
{/* <h1 className='gold'>COMING SOON</h1> */}


      </div>
    </div>
  );
}

export default Sponsors;
