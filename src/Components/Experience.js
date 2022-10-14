import React, { Component } from "react";
import '../Styles/cv.css';
import EdExBullet from "./EdExBullet";

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exNumber: 0,
            expNames: [],
            expTitles: [],
            expDescriptions: [],
            expStarts: [],
            expEnds: [],
        }
    }

    render() {
        return (
            <div id="ExperienceSection">
                <h1 className="editable">Experience</h1>
                <hr />
                <div className="indentedSublist">
                    <EdExBullet 
                        name={this.state.expNames[0]}
                        sub={this.state.expTitles[0]}
                        start={this.state.expStarts[0]}
                        end={this.state.expEnds[0]}
                        description={this.state.expDescriptions[0]}
                    />
                    <div className="expBullet">
                        <h3>Experience 1 will go here</h3>
                        <p><em>Title</em> Start - End </p>
                        <p>Experience 1 will go here</p>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Experience;