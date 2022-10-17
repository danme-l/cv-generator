import React, { Component } from "react";
import '../Styles/cv.css';

class CVHead extends Component {

    edit() {
        return <div>Test div for the edit modal</div>;
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