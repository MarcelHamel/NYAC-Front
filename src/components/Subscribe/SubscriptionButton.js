import React, { Component } from 'react';

export default class SubscriptionButton extends Component {
  constructor(props) {
    super(props)
  }

  toggleSubscriptionModal() {
    document
    .querySelector('#subscription-modal')
    .style('display', 'flex');
  }

  render() {
     if (this.props.buttonType === 'newsletter-landing-button') {
      return (
        <div>
          <button id="newsletter-landing-button">SUBSCRIBE TO THE NEWSLETTER</button>
        </div>
      )
    } else {
      return (
        <div>
          <button id="nav-subscribe-button">SUBSCRIBE</button>
        </div>
      )
    }
  }
}
