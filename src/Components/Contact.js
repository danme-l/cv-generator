import React, { Component } from "react";
import { ImLocation } from 'react-icons/im';
import { BsPhone } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';

class Contact extends Component {

    render() {
        return (
            <div id="contactSection">
                <div className="contact-subsection editable">
                    <ImLocation size='33px' /> 
                    <p>{this.props.contact.location}</p>
                </div>
                <div className="contact-subsection editable">
                    <BsPhone size='33px' /> 
                    <p>{this.props.contact.phone}</p>
                </div>
                <div className="contact-subsection editable">
                    <MdOutlineAlternateEmail size='33px' /> 
                    <p>{this.props.contact.email}</p>
                </div>
                
            </div>
        )
    }
}

export default Contact;