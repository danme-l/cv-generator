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
                phone: '(613) 123-4567',
                email: 'sample@protonmail.com',
            },
            experience: [],
            education: [],
            skills: [],
        }
        this.loadDonkey = this.loadDonkey.bind(this);
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
                phone: '+1 (613) 878-0183',
                email: 'd-dksa@protonmail.com',
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
                {
                    title:"Chief Donkey",
                    company: "Everest Tours",
                    location: "Himalayas",
                    start:"2018",
                    end: "Current",
                    description: "Lead Donkey on the team. Entrusted with the Sherpa's own possessions. Carried other valuables as needed"
                },
                {
                    title:"Bag Carrier (Pony Intern)",
                    company: "Everest Tours",
                    location: "Himalayas",
                    start:"2017",
                    end: "2018",
                    description: "Year long Donkey Internship at Nepal Donkey University. Carried bags for white westerners doing base camp treks for their instagram"
                },
            ],
            education: [
                {
                    school: "Harvard University - Donkey College",
                    study: "BA Donkey Studies",
                    location: "Boston",
                    start:"2012",
                    end: "2016",
                    description: "Major in Donkey Studies. Carried lots of bags"
                },
                {
                    school: "Nepal Donkey University",
                    study: "MA Donkey Studies",
                    location: "Himalayas",
                    start:"2016",
                    end: "2018",
                    description: "Masters degree in Donkey Studies. Finished with highest honours"
                },
            ],
            skills: [
                "Carrying Bags",
                "Neighing",
                "Biting Nasty Children"
            ]
        })
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
                <div id="btn-box">
                    <button className="top-btn" id="donkey-btn" onClick={this.loadDonkey} >Load The Donkey</button>
                    <button className="top-btn" id="clear-btn" onClick={this.clear} >Clear</button>
                </div>
                
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
                    contentLabel="Test Modal"
                    >
                        <form>
                            <label htmlFor="imgurl">Img URL:</label>
                            <input type="text" name="imgurl" onChange={this.handleChange}></input><br />
                            <button type="submit" onClick={this.handleChangePicture}>Submit</button>
                        </form>
                        <button onClick={this.handleCloseModal}>Close Test Modal</button>
                </ReactModal>
            </main>
        )
    }
}

export default CV;