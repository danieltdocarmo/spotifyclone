
import React from 'react';
import { Link } from 'react-router-dom';


import './index.css';

import logo from '../../assets/imgs/logo.png';
function Nav() {
    return (
        <header className="header">
            <Link to="/" ><img src={logo} alt='logo-spotify' className='logo-img' /></Link>

            <nav className='nav'>
          
                <ul className='nav-list'>
                    <Link to="/registration" className="nav-list-item">Premium</Link>
                    <Link to='/help' className='nav-list-item'>Ajuda</Link>
                    <li className='nav-list-item'>Baixar</li>
                    <li className='nav-list-item-divisor'>|</li>
                    <li className='nav-list-item'>Inscrever-se</li>
                    <li className='nav-list-item'>Log in</li>
                </ul>

            </nav>
        </header>
    )
}

export default Nav;