// This is the big, gray testimonials container from the landing page.

import React, { Component } from 'react';

import TestimonialContent from './TestimonialContent';

import rosie from '../../../images/testimonials/rosie.jpg';
import grant from '../../../images/testimonials/grant.jpg';
import amanda from '../../../images/testimonials/amanda.jpg';
import franklin2 from '../../../images/testimonials/franklin2.jpg';

export default class Testimonials extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quotes: [
        {image: rosie,
         quote: 'After living in NYC for  over 10 years, I really loved finding a place that I had never been to! I absolutely love that the NYAC exists for those days when I feel like being a (secret) tourist.',
         name: 'Rosie C.'
        },
        {image: grant,
         quote: ' Great group to see interesting places throughout NYC and meet awesome people. I\'ve made new friends and have seen cool stuff I didn\'t even know existed in New York. Well worth checking out.',
         name: 'Grant F.'
        },
        {image: amanda,
         quote: 'Everything is super reasonably priced and very accessible, something for everyone and lots of things that you would never know were out there. Highly recommend.',
         name: 'Amanda B.'
        },
        {image: franklin2,
         quote: 'The weekly newsletter is astoundingly comprehensive, offering an immediate panorama of choice sights and sounds of the five boroughs and suburbs.',
         name: 'Franklin H.'
        }
      ],
      currentQuote: {
        image: rosie,
         quote: 'After living in NYC for  over 10 years, I really loved finding a place that I had never been to! I absolutely love that the NYAC exists for those days when I feel like being a (secret) tourist.',
         name: 'Rosie C.'
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
