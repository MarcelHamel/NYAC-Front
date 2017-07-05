import React, { Component } from 'react';
import update from 'react-addons-update';
import axios from 'axios';

import FooterLinks from './FooterLinks';
import SocialMediaIcons from './SocialMediaIcons';
import ContactModal from '../ContactModal/ContactModal';

export default class NYACFooter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first: '',
      last: '',
      email: '',
      subject: '',
      message: ''
    }
  }

  displayContactModal() {
    document.querySelector('#contact-modal')
    .setAttribute('style', 'display: flex');
  }

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

   handleChange(event) {
    let newState = update(this.state, {
        $merge: {
          [event.target.name]: event.target.value
        }
    })

    console.log(newState);
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();

    let body = JSON.stringify(this.state);

    axios.post('http://localhost:8000/contact', {
      data: body
    })
    .then(this.closeContactModal())
    .catch(err => console.log('ERROR: ', err));
  }

  render() {
    return (
      <footer>
        <FooterLinks />
        <SocialMediaIcons displayContactModal={this.displayContactModal} />
        <ContactModal closeContactModal={this.closeContactModal.bind(this)} handleChange={this.handleChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)} first={this.state.first} last={this.state.last} email={this.state.email} subject={this.state.subject} message={this.state.message} />
      </footer>
    )
  }
}


