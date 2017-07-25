// Contact modal form triggered by "Contact" link
// in footer. See NYACFooter for functionality.

import React from 'react';

const ContactModalContent = (props) => {
  return(
    <div id="contact-modal-content">
      <p className="contact-modal-close" onClick={props.closeContactModal}>CLOSE <span className="contact-close-x">X</span></p>
      <h3>Contact Us</h3>
      <p><i>We'd love to hear from you!</i></p>
      <p><i>To send us a message, please fill out the form below:</i></p>
      <form onSubmit={props.handleSubmit} >
        <input type="text" name="first" placeholder="First" onChange={props.handleChange} value={props.first} />
        <input type="text" name="last" placeholder="Last" onChange={props.handleChange} value={props.last} />
        <input type="email" name="email" placeholder="Email" onChange={props.handleChange} value={props.email} />
        <input type="text" name="subject" placeholder="Subject" onChange={props.handleChange}
        value={props.subject} />
        <textarea name="message" placeholder="Enter your message here..." onChange={props.handleChange} value={props.message} />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ContactModalContent;
