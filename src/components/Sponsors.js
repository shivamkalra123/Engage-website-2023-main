import Devfolio from '../components/assets/sponsers/Devfolio.png'
import Polygon from '../components/assets/sponsers/polygon_logo_white.png'
import Replit from '../components/assets/sponsers/Replit.png'
export default function Sponsors() {
    return (
        <div className="sponsors" id="sponsors">
            <div className="heading">Sponsors</div>
            <div className="temp-sponsors">Gold Sponsers</div>
            <div className='images_sponsers'>
             <a href="https://devfolio.co/"><img className='devfolio' id="gold" src={Devfolio} alt='DEVFOLIO LOGO'/></a> 
               <a href="https://polygon.technology/"> <img className='devfolio' id="polygon" src={Polygon} alt='POLYGON LOGO'/></a>
            </div>
            <div className='silverSponsers'>Silver Sponsers</div>
            <div className="silverImages">
              <a href="https://replit.com/"><img className="devfolio" id="diff"  src={Replit} alt="REPLIT LOGO"></img></a>
           
            </div>
        </div>
    )
}