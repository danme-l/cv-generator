import React, { Component } from "react";
import '../Styles/cv.css';
import ReactModal from 'react-modal';

class CVHead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            name: "Enter Name",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEdits =  this.handleEdits.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }
      
    handleCloseModal () {
        this.setState({ showModal: false });
    }

    handleEdits(e) {
        e.preventDefault();
        this.handleCloseModal();
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value,
        });
    }

    handleDescChange(e) {
        this.setState({
            description: e.target.value,
        });
    }

    render() {
        return (
            <div id="CVHeaderSection" className="editable">
                <h1>{this.state.name}</h1>
                <p>{this.state.description}</p>
                <button className="editSectionBtn" onClick={this.handleOpenModal}>Edit</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Header Modal"
                    ariaHideApp={false}
                    >
                        <h3>Name & Description</h3>
                        <form>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" onChange={this.handleNameChange}></input>
                            <label htmlFor="desc">Description:</label>
                            <input type="text" name="desc" onChange={this.handleDescChange}></input>
                            <button type="submit" onClick={this.handleEdits}>Submit</button>
                        </form>
                        <button onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
            </div>
        )
    }
}

export default CVHead;