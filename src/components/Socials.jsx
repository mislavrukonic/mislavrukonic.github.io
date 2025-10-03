import React from 'react';
import socials from '../data/socials';

function Socials() {
    return (
        <section id="socials" className="socials-section">
            <h2>Socials</h2>
            <div className="socials-list">
                {socials.map((social) => (
                    <h3 key={social.id} className="social-item">
                        {social.platform}:
                        {' '}
                        <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                        >
                            {social.handle}
                        </a>
                    </h3>
                ))}
                <br />
            </div>
        </section>
    );
}

export default Socials;