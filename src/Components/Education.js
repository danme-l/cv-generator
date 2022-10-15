import React from "react";
import '../Styles/cv.css';
import EdExBullet from "./EdExBullet";

class Education extends React.Component {

    render() {
        return (
            <div id="EducationSection" className="editable">
                <h1>Education</h1>
                <hr />
                <div className="indentedSublist">
                    {this.props.education.map((ed, idx) => {
                        return <EdExBullet
                            key={idx}
                            name={ed[0]}
                            sub={ed[1]}
                            start={ed[2]}
                            end={ed[3]}
                            description={ed[4]}
                        />
                    })}
                </div>
            </div>
        )
    }
}

export default Education;