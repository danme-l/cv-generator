import React, { Component } from "react";
import '../Styles/cv.css';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div id="EducationSection">
                <h1 className="editable">Education</h1>
                <hr />
                <div className="indentedSublist">
                    <h3>Education 1 will go here</h3>
                    <p>Education 1 will go here</p>
                    <h3>Education 2 will go here</h3>
                    <p>Education 2 will go here</p>
                    <h3>Education 3 will go here</h3>
                    <p>Education 3 will go here</p>
                </div>
            </div>
        )
    }
}

export default Education;