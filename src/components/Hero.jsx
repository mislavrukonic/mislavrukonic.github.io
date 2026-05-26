import React from 'react';

function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <h1>Mislav Rukonic's Personal Page</h1>
                <h2>
                    <a href="https://rxresu.me/mislavrukonic/my-resume" className="cta-button"
                        target="_blank"
                        rel="noopener noreferrer"> <div className="t1"></div><div className="t2"></div>
                        <div className="t3"></div><div className="t4"></div>View my CV here</a>
                </h2>
            </div>
        </section>
    );
}

export default Hero;