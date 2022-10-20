import React from "react";
import ReactModal from 'react-modal';

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            newSkill: '',
            skills: this.props.skills,
        }

        // bindings
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAddSkill = this.handleAddSkill.bind(this);
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

    // sets newSkill to the input so that every single change on the input 
    // isn't added to the skills array (eg ['c', 'co','cod','codi','codin','coding'])
    handleChange(e) {
        this.setState({
            newSkill: e.target.value,
        });
    };

    // adds newSkill to the skills array only on the submit
    // resets newSkill to empty the skills input
    handleAddSkill(e) {
        e.preventDefault();
        this.setState({
            skills: this.state.skills.concat(this.state.newSkill),
            newSkill: '',
        });
    };

    loadSample() {
        let sampleSkills = [
            "HTML & CSS",
            "JavaScript (ES5 & ES6)",
            "React",
            "Node.js",
            "Python",
            "Unicycling",
            "Historical Trivia"
        ]
        this.setState({
            skills: sampleSkills,
        })
    }

    clear() {
        this.setState({
            skills: [],
            newSkill: ''
        })
    }
    
    render() {
        return (
            <div className="editable">
                <div id="skillsHead" className="cvSectionHead">
                    <h3>Skills</h3>
                    <div className="buttonBox">
                        <button className="editSectionBtn" onClick={this.handleOpenModal}>Edit</button>
                        <button className="editSectionBtn" onClick={this.loadSample}>Sample</button>
                        <button className="editSectionBtn" onClick={this.clear}>Clear</button>
                    </div>
                </div>            
                <ul>
                    {this.state.skills.map((skill, idx) => {
                        return <li key={idx}>{skill}</li>;
                    })}
                </ul>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Skills Modal"
                    ariaHideApp={false}
                    className={"editModal"}
                    >
                        <div className="modalContent">
                            <h3>Add Skills</h3>
                            <ul>
                                {this.state.skills.map((skill, idx) => {
                                    return <li key={idx}>{skill}</li>;
                                })}
                            </ul>
                            <form>
                                <label htmlFor="skill">New Skill:</label>
                                <input type="text" name="skill" value={this.state.newSkill} onChange={this.handleChange}></input><br />
                                <button type="submit" onClick={this.handleAddSkill}>Submit</button>
                            </form>
                        </div>
                        <button className="closeModalBtn" onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
            </div>
        );
    }
    
};

export default Skills;