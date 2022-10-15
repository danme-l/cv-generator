import '../Styles/cv.css';
import React, { Component } from "react";
import CVHead from "./CVHead";
import Contact from "./Contact";
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

class CV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Enter Name',
            description: 'Lorem Ipsum',
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
    }

    clear() {
        this.setState({
            name: 'Enter Name',
            description: 'Lorem Ipsum',
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
                phone: "Nay",
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
                "Naying",
                "Biting Nasty Children"
            ]
        })
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
            </main>
        )
    }
}

export default CV;