import React, { Component } from 'react';

import TestimonialContent from './TestimonialContent';

export default class Testimonials extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quotes: [
        {image: 'marcel.jpg',
         quote: 'New York Adventure Club is swell! I had the time of my life exploring the subway system! You can\'t afford NOT to afford one of these exquisite tours.',
         name: 'Marcel',
        },
        {image: 'warcel.jpg',
         quote: 'It is so great, and is in no way trap. Definitely not trap.',
         name: 'Warcel',
        }
      ],
      currentQuote: {
        image: 'marcel.jpg',
        quote: 'New York Adventure Club is swell! I had the time of my life exploring the subway system! You can\'t afford NOT to afford one of these exquisite tours.',
        name: 'Marcel',
      },
      currentIndex: 0,
    }
  }

  selectQuote(e) {
    let newActiveSelector = parseInt(e.target.getAttribute('id').match(/\d/)[0]);
    this.setState({
      currentIndex: newActiveSelector,
      currentQuote: this.state.quotes[newActiveSelector]
    });
  }


  render() {
    return(
      <section id="testimonials">
        <TestimonialContent userStory={this.state.currentQuote} current={this.state.currentIndex} quotes={this.state.quotes} selectQuote={this.selectQuote.bind(this)} />
      </section>
    )
  }
}
