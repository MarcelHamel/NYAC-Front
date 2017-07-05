import React from 'react';

import ContactModalContent from './ContactModalContent';

const ContactModal = (props) => {

  return (
    <div id="contact-modal">
      <ContactModalContent event_id={props.event_id} closeContactModal={props.closeContactModal} handleChange={props.handleChange} handleSubmit={props.handleSubmit} first={props.first} last={props.last} email={props.email} subject={props.subject} message={props.message} />
    </div>
  )
};

export default ContactModal;
