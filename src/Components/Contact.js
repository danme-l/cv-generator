import React, { Component } from "react";
import { ImLocation } from 'react-icons/im';
import { BsPhone } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            contact: {
                location: 'Toronto, ON',
                phone: '(123) 123-4567',
                email:'example@email.com',
            },
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleEdits =  this.handleEdits.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }
      
    handleCloseModal () {
        this.setState({ showModal: false });
    }

    handleLocationChange() {

    }
    handlePhoneChange() {

    }
    handleEmailChange() {

    }
    handleEdits() {

    }

    render() {
        return (
            <div id="contactSection">
                <div className="contact-subsection editable">
                    <ImLocation size='33px' /> 
                    <p>{this.state.contact.location}</p>
                </div>
                <div className="contact-subsection editable">
                    <BsPhone size='33px' /> 
                    <p>{this.state.contact.phone}</p>
                </div>
                <div className="contact-subsection editable">
                    <MdOutlineAlternateEmail size='33px' /> 
                    <p>{this.state.contact.email}</p>
                </div>
                
            </div>
        )
    }
}

export default Contact;