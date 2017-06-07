import React from 'react';

import SubscriptionButton from '../../Subscribe/SubscriptionButton';

const NewsletterSignUp = () => {
  return (
    <section id="newsletter-landing-page-sign-up">
      <h1>Be the first to know about upcoming experiences!</h1>
      <SubscriptionButton buttonType="newsletter-landing-button" />
    </section>
  )
}

export default NewsletterSignUp;
