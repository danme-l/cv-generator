import React, { Component } from "react";
import '../Styles/cv.css';
import EdExBullet from "./EdExBullet";

class Experience extends Component {
    render() {
        return (
            <div id="ExperienceSection" className="editable">
                <h1>Experience</h1>
                <hr />
                <div className="indentedSublist">
                    {this.props.experience.map((exp, idx) => {
                        return <EdExBullet
                            key={idx}
                            name={exp[0]}
                            sub={exp[1]}
                            start={exp[2]}
                            end={exp[3]}
                            description={exp[4]}
                        />
                    })}
                </div>
            </div>
        )
    }
}

export default Experience;