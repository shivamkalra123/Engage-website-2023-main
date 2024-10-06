import Devfolio from '../components/assets/sponsers/Devfolio.png'
import Polygon from '../components/assets/sponsers/polygon_logo_white.png'
import Replit from '../components/assets/sponsers/Replit.png'
import Beeceptor from '../components/assets/sponsers/beeceptor_logo.png'
import Wolfram from '../components/assets/sponsers/Wolfram_logo.png'
import Rosenfeld from '../components/assets/sponsers/RosenFeld_logo.webp'
import Stickermule from '../components/assets/sponsers/sticker-mule-logo-white.png'
import Echo3d from '../components/assets/sponsers/echo3D_logo.png'
import GDGIEM from '../components/assets/sponsers/IEM.png'
import GDGGGN from '../components/assets/sponsers/GGN.png'
import GDGNSUT from '../components/assets/sponsers/NSUT.png'

export default function Sponsors() {
  return (
    <div className="sponsors" id="sponsors">
      <div className="heading">Sponsors</div>
      <div className="temp-sponsors">Gold Sponsers</div>
      <div className='images_sponsers'>
        <a href="https://devfolio.co/"><img className='devfolio' id="gold" src={Devfolio} alt='DEVFOLIO LOGO' /></a>
        <a href="https://polygon.technology/"> <img className='devfolio' id="polygon" src={Polygon} alt='POLYGON LOGO' /></a>
      </div>
      <div className='silverSponsers'>Silver Sponsers</div>
      <div className="silverImages">
        <a href="https://replit.com/"><img className="silver1" id="diff" src={Replit} alt="REPLIT LOGO"></img></a>
        <a href="https://beeceptor.com/"><img className="silver" id="diff" src={Beeceptor} alt="BEECEPTOR LOGO"></img></a>
        <a href="https://www.wolfram.com/"><img className="silver" id="diff" src={Wolfram} alt="WOLFRAM LOGO"></img></a>

      </div>
      <div className="silverImages">
        <a href="https://rosenfeldmedia.com/"><img className="silver1" id="diff" src={Rosenfeld} alt="ROSENFELD LOGO"></img></a>
        <a href="https://www.stickermule.com/"><img className="silver" id="diff" src={Stickermule} alt="STICKERMULE LOGO"></img></a>
        <a href="https://www.echo3d.com/"><img className="silver" id="diff" src={Echo3d} alt="ECHO3D LOGO"></img></a>


      </div>
      <div className='communityHeading'>Community Partners</div>
      <div className="silverImages">
        <a href="https://gdg.community.dev/gdg-gurugram/"><img className="silver" id="diff" src={GDGGGN} alt="ROSENFELD LOGO"></img></a>
        <a href="https://gdsc.community.dev/netaji-subhas-university-of-technology-delhi/"><img className="silver" id="diff" src={GDGNSUT} alt="STICKERMULE LOGO"></img></a>
        <a href="https://gdsc.community.dev/institute-of-engineering-management-kolkata/"><img className="silver" id="diff" src={GDGIEM} alt="ECHO3D LOGO"></img></a>

      </div>

    </div>
  )
}