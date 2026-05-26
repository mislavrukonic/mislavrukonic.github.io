import React from "react";
import interests from "../data/interests"

function Interests() {
    return (
        <section id="interests" className="skills-section">
            <h2>Currently Interested In & Learning</h2>
            <ul className="skills-list">
                {interests.map((interest) => (
                    <li key={interest.id} className="skill-item">
                        <div className="t1"></div><div className="t3"></div><div className="t2"></div>
                        {interest.name}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Interests;