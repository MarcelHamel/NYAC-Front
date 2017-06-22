import React, { Component } from 'react';
import Nav from '../Nav/Nav';

export default class PrivateEventsHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <header className="content-header private-events-header">
        <div className="header-overlay private-events-overlay">
          <Nav />
          <div className="header-content private-header-content">
            <h1>Private Events</h1>
            <p>We'll make sure your next outing is anything but ordinary</p>
            <div id="private-events-header-contact">CONTACT US TODAY!</div>
          </div>
        </div>
      </header>
    )
  }
}
