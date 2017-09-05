// This is the top half of the ticket info container. It contains the registration button, available tickets, price range and the start and end times.

import React from 'react';

import EventRegistrationButton from './EventRegistrationButton';
import EventTicketAvailability from './EventTicketAvailability';
import EventTicketPriceRange from './EventTicketPriceRange';
import EventStartDatetime from './EventStartDatetime';

const TicketDetails = (props) => {

  return (
    <div className="ticket-details">
      <EventRegistrationButton availability={props.availability} event_id={props.event_id} displayRedirectModal={props.displayRedirectModal} />
      <EventTicketAvailability availability={props.availability} />
      <EventTicketPriceRange tickets={props.tickets} />
      <EventStartDatetime start={props.start} end={props.end}/>
    </div>
  )
}

export default TicketDetails;
