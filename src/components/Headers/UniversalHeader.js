// This is the generic header used in SingleEvent, CategorySort and Gallery.

import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import CategoryHeadline from './CategoryHeadline';

export default class UniversalHeader extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <header id="universal-header" style={{backgroundImage: `url(${this.props.image})`}}>
        <div className="header-overlay">
          <Nav name={this.props.name} />
          <CategoryHeadline category={this.props.category} description={this.props.description} />
        </div>
      </header>
    )
  }
}
