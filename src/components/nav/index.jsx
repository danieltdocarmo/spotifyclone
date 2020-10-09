
import React from 'react';


import './index.css';

import logo from '../../assets/imgs/logo.png';
function Nav() {
    return (
        <header className="header">
            <img src={logo} alt='logo-spotify' className='logo-img' />

            <nav className='nav'>
          
                <ul className='nav-list'>
                    <li className='nav-list-item'>Premium</li>
                    <li className='nav-list-item'>Ajuda</li>
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