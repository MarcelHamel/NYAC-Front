// This is the landing page displayed when users first visit the site.
import React, { Component } from 'react';

// Header specific to Landing Page
import LandingHeader from '../Headers/LandingHeader';
// Static "How We Adventure" section
import HowWeAdventure from './HowWeAdventure/HowWeAdventure';
// Slides containing previews of each category
import CategoryPreview from './CategoryPreview/CategoryPreview';
// Event preview card container for landing page
import LandingEventPreview from './LandingEventPreview/LandingEventPreview';
// Testimonial section
import Testimonials from './Testimonials/Testimonials';
// Newsletter subscription button
import NewsletterSignUp from './NewsletterSignUp/NewsletterSignUp';
// Footer
import NYACFooter from '../NYACFooter/NYACFooter';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events : []
    }
  }

  // Scrolls back to top of page when component mounts
  componentDidMount() {
    document.querySelector('body').scrollTop = 0;
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
      </div>
    )
  }
}
