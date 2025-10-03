import React from 'react';
import educations from '../data/education';

function Education() {
    return (
        <section id="education" className="education-section">
            <h2>Education</h2>
            <div className="portfolio-grid">
                {educations.map((education) => (
                    <div key={education.id} className="portfolio-item">
                        <h3>{education.title}</h3>
                        <p>{education.school}</p>
                        <p>{education.description}</p>
                        <p>{education.years}</p>
                        {education.thesis ? (
                            <a
                                href={education.thesis}
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Thesis
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

export default Education;