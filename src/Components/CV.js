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
                location: '',
                phone: '',
                email:'',
            },
            experience: [],
            education: [],
            skills: [],
        }
        this.loadDonkey = this.loadDonkey.bind(this);
        this.clear =  this.clear.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.renderEditForm = this.renderEditForm.bind(this);
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
                location: '',
                phone: '',
                email:'',
            },
            experience: [],
            education: [],
            skills: [],
        });
    }

    loadDonkey() {
        this.setState({
            name: "A Donkey",
            description: "I am a donkey",
            imgAdr: "https://images.pexels.com/photos/598751/pexels-photo-598751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            contact: {
                location: "Nepal-China Border Regions",
                phone: "Neigh",
                email: "donkey@everesttours.com"
            },
            experience: [
                ["Himalayas","Chief Donkey","2018","Current","Lead Donkey on the team. Entrusted with the Sherpa's own possessions. Carried other valuables as needed"],
                ["Himalayas","Bag Carrier (Pony Intern)","2017", "2018","Year long Donkey Internship at Nepal Donkey University. Carried bags for white westerners doing base camp treks for their instagram"]
            ],
            education: [
                ["Harvard University - Donkey College", "BA Donkey Studies", "2012", "2016", "Major in Donkey Studies. Carried lots of bags"],
                ["Nepal Donkey University", "MA Donkey Studies", "2016", "2018", "Masters degree in Donkey Studies. Finished with highest honours"],
            ],
            skills: [
                "Carrying Bags",
                "Neighing",
                "Biting Nasty Children"
            ]
        })
    }

    onSectionEdit() {
    }

    renderEditForm() {
        return <div>This will be from the edit form</div>
    }

    render() {
        return (
            <main>
                <div id="btn-box">
                    <button className="top-btn" id="donkey-btn" onClick={this.loadDonkey} >Load The Donkey</button>
                    <button className="top-btn" id="clear-btn" onClick={this.clear} >Clear</button>
                    <button className="top-btn" onClick={this.handleOpenModal} >Modal Test</button>
                </div>
                
                <div id="cv-body">
                    <div id="cv-info">
                        <img id="img-box" className="editable" src={this.state.imgAdr} alt="stock headshot"/>
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
                    contentLabel="Test Modal"
                    >
                        {this.renderEditForm()}
                        <div> Test initial modal state </div>
                        <button onClick={this.handleCloseModal}>Close Test Modal</button>
                </ReactModal>
            </main>
        )
    }
}

export default CV;