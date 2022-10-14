import '../Styles/cv.css';
import React, { Component } from "react";
import CVHead from "./CVHead";
import Contact from "./Contact";
import Experience from './Experience';
import Education from './Education';

class CV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Enter Name',
            description: 'Lorem Ipsum',
            expNames: [],
            expTitles: [],
            expDescriptions: [],
            expStarts: [],
            expEnds: [],
            edNames: [],
            edTitles: [],
            edDescriptions: [],
            edStarts: [],
            edEnds: [],
        }
        this.loadDonkey = this.loadDonkey.bind(this);
    }

    loadDonkey() {
        this.setState({
            name: "A Donkey",
            description: "I am a donkey",
            expNames: ["Himalayas", "Himalayas"],
            expTitles: ["Chief Donkey", "Bar Carrier (Pony Intern)"],
            expStarts: ["2018", "2017"],
            expEnds: ["Current", "2018"],
            expDescriptions: [
                "Lead Donkey on the team. <br> - Entrusted with the Sherpa's own possessions. <br> - Carried other valuables as needed",
                "Year long Donkey Internship at Nepal Donkey University. Carried bags for white westerners doing base camp treks for their instagram"
            ]
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.loadDonkey} >Load The Donkey</button>
                <div id="CVBody">
                    <div id="cvInfo">
                        <p>Picture will go here</p>
                        <Contact />
                    </div>
                    <div id="cvContent">
                        <CVHead 
                            name={this.state.name}
                            description={this.state.description}
                            />                     
                        <Experience 
                            expNames={this.state.expNames}
                            expTitles={this.state.expTitles}
                            expStarts={this.state.expStarts}
                            expEnds={this.state.expEnds}
                            expDescriptions={this.state.expDescriptions}
                            />
                        <Education />
                    </div>
                    
                    {/*
                        <Experience />
                        <Education />
                        <Skills />
                    */}
                </div>
            </div>
        )
    }
}

export default CV;