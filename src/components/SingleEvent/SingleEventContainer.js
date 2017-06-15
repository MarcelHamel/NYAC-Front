import React from 'react';
import SingleEventContent from './SingleEventContent';
import SingleEventTicketInfo from './SingleEventTicketInfo';

const SingleEventContainer = (props) => {
  return (
    <div id="single-event-container">
      <SingleEventContent name={props.event.name.text} description={props.event.description.html} />
      <SingleEventTicketInfo tickets={props.event.ticket_classes} start={props.event.start} end={props.event.end} venue={props.event.venue} />
    </div>
  )
}

export default SingleEventContainer;
