import { useEffect, useState } from "react";
import engagelogo from "../icons/engagelogo.svg"
import mlogo from "../icons/momentum_logo.png";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='main'>
        <div id="mainNavbar" className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'open' : ''}`}>
            <div className="engage-logo">
                <img src={engagelogo} alt="Engage Logo" className="engage-logo" />
            </div>

            <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <div className={`links ${menuOpen ? 'open' : ''}`}>
                <div><a href="#aboutus">About Us</a></div>
                <div><a href="#tracks">Tracks</a></div>
                <div><a href="#sponsors">Sponsors</a></div>
                <div><a href="#faq">FAQ</a></div>
                
            </div>
            <div><a href="https://momentum.ncuindia.edu/"><img className="momentum-logo" src={mlogo} alt="logo" /></a></div>
        </div>
        </div>
    );
}



