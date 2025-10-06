import React from "react";
import interests from "../data/interests"

function Interests() {
    return (
        <section id="interests" className="skills-section">
            <h2>Currently Interested In & Learning</h2>
            <ul className="skills-list">
                {interests.map((interest) => (
                    <li key={interest.id} className="skill-item">
                        {interest.name}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Interests;