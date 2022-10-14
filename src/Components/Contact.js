import React, { Component } from "react";
import { ImLocation } from 'react-icons/im';
import { BsPhone } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            phone: '',
            email: '',
        }
    }

    render() {
        return (
            <div id="contactSection">
                <div className="contact-subsection editable">
                    <ImLocation size='33px' /> 
                    <p>Location</p>
                </div>
                <div className="contact-subsection editable">
                    <BsPhone size='33px' /> 
                    <p>Phone</p>
                </div>
                <div className="contact-subsection editable">
                    <MdOutlineAlternateEmail size='33px' /> 
                    <p>Email</p>
                </div>
                
            </div>
        )
    }
}

export default Contact;