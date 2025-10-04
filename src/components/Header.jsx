import React, { useState } from 'react';

function Header() {

    // New state for controlling the mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to close the menu, useful for after a link is clicked
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <nav className="navbar">
                {/* Logo links back to the top of the page (#) */}
                <a href="#" className="logo">Mislav Rukonić</a>
                {/* Hamburger Menu Button (Appears on Mobile) */}
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
                    <li><a href="#about">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#job">Work Experience</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#interests">Interests</a></li>
                    <li><a href="#socials">Socials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}


export default Header;