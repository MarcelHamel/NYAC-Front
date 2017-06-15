import React, { Component } from 'react';
import { Link } from 'react-router';

import LandingHeader from '../Headers/LandingHeader';
import HowWeAdventure from './HowWeAdventure/HowWeAdventure';
import CategoryPreview from './CategoryPreview/CategoryPreview';
import LandingEventPreview from './LandingEventPreview/LandingEventPreview';
import Testimonials from './Testimonials/Testimonials';
import NewsletterSignUp from './NewsletterSignUp/NewsletterSignUp';
import NYACFooter from '../NYACFooter/NYACFooter';
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
        <HowWeAdventure />
        <hr />
        <CategoryPreview />
        <LandingEventPreview />
        <Testimonials />
        <NewsletterSignUp />
        <NYACFooter />
        <SubscriptionModal />
      </div>
    )
  }
}
