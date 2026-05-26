
import skills from '../data/skills';

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <h2>Top Skills</h2>
            <ul className="skills-list">
                {skills.map((skill) => (
                    <li key={skill.id} className="skill-item">
                        <div className="t1"></div><div className="t3"></div><div className="t2"></div>
                        {skill.name}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;