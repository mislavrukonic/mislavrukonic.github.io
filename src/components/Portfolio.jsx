import React from 'react';
import projects from '../data/projects';

function Portfolio() {
    return (
        <section id="portfolio" className="portfolio-section">
            <h2>My Portfolio</h2>
            <div className="portfolio-grid">
                {projects.map((project) => (
                    <div key={project.id} className="portfolio-item">
                        <h3>{project.title}</h3>
                        <img src={project.image} alt={"No image available for this project."} />
                        <p>{project.description}</p>
                        {project.link ? (
                            <a
                                href={project.link}
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        ) : (
                            <p className="thesis-status">Feel free to ask me about my project details.</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;