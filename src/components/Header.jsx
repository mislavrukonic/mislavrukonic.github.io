import React from 'react';

function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                {/* Logo links back to the top of the page (#) */}
                <a href="#" className="logo">Mislav Rukonić</a>
                <ul className="nav-links">
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