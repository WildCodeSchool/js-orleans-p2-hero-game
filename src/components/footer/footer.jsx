import React from 'react'
import './footer.css'
import Github from './github_icon-icons.com_65450.png'
import WCS from './WCS.png'
import LogoMSH from './Logo_Entier.png'

function Footer() {
    return(
        <div>
            <div className="FOOTER_total">
                <ul className="FOOTER_div">
                    <p className="FOOTER_title">MY SUP'R HEROS</p>
                    <picture><img className="FOOTER_logo" src={LogoMSH} alt="logo MY SUP'R HEROS"/></picture>
                    <a href="#list"><p className="FOOTER_text"> Les Personnages</p></a>
                    <a href="#quizz"><p className="FOOTER_text">Le Quizz</p></a>
                    <a href="#accueil"><p className="FOOTER_text">Le jeux</p></a>
                </ul>
                <ul className="FOOTER_div">
                    <p className="FOOTER_title">WILD CODE SCHOOL</p>
                    <a href="https://www.wildcodeschool.com/fr-FR" target="_blank"><picture><img className="FOOTER_logoWCS" src={WCS} alt="logo wild code school"/></picture></a>
                    <p className="FOOTER_text"> Promo Dev 2020 / 2021</p>
                    <p className="FOOTER_text">Section JavaScript</p>
                </ul>
                <ul className="FOOTER_div">
                    <p className="FOOTER_title">ÉQUIPE DE PRODUCTION</p>
                    <div className="FOOTER_divDev">
                        <a href="https://github.com/Sylvie-Saidi" target="_blank"><picture><img className="FOOTER_logoGithub" src={Github} alt="lien github"/></picture></a>
                        <p className="FOOTER_text">Sylvie SAIDI</p>
                    </div>
                    <div className="FOOTER_divDev">
                        <a href="https://github.com/thomas-ode" target="_blank"><picture><img className="FOOTER_logoGithub" src={Github} alt="lien github"/></picture></a>
                        <p className="FOOTER_text">Thomas ODE</p>
                    </div>
                    <div className="FOOTER_divDev">
                        <a href="https://github.com/florentdesmarets" target="_blank"><picture><img className="FOOTER_logoGithub" src={Github} alt="lien github"/></picture></a>
                        <p className="FOOTER_text">Florent DESMARETS</p>
                    </div>
                    <div className="FOOTER_divDev">
                        <a href="https://github.com/MartyLucas45" target="_blank"><picture><img className="FOOTER_logoGithub" src={Github} alt="lien github"/></picture></a>
                        <p className="FOOTER_text">Marty LUCAS</p>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Footer