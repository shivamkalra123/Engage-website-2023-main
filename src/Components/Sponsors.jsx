import React from 'react';
import './Sponsors.css';
import AnimatedTitle from './AnimatedTitle';

// Import sponsor images from assets
import devfolio from '../assets/devfolio.png';
import poly from '../assets/poly.png';
import woldram from '../assets/woldram.png';
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
    <div id='Sponsors'>
      <AnimatedTitle text="SPONSORS" />
      <div className="sponsors-flex">
        
        <div className="sponsorship">
          <h1 className='gold'>Platform Partners</h1>
          <div className="images-sponsors">
            <a href="https://devfolio.co/" target="_blank" rel="noopener noreferrer">
              <img src={devfolio} alt="Gold Sponsor 1" />
            </a>
            <a href="https://www.polygon.technology/" target="_blank" rel="noopener noreferrer">
              <img src={poly} alt="Gold Sponsor 2" />
            </a>
            <a href="https://devfolio.co/blog/content/images/size/w600/2021/04/ethindia-1.jpg" target="_blank" rel="noopener noreferrer">
              <img src={poly} alt="Gold Sponsor 3" />
            </a>
          </div>
          
        </div>

        <div className="sponsorship">
          <h1 className='silver'>Partners</h1>
          <div className="images-sponsors">
            <a href="https://www.wolfram.com/" target="_blank" rel="noopener noreferrer">
              <img src={woldram} alt="Silver Sponsor 1" />
            </a>
            
          </div>
        </div>

<h1 className='gold'>COMING SOON</h1>


      </div>
    </div>
  );
}

export default Sponsors;
