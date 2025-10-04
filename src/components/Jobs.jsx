import React from 'react';
import jobs from '../data/jobs';

function Job() {
    return (
        <section id="job" className="portfolio-section">
            <h2>Work Experience</h2>
            <div className="portfolio-grid">
                {jobs.map((job) => (
                    <div key={job.id} className="portfolio-item">
                        <h3>{job.title}</h3>
                        <h4>{job.company}</h4>
                        <p>{job.typeOfJob}</p>
                        <p>{job.duration}</p>
                        <p>{job.location}</p>
                        <p>{job.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Job;