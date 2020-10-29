import React from 'react';
import './navbar.css';
import logo from './Logo_Mini.png';
import open from './annim';
import { Switch, Route, Link } from 'react-router-dom';
import Jeux from '../pages/jeux';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }

    render() {

        return (

            <div>
                <nav className="NAVBAR_total" id="Marty">
                    <div className="NAVBAR_nav">
                        <div className="NAVBAR_divLogo">
                            <Link className="NAVBAR_accueil" to="/" >ACCUEIL</Link>
                            <picture className="NAVBAR_picLogo"><img className="NAVBAR_logo" src={logo} alt="Logo My Sup'R Heros" /></picture>
                        </div>

                        <div className="NAVBAR_rightDiv">
                            <ul className="NAVBAR_navList">
                                <Link className="NAVBAR_title" to="/game" >JEUX</Link>
                                <a href="#list"><li className="NAVBAR_title">PERSONNAGES</li></a>
                                <a href="#quizz"><li className="NAVBAR_title">QUIZZ</li></a>
                            </ul>
                        </div>
                        <a className="NAVBAR_burgerMenu" href="#" onClick={open}>
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

