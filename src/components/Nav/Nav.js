import React, { Component } from 'react';
import { Link } from 'react-router';

import NavLinks from './NavLinks';
import Logo from './Logo';
import SubscriptionButton from '../Subscribe/SubscriptionButton';
import Hamburger from './MobileMenu/Hamburger';

export default class Nav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav>
        <Link to="/">
          <Logo landing={this.props.landing} />
        </Link>
        <NavLinks name={this.props.name} />
        <SubscriptionButton buttonType="nav-subscribe-button" />
        <Hamburger />
      </nav>
    )
  }
}
