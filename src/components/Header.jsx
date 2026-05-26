import React, { useState } from 'react';
import headerIcon from '../data/headerIcon';
import SimpleIconRenderer from './SimpleIconHelper';

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <a href="#" className="logo">
                    <span className='mr-3'>
                        {headerIcon.map((icon) => (
                            <SimpleIconRenderer key={icon.id} iconData={icon.icon} size={28} />
                        ))}
                    </span>
                    Mislav Rukonić
                </a>
                <button
                    className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <div />
                    <div />
                    <div />
                </button>
                <ul className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#education" onClick={closeMenu}>Education</a></li>
                    <li><a href="#job" onClick={closeMenu}>Work Experience</a></li>
                    <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#interests" onClick={closeMenu}>Interests</a></li>
                    <li><a href="#socials" onClick={closeMenu}>Socials</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
            </nav>
        </header >
    );
}


export default Header;