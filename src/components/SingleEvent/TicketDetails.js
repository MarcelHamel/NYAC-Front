// This is the top half of the ticket info container. It contains the registration button, available tickets, price range and the start and end times.

import React from 'react';

import EventRegistrationButton from './EventRegistrationButton';
import EventTicketAvailability from './EventTicketAvailability';
import EventTicketPriceRange from './EventTicketPriceRange';
import EventStartDatetime from './EventStartDatetime';

const TicketDetails = (props) => {
  // Computes ticket availability
  let availability = 0;
  props.tickets.forEach((ticket) => {
    availability += ticket.quantity_total;
  })
  availability = availability < props.capacity ? availability : props.capacity;
  props.tickets.forEach((ticket) => {
    // availability = (ticket.quantity_total - ticket.quantity_sold);
    availability -= ticket.quantity_sold;
  })


  return (
    <div className="ticket-details">
      <EventRegistrationButton event_id={props.event_id} displayRedirectModal={props.displayRedirectModal} />
      <EventTicketAvailability availability={availability} />
      <EventTicketPriceRange tickets={props.tickets} />
      <EventStartDatetime start={props.start} end={props.end}/>
    </div>
  )
}

export default TicketDetails;
