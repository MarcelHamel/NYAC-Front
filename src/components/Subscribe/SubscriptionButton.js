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
          <a href="http://about.nyadventureclub.com/nyadventureclub/" target="_blank">
            <button id="newsletter-landing-button">SUBSCRIBE TO THE NEWSLETTER</button>
          </a>
        </div>
      )
    } else {
      return (
        <div>
          <a href="http://about.nyadventureclub.com/nyadventureclub/" target="_blank">
            <button id="nav-subscribe-button">SUBSCRIBE</button>
          </a>
        </div>
      )
    }
  }
}
