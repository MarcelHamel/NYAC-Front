import React, { Component } from 'react';
import { Link } from 'react-router';
import LandingHeader from '../Headers/LandingHeader';
import SubscriptionModal from '../Subscribe/SubscriptionModal';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events : []
    }
  }

  render () {
    return (
      <div>
        <LandingHeader />
        <SubscriptionModal />
      </div>
    )
  }
}
