import React from 'react';

const TestimonialSelector = (props) => {
  let selectors = props.quotes.map((quote) => {
    let key = props.quotes.indexOf(quote).toString();
    let selectorButton = 'testimonial-selector-button';
    let selectorStatus = props.current === props.quotes.indexOf(quote) ? selectorButton + ' tsb-active' : selectorButton;
    let button = <div onClick={props.selectQuote} className={selectorStatus} key={props.quotes.indexOf(quote).toString()} id={`testimonial${key}`}></div>;
    return button;
  })
  return(
    <div id="testimonial-selector-panel">
      {selectors}
    </div>
  )
}


export default TestimonialSelector;
