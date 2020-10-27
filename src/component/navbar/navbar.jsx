import React from 'react';
import './navbar.css';
import logo from './Logo_Mini.png';

function Navbar() {
    return(
        <div>
            <nav className="NAVBAR_total" id="Marty">
                <ul className="NAVBAR_nav">
                    <div className="NAVBAR_divLogo">
                        <p className="NAVBAR_mysuprheros">MY SUP'R HEROS</p>
                        <picture className="NABAR_picLogo"><img className="NAVBAR_logo" src={logo} alt="Logo My Sup'R Heros"/></picture>
                    </div>
                    <div className="NAVBAR_rightDiv">
                        <ul className="NAVBAR_navList">
                            <li className="NAVBAR_title">JEUX</li>
                            <li className="NAVBAR_title">PERSONNAGES</li>
                            <li className="NAVBAR_title">QUIZZ</li>
                        </ul>
                    </div>
                </ul>
            </nav>
        </div>
    )
    
};



export default Navbar;

