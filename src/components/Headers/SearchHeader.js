// Header for Search results page.

import React, { Component } from 'react';
import Nav from '../Nav/Nav';

import SearchBarContainer from '../SearchBar/SearchBarContainer';

export default class SearchHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <header id="universal-header" style={{backgroundImage: `url(${this.props.image})`}}>
        <div className="header-overlay">
          <Nav />
          <div className="search-header-content">
            <h1>Search for Events</h1>
            <SearchBarContainer />
          </div>
        </div>
      </header>
    )
  }
}
