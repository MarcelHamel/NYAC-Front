// Different headers exist based on varying content within them.

// This is the header for the landing page.

import React, { Component } from 'react';
import Nav from '../Nav/Nav';

import SearchBarContainer from '../SearchBar/SearchBarContainer';

export default class LandingHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <header className="content-header landing-header">
        <div className="header-overlay">
          <Nav landing={true} />
          <div className="header-content">
            <h1>Unlock Your City</h1>
            <SearchBarContainer />
          </div>
        </div>
      </header>
    )
  }
}
