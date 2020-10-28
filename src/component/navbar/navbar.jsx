import React from 'react';
import './navbar.css';
import logo from './Logo_Mini.png';
import open from './annim'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            class: 'NAVBAR_burgerMenu'
        };
    }

    render(){
        return(
            <div>
                <nav className="NAVBAR_total" id="Marty">
                    <div className="NAVBAR_nav">
                        <div className="NAVBAR_divLogo">
                            <p className="NAVBAR_accueil">ACCUEIL</p>
                            <picture className="NAVBAR_picLogo"><img className="NAVBAR_logo" src={logo} alt="Logo My Sup'R Heros"/></picture>
                        </div>
                        
                        <div className="NAVBAR_rightDiv">
                            <ul className="NAVBAR_navList">
                                <li className="NAVBAR_title">JEUX</li>
                                <li className="NAVBAR_title">PERSONNAGES</li>
                                <li className="NAVBAR_title">QUIZZ</li>
                            </ul>
                        </div>
                        <a className={this.state.class} href="#" onClick={ open }>
                            <span className="NAVBAR_spanTop"></span>
                            <span className="NAVBAR_spanMid"></span>
                            <span className="NAVBAR_spanBot"></span>
                        </a>
                    </div>
                </nav>
            </div>
        )
    }
};



export default Navbar;

