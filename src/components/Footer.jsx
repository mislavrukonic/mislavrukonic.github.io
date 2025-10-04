import React from "react";
import socialsData from "../data/socials"
import SimpleIconRenderer from './SimpleIconHelper';

function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="text-sm">&copy; {currentYear} Mislav Rukonić. All rights reserved.</p>

                <div className="social-links-container footer-socials">
                    {socialsData.map((social) => (
                        <a
                            key={social.id}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-item footer-social-item"
                        >
                            <SimpleIconRenderer iconData={social.icon} className="social-icon footer-social-icon" />
                        </a>
                    ))}
                </div>

                <a href="#hero" onClick={scrollToTop} className="footer-back-to-top">
                    Back to Top
                </a>
            </div>
        </footer>
    );
}

export default Footer;