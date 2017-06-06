import React, { Component } from 'react';
import Nav from '../Nav/Nav';

export default class LandingHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <header id="landing-header">
        <Nav />
        <div id="landing-header-content">
          <h1>Unlock Your City</h1>
          <input type="text" placeholder="Search for your adventure" />
        </div>
      </header>
    )
  }
}
