import React from 'react';

import TestimonialSelector from './TestimonialSelector';

const TestimonialContent = (props) => {
  return (
    <div id="testimonial-content">
      <h1>Explore the Undiscovered</h1>
      <img src={`../../../images/testimonials/${props.userStory.image}`} id="testimonial-image" />
      <div className="testimonial-text">
        <i><p id="testimonal-quote">"{props.userStory.quote}"</p></i>
        <p id="testimonial-name">{props.userStory.name}</p>
      </div>
      <TestimonialSelector current={props.current} quotes={props.quotes} selectQuote={props.selectQuote} />
    </div>
  )
}

export default TestimonialContent;
