import React, { Component } from 'react';
import Nav from '../Nav/Nav';

export default class LandingHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <header className="content-header landing-header">
        <div className="header-overlay">
          <Nav />
          <div className="header-content">
            <h1>Unlock Your City</h1>
            <input type="text" placeholder="Search for your adventure" />
          </div>
        </div>
      </header>
    )
  }
}
