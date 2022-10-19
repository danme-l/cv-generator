import React, { Component } from "react";
import '../Styles/cv.css';
import EdExBullet from "./EdExBullet";
import ReactModal from "react-modal";

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            newEdSchool: '',
            newEdStudy: '',
            newEdLocation:'',
            newEdStart: '',
            newEdEnd:'',
            newEdDescription:'',
            edList: this.props.education,
        }

        // bindings
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleAddEdSchool = this.handleAddEdSchool.bind(this);
        this.handleAddEdStudy = this.handleAddEdStudy.bind(this);
        this.handleAddEdLocation = this.handleAddEdLocation.bind(this);
        this.handleAddEdStart = this.handleAddEdStart.bind(this);
        this.handleAddEdEnd = this.handleAddEdEnd.bind(this);
        this.handleAddEdDescription = this.handleAddEdDescription.bind(this);
        this.handleAddEd = this.handleAddEd.bind(this);
        this.getNewEd = this.getNewEd.bind(this);
    }

    // opening and closing the modal
    handleOpenModal () {
        this.setState({ showModal: true });
    }
      
    handleCloseModal () {
        this.setState({ showModal: false });
    }

    handleAddEd(e) {
        e.preventDefault();
        this.setState({
            edList: this.state.edList.concat({
                school: this.state.newEdSchool,
                study: this.state.newEdStudy,
                location: this.state.newEdLocation,
                start: this.state.newEdStart,
                end: this.state.newEdEnd,
                description: this.state.newEdDescription,
            }),
            newEdSchool: '',
            newEdStudy: '',
            newEdLocation:'',
            newEdStart: '',
            newEdEnd:'',
            newEdDescription:'',
        });
        this.handleCloseModal();
        
    }

    // new job related functions
    handleAddEdSchool(e) {
        this.setState({
            newEdSchool: e.target.value,
        });
    };

    handleAddEdStudy(e) {
        this.setState({
            newEdStudy: e.target.value,
        });
    };

    handleAddEdLocation(e) {
        this.setState({
            newEdLocation: e.target.value,
        });
    };

    handleAddEdStart(e) {
        this.setState({
            newEdStart: e.target.value,
        });
    };

    handleAddEdEnd(e) {
        this.setState({
            newEdEnd: e.target.value,
        });
    };

    handleAddEdDescription(e) {
        this.setState({
            newEdDescription: e.target.value,
        });
    };

    getNewEd() {
        return {
            school: this.state.newEdSchool,
            study: this.state.newEdStudy,
            location: this.state.newEdLocation,
            start: this.state.newEdStart,
            end: this.state.newEdEnd,
            description: this.state.newEdDescription,
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            edList: props.education,
        }
    }

    render() {
        return (
            <div id="EducationSection" className="editable">
                <div className="cvSectionHead">
                    <h1>Education</h1>
                    <button className="editSectionBtn" onClick={this.handleOpenModal}>Edit</button>
                </div>
                <hr />
                <div className="indentedSublist">
                    {this.state.edList.map((ed, idx) => {
                        console.log(this.state)
                        return <EdExBullet
                            key={idx}
                            name={ed.school}
                            sub={ed.study}
                            location={ed.location}
                            start={ed.start}
                            end={ed.end}
                            description={ed.description}
                        />
                    })}
                </div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Header Modal"
                    ariaHideApp={false}
                    >
                        <h3>Add Education</h3>
                        <form>
                            <label className="modalFormEl" htmlFor="school">School:</label>
                            <input className="modalFormEl" type="text" name="school" onChange={this.handleAddEdSchool}></input>
                            <label className="modalFormEl" htmlFor="study">Field pf study: </label>
                            <input className="modalFormEl" type="text" name="study" onChange={this.handleAddEdStudy}></input> <br />
                            <label className="modalFormEl" htmlFor="location">Location:</label>
                            <input className="modalFormEl" type="text" name="location" onChange={this.handleAddEdLocation}></input> <br />
                            <label className="modalFormEl" htmlFor="start">Start Date:</label>
                            <input className="modalFormEl" type="text" name="start" onChange={this.handleAddEdStart}></input>
                            <label className="modalFormEl" htmlFor="end">End Date:</label>
                            <input className="modalFormEl" type="text" name="end" onChange={this.handleAddEdEnd}></input> <br />
                            <label className="modalFormEl" htmlFor="desc">Description of Studies & Coursework</label>
                            <input className="modalFormEl" style={{height:'60px', width:'400px',}} type="text" name="desc" onChange={this.handleAddEdDescription}></input> <br />
                            <button type="submit" onClick={this.handleAddEd}>Submit</button>
                        </form>
                        <button onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
            </div>
        )
    }
}

export default Education;