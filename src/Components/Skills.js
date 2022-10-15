import React from "react";

const Skills = (props) => {
    const { skills } = props;
    return (
        <div className="editable">
            <h3>Skills</h3>
            <ul>
                {skills.map((skill, idx) => {
                    return <li>{skill}</li>;
                })}
            </ul>
        </div>
    );
};

export default Skills;