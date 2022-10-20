import React, { Component } from "react";
import '../Styles/cv.css';
import ReactModal from 'react-modal';

class CVHead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            name: this.props.name,
            description: this.props.description,
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEdits =  this.handleEdits.bind(this);
        this.loadSample = this.loadSample.bind(this);
        this.clear = this.clear.bind(this);
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

    loadSample() {
        this.setState({
            name: 'Enter Name',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        })
    }

    clear() {
        this.setState({
            name: '',
            description: ''
        })
    }

    render() {
        return (
            <div id="CVHeaderSection" className="editable">
                <h1>{this.state.name}</h1>
                <p>{this.state.description}</p>
                <div className="buttonBox">
                    <button className="editSectionBtn" onClick={this.handleOpenModal}>Edit</button>
                    <button className="editSectionBtn" onClick={this.loadSample}>Sample</button>
                    <button className="editSectionBtn" onClick={this.clear}>Clear</button>
                </div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Header Modal"
                    ariaHideApp={false}
                    className={"editModal"}
                    >
                        <div className="modalContent">
                            <h3>Name & Description</h3>
                            <form>
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" onChange={this.handleNameChange}></input>
                                <label htmlFor="desc">Description:</label>
                                <input type="text" name="desc" onChange={this.handleDescChange}></input>
                                <button type="submit" onClick={this.handleEdits}>Submit</button>
                            </form>
                        </div>
                        
                        <button className="closeModalBtn" onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
            </div>
        )
    }
}

export default CVHead;