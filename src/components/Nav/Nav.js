import React, { Component } from 'react';
import { Link } from 'react-router';

import NavLinks from './NavLinks';
import Logo from './Logo';
import SubscriptionButton from '../Subscribe/SubscriptionButton';

export default class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav>
        <Logo />
        <NavLinks />
        <SubscriptionButton buttonType="nav-subscribe-button" />
      </nav>
    )
  }
}
