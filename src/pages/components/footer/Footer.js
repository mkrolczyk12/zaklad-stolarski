import React from 'react'
import { Link } from 'gatsby'

import { menuData } from "../header/components/NavbarMobile"

const Footer = () => {

    return(
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__section">
                    <h1 className="footer__section-title">Dane kontaktowe</h1>
                    <p className="footer__section-paragraph"><b className="highlighted-text">(+48) 345 789 436</b></p>
                    <p className="footer__section-paragraph"><b className="highlighted-text">toJestMiejsceNaEmail@gmail.com</b></p>
                </div>
                <div className="footer__section">
                    <h1 className="footer__section-title">Godziny pracy</h1>
                    <p className="footer__section-paragraph">Poniedziałek - Piątek: 7-16</p>
                    <p className="footer__section-paragraph">Sobota: 9-12</p>
                    <p className="footer__section-paragraph">Niedziela: wolne</p>
                </div>
                <div className="footer__section">
                    <h1 className="footer__section-title">Menu</h1>
                    {menuData.map((each, index) => (
                        <Link to={each.url}
                              className="footer__section-paragraph"
                              activeClassName="menu__link-item--active"
                              key={index}
                        >
                            {each.label}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="footer__copyright">
                <h1 className="footer__copyright-company">© 2021 Usługi Stolarskie ZAGÓROWSKI.</h1>
                <p
                    className="footer__copyright-author"
                >
                    Projekt i realizacja strony:
                    <a href="https://marcinkrolczyk.herokuapp.com/pl" target="_blank">
                        <b className="highlighted-text"> Marcin Królczyk</b>
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer