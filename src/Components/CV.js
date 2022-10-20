import '../Styles/cv.css';
import React, { Component } from "react";
import ReactModal from 'react-modal';
import CVHead from "./CVHead";
import Contact from "./Contact";
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

class CV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            name: 'Enter Name',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            imgAdr: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            contact: {
                location: 'Toronto',
                phone: '+1 (416) 123-4567',
                email: 'sample@protonmail.com',
            },
            experience: [],
            education: [],
            skills: [],
        }
        
        this.clear =  this.clear.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangePicture = this.handleChangePicture.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }
      
    handleCloseModal () {
        this.setState({ showModal: false });
    }

    clear() {
        this.setState({
            name: 'Enter Name',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            imgAdr: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            contact: {
                location: 'Toronto',
                phone: '+1 (416) 123-4567',
                email: 'lorem@ipsum.com',
            },
            experience: [],
            education: [],
            skills: [],
        });
    }

    

    handleChange(e) {
        this.setState({
            imgAdr: e.target.value,
        })
    }

    handleChangePicture(e) {
        e.preventDefault();
        this.handleCloseModal();
    }

    render() {
        return (
            <main>                
                <div id="cv-body">
                    <div id="cv-info">
                        <div id="img-box" className="editable">
                            <img id="headshot-img" src={this.state.imgAdr} alt="stock headshot"/>
                            <button className="editSectionBtn" onClick={this.handleOpenModal}>Edit</button>
                        </div>
                        <Contact 
                            contact={this.state.contact}
                            />
                        <Skills 
                            skills={this.state.skills}
                            />
                    </div>
                    <div id="cv-content">
                        <CVHead 
                            name={this.state.name}
                            description={this.state.description}
                            />                     
                        <Experience 
                            experience={this.state.experience}
                            />
                        <Education 
                            education={this.state.education}
                            />
                    </div>
                </div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Change Photo"
                    ariahideapp={false}
                    id={"editPhotoModal"}
                    className={"editModal"}
                    >
                        <form>
                            <label className="modalFormEl" htmlFor="imgurl">Img URL:</label>
                            <input className="modalFormEl" type="text" name="imgurl" onChange={this.handleChange}></input><br />
                            <button className="modalFormEl" type="submit" onClick={this.handleChangePicture}>Submit</button>
                        </form>
                        <button className="closeModalBtn" onClick={this.handleCloseModal}>Close Test Modal</button>
                </ReactModal>
            </main>
        )
    }
}

export default CV;