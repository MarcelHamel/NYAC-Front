import React from 'react';

import TicketDetails from './TicketDetails';
import VenueDetails from './VenueDetails';


const SingleEventTicketInfo = (props) => {

  return (
    <div id="single-event-ticket-info">
      <TicketDetails tickets={props.tickets} start={props.start} end={props.end} />
      <VenueDetails venue={props.venue} />
    </div>
  )
}

export default SingleEventTicketInfo;
