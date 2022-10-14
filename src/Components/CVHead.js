import React, { Component } from "react";
import '../Styles/cv.css';

class CVHead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
        }
    }

    render() {
        return (
            <div id="CVHeaderSection">
                <h1 className="editable">{this.props.name}</h1>
                <p className="editable">{this.props.description}</p>
            </div>
        )
    }
}

export default CVHead;