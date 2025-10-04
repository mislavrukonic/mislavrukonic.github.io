import React from 'react';
import socials from '../data/socials';
import SimpleIconRenderer from './SimpleIconHelper';

function Socials() {
    return (
        <section id="socials" className="socials-section">
            <h2>Socials</h2>
            <div className="socials-list">
                {socials.map((social) => (
                    <h3 key={social.id} className="social-item">
                        <SimpleIconRenderer iconData={social.icon} size={28} />
                        {' '}
                        {social.platform}:
                        {' '}
                        <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            <span>{social.handle}</span>
                        </a>
                    </h3>
                ))}
                <br />
            </div>
        </section>
    );
}

export default Socials;