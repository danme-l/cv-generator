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
        this.loadSample = this.loadSample.bind(this);
        this.clear = this.clear.bind(this);
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

    loadSample() {
        this.setState({
            edList: [
                {
                    school: "Undergraduate University",
                    study: "BSc in Undergrad Studies",
                    location: "Toronto",
                    start:"2012",
                    end: "2016",
                    description: "Majored in Undergrad Studies. Graduated Cumma Sum Laude"
                },
                {
                    school: "Graduate University",
                    study: "MA Graduate Studies",
                    location: "Tokyo",
                    start:"2016",
                    end: "2018",
                    description: "Masters degree in Graduate Studies. Thesis title: 'A Study on Studying Studies as a Graduate Studier'. Graduated Phi Beta Kappa."
                },
            ],
        })
    }

    clear() {
        this.setState({
            edList: [],
            newEdSchool: '',
            newEdStudy: '',
            newEdLocation:'',
            newEdStart: '',
            newEdEnd:'',
            newEdDescription:'',
        })
    }

    render() {
        return (
            <div id="EducationSection" className="editable">
                <div className="cvSectionHead">
                    <h1>Education</h1>
                    <div className="buttonBox">
                        <button className="editSectionBtn" onClick={this.handleOpenModal}>Edit</button>
                        <button className="editSectionBtn" onClick={this.loadSample}>Sample</button>
                        <button className="editSectionBtn" onClick={this.clear}>Clear</button>
                    </div>
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
                    contentLabel="Education Modal"
                    ariaHideApp={false}
                    className={"editModal"}
                    >
                        <div className="modalContent">
                            <h3>Add Education</h3>
                            <form>
                                <label className="modalFormEl" htmlFor="school">School:</label>
                                <input className="modalFormEl" type="text" name="school" onChange={this.handleAddEdSchool}></input>
                                <label className="modalFormEl" htmlFor="study">Field of study: </label>
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
                        </div>
                        <button className="closeModalBtn" onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
            </div>
        )
    }
}

export default Education;