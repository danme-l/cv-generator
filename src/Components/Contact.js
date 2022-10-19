import React, { Component } from "react";
import { ImLocation } from 'react-icons/im';
import { BsPhone } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import ReactModal from 'react-modal';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            location: props.contact.location,
            phone: props.contact.phone,
            email: props.contact.email,
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

    handleLocationChange(e) {
        this.setState({
            location: e.target.value,
        });
    }
    handlePhoneChange(e) {
        this.setState({
            phone: e.target.value,
        })
    }
    handleEmailChange(e) {
        this.setState({
            email: e.target.value,
        })
    }
    handleEdits(e) {
        e.preventDefault();
        this.handleCloseModal();
    }

    static getDerivedStateFromProps(props, state) {
        return {
            location: props.contact.location,
            phone: props.contact.phone,
            email: props.contact.email,
        }
     }

    render() {
        return (
            <div id="contactSection" className="editable">
                <button className="editSectionBtn" onClick={this.handleOpenModal}>Edit</button>
                <div className="contact-subsection">
                    <ImLocation size='33px' /> 
                    <p>{this.state.location}</p>
                </div>
                <div className="contact-subsection">
                    <BsPhone size='33px' /> 
                    <p>{this.state.phone}</p>
                </div>
                <div className="contact-subsection">
                    <MdOutlineAlternateEmail size='33px' /> 
                    <p>{this.state.email}</p>
                </div>  
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Contact Modal"
                    ariaHideApp={false}
                    >
                        <h3>Name & Description</h3>
                        <form>
                            <label htmlFor="name">Location:</label>
                            <input type="text" name="name" onChange={this.handleLocationChange}></input>
                            <label htmlFor="desc">Phone:</label>
                            <input type="text" name="desc" onChange={this.handlePhoneChange}></input>
                            <label htmlFor="desc">email:</label>
                            <input type="text" name="desc" onChange={this.handleEmailChange}></input>
                            <button type="submit" onClick={this.handleEdits}>Submit</button>
                        </form>
                        <button onClick={this.handleCloseModal}>Close Test Modal</button>
                </ReactModal>              
            </div>
        )
    }
}

export default Contact;