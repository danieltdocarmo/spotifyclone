import React from 'react';

import { Link } from 'react-router-dom';

import './index.css';
import Logo from '../../assets/imgs/logo.png';
import Face from '../../assets/icons/facebook.svg';
import Insta from '../../assets/icons/instagram.svg';
import Twitter from '../../assets/icons/twitter.svg';

export default function Footer(){
    return (
        <footer className="footer">
            <nav className="nav-footer">
                <Link to="/"><img src={Logo} className="logo-img" alt="Logo Spotify"/></Link>
                
                <ul className="company-list">
                    <li className="company-list-title"> Empresa</li>
                    <li className="company-list-link">Sobre</li>
                    <li className="company-list-link">Empregos</li>
                    <li className="company-list-link">For the record</li>
                </ul>

                <ul className="comunitys">
                    <li className="comunitys-title">Comunidades</li>
                    <li className="comunitys-link">Desenvolvedores</li>
                    <li className="comunitys-link">Publicidade</li>
                    <li className="comunitys-link">Investidores</li>
                    <li className="comunitys-link">Fornecedores</li>
                </ul>

                <ul className="links">
                    <li className="links-title">Links úteis</li>
                    <Link to="/playerweb" className="links-link">Player da Web</Link>
                    <li className="links-link">App móvel</li>

                </ul>
                <ul className="icons">
                    <a href="https://www.facebook.com/SpotifyBrasil/" className="icon-face"><img src={Face} alt="icon-face"/></a>
                    <a href="https://www.instagram.com/spotifybrasil/?hl=pt-br" className="icon-insta"><img src={Insta} alt="icon-insta"/></a>
                    <a href="https://twitter.com/spotify" className="icon-insta"><img src={Twitter} alt="icon-twitter" className="img-twitter"/></a>
                </ul>
                <section className="location"></section>
                <section className="util-links"></section>
            </nav>
        </footer>
    );
}