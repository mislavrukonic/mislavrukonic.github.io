import React from 'react';

function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <h1 className="logo">Mislav Rukonić</h1>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;