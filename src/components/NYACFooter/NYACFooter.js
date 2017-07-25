// Universal footer for the site.

import React, { Component } from 'react';
import update from 'react-addons-update';
import axios from 'axios';

import FooterLinks from './FooterLinks';
import SocialMediaIcons from './SocialMediaIcons';
import ContactModal from '../ContactModal/ContactModal';

export default class NYACFooter extends Component {
  constructor(props) {
    super(props)

    // State pertains to contact modal form
    this.state = {
      first: '',
      last: '',
      email: '',
      subject: '',
      message: ''
    }
  }

  // This function displays the contact modal when its link is clicked.
  displayContactModal() {
    document.querySelector('#contact-modal')
    .setAttribute('style', 'display: flex');
  }

  // This closes the contact modal and also resets all fields on the form.
  closeContactModal() {
    this.setState({
      first: '',
      last: '',
      email: '',
      subject: '',
      message: ''
    })
    document.querySelector('#contact-modal')
    .setAttribute('style', 'display: none');
  }

  // handleChange for contact modal form.
   handleChange(event) {
    let newState = update(this.state, {
        $merge: {
          [event.target.name]: event.target.value
        }
    })
    this.setState(newState);
  }

  // handleSubmit for contact modal form.
  handleSubmit(event) {
    event.preventDefault();

    let body = JSON.stringify(this.state);
    // This can likely be changed to a relative path for production.
    axios.post('http://newyorkadventureclub-dev.us-east-1.elasticbeanstalk.com/contact', {
      data: body
    })
    // After POST request is sent, the closeContactModal function is invoked.
    .then(this.closeContactModal())
    .catch(err => console.log('ERROR: ', err));
  }

  render() {
    return (
      <footer>
        <FooterLinks displayContactModal={this.displayContactModal} />
        <SocialMediaIcons />
        <ContactModal closeContactModal={this.closeContactModal.bind(this)} handleChange={this.handleChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)} first={this.state.first} last={this.state.last} email={this.state.email} subject={this.state.subject} message={this.state.message} />
      </footer>
    )
  }
}


