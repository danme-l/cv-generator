import React, { Component } from "react";
import '../Styles/cv.css';
import EdExBullet from "./EdExBullet";
import ReactModal from "react-modal";

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            newJobTitle: '',
            newJobCompany: '',
            newJobLocation:'',
            newJobStart: '',
            newJobEnd:'',
            newJobDescription:'',
            expList: this.props.experience,
        }

        // bindings
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleAddJobTitle = this.handleAddJobTitle.bind(this);
        this.handleAddJobCompany = this.handleAddJobCompany.bind(this);
        this.handleAddJobLocation = this.handleAddJobLocation.bind(this);
        this.handleAddJobStart = this.handleAddJobStart.bind(this);
        this.handleAddJobEnd = this.handleAddJobEnd.bind(this);
        this.handleAddJobDescription = this.handleAddJobDescription.bind(this);
        this.handleAddJob = this.handleAddJob.bind(this);
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

    handleAddJob(e) {
        e.preventDefault();
        this.setState({
            expList: this.state.expList.concat({
                title: this.state.newJobTitle,
                company: this.state.newJobCompany,
                location: this.state.newJobLocation,
                start: this.state.newJobStart,
                end: this.state.newJobEnd,
                description: this.state.newJobDescription,
            }),
            newJobTitle: '',
            newJobCompany: '',
            newJobLocation:'',
            newJobStart: '',
            newJobEnd:'',
            newJobDescription:'',
        });
        this.handleCloseModal();
        
    }

    // new job related functions
    handleAddJobTitle(e) {
        this.setState({
            newJobTitle: e.target.value,
        });
    };

    handleAddJobCompany(e) {
        this.setState({
            newJobCompany: e.target.value,
        });
    };

    handleAddJobLocation(e) {
        this.setState({
            newJobLocation: e.target.value,
        });
    };

    handleAddJobStart(e) {
        this.setState({
            newJobStart: e.target.value,
        });
    };

    handleAddJobEnd(e) {
        this.setState({
            newJobEnd: e.target.value,
        });
    };

    handleAddJobDescription(e) {
        this.setState({
            newJobDescription: e.target.value,
        });
    };

    loadSample() {
        this.setState({
            expList: [
                {
                    title: "Senior Worker",
                    company: "Good Workplace",
                    location: "New York City",
                    start:"2020",
                    end: "Current",
                    description: "Promoted in Spring 2018 from a Junior Worker for my serious working ability. Supervise and Guide Junior Workers as they work on their work."
                },
                {
                    title: "Junior Worker",
                    company: "Good Workplace",
                    location: "New York City",
                    start:"2018",
                    end: "2020",
                    description: "Hired on directly from Graduate School for recognition of my hard work. Worked on junior work for two years. Worked on such things as tasks, assignments, labour, and fixing things."
                },
            ],
        })
    }

    clear() {
        this.setState({
            expList: [],
            newJobTitle: '',
            newJobCompany: '',
            newJobLocation:'',
            newJobStart: '',
            newJobEnd:'',
            newJobDescription:'',
        })
    }

    render() {
        return (
            <div id="ExperienceSection" className="editable">
                <div className="cvSectionHead">
                    <h1>Experience</h1>
                    <div className="buttonBox">
                        <button className="editSectionBtn" onClick={this.handleOpenModal}>Edit</button>
                        <button className="editSectionBtn" onClick={this.loadSample}>Sample</button>
                        <button className="editSectionBtn" onClick={this.clear}>Clear</button>
                    </div>
                </div>
                <hr />
                <div className="indentedSublist">
                    {this.state.expList.map((exp, idx) => {
                        console.log(this.state)
                        return <EdExBullet
                            key={idx}
                            name={exp.title}
                            sub={exp.company}
                            location={exp.location}
                            start={exp.start}
                            end={exp.end}
                            description={exp.description}
                        />
                    })}
                </div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Esperience Modal"
                    ariaHideApp={false}
                    className={"editModal"}
                    >
                        <div className="modalContent">
                            <h3>Add Experience</h3>
                            <form>
                                <label className="modalFormEl" htmlFor="title">Job Title:</label>
                                <input className="modalFormEl" type="text" name="title" onChange={this.handleAddJobTitle}></input>
                                <label className="modalFormEl" htmlFor="company">Company: </label>
                                <input className="modalFormEl" type="text" name="company" onChange={this.handleAddJobCompany}></input> <br />
                                <label className="modalFormEl" htmlFor="location">Location:</label>
                                <input className="modalFormEl" type="text" name="location" onChange={this.handleAddJobLocation}></input> <br />
                                <label className="modalFormEl" htmlFor="start">Start Date:</label>
                                <input className="modalFormEl" type="text" name="start" onChange={this.handleAddJobStart}></input>
                                <label className="modalFormEl" htmlFor="end">End Date:</label>
                                <input className="modalFormEl" type="text" name="end" onChange={this.handleAddJobEnd}></input> <br />
                                <label className="modalFormEl" htmlFor="desc">Description of Duties & Responsibilities</label>
                                <input className="modalFormEl" style={{height:'60px', width:'400px',}} type="text" name="desc" onChange={this.handleAddJobDescription}></input> <br />
                                <button type="submit" onClick={this.handleAddJob}>Submit</button>
                            </form>
                        </div>
                        
                        <button className="closeModalBtn" onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
            </div>
        )
    }
}

export default Experience;