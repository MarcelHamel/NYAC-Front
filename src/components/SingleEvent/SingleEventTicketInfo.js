// This the container for event ticket info that appears on the right hand side of the Single Event view. It contains the ticket price, a map render and other info.
import React from 'react';

import TicketDetails from './TicketDetails';
import VenueDetails from './VenueDetails';


const SingleEventTicketInfo = (props) => {

  return (
    <div id="single-event-ticket-info">
      <TicketDetails capacity={props.capacity} tickets={props.tickets} start={props.start} end={props.end} event_id={props.event_id} displayRedirectModal={props.displayRedirectModal} />
      <div className='desktop-venue-details'>
        <VenueDetails venue={props.venue} />
      </div>
    </div>
  )
}

export default SingleEventTicketInfo;
