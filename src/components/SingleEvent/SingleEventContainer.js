// This container holds separate components which render both the ticket info container and the
// container for the event description.
import React from 'react';
import SingleEventContent from './SingleEventContent';
import SingleEventTicketInfo from './SingleEventTicketInfo';

const SingleEventContainer = (props) => {
  return (
    <div id="single-event-container">
      <SingleEventContent name={props.event.name.text} description={props.event.description.html} />
      <SingleEventTicketInfo capacity={props.event.capacity} tickets={props.event.ticket_classes} start={props.event.start} end={props.event.end} venue={props.event.venue} event_id={props.event.id} displayRedirectModal={props.displayRedirectModal} />
    </div>
  )
}

export default SingleEventContainer;
