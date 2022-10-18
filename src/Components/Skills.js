import React from "react";
import ReactModal from 'react-modal';

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            newSkill: '',
            skills: [],
        }

        // bindings
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAddSkill = this.handleAddSkill.bind(this);
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

    
    render() {
        return (
            <div className="editable">
                <div id="skillsHead" className="cvSectionHead">
                    <h3>Skills</h3>
                    <button className="editSectionBtn" onClick={this.handleOpenModal}>Edit</button>
                </div>            
                <ul>
                    {this.state.skills.map((skill, idx) => {
                        return <li>{skill}</li>;
                    })}
                </ul>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Header Modal"
                    ariaHideApp={false}
                    >
                        <h3>Add Skills</h3>
                        <ul>
                            {this.state.skills.map((skill, idx) => {
                                return <li>{skill}</li>;
                            })}
                        </ul>
                        <form>
                            <label htmlFor="skill">New Skill:</label>
                            <input type="text" name="skill" value={this.state.newSkill} onChange={this.handleChange}></input><br />
                            <button type="submit" onClick={this.handleAddSkill}>Submit</button>
                        </form>
                        <button onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
            </div>
        );
    }
    
};

export default Skills;