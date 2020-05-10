import React from 'react';
import './Navbar.css';
import logo from './logo.svg';

function Navbar(){
    return(
        <div>
            <ul className="navbar">
                <img src={logo} className="Navbar-logo" alt="logo" />
                <li>Home</li>
                <li>About </li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar;
