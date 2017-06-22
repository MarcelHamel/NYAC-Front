import React, { Component } from 'react';
import Nav from '../Nav/Nav';

export default class UniversalHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <header id="universal-header" style={{backgroundImage: `url(${this.props.image})`}}>
        <div className="header-overlay">
          <Nav />
        </div>
      </header>
    )
  }
}
