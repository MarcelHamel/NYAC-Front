import React, { Component } from 'react';

import TestimonialContent from './TestimonialContent';

export default class Testimonials extends Component {
  constructor(props) {
    super(props)

    this.state = {
      quotes: [
        {image: 'rosie.jpg',
         quote: 'After living in NYC for  over 10 years, I really loved finding a place that I had never been to! I absolutely love that the NYAC exists for those days when I feel like being a (secret) tourist.',
         name: 'Rosie C.'
        },
        {image: 'grant.jpg',
         quote: ' Great group to see interesting places throughout NYC and meet awesome people. I\'ve made new friends and have seen cool stuff I didn\'t even know existed in New York. Well worth checking out.',
         name: 'Grant F.'
        },
        {image: 'amanda.jpg',
         quote: 'Everything is super reasonably priced and very accessible, something for everyone and lots of things that you would never know were out there. Highly recommend.',
         name: 'Amanda B.'
        },
        {image: 'franklin.jpg',
         quote: 'The weekly newsletter is astoundingly comprehensive, offering an immediate panorama of choice sights and sounds of the five boroughs and suburbs.',
         name: 'Franklin H.'
        }
      ],
      currentQuote: {
        image: 'rosie.jpg',
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
