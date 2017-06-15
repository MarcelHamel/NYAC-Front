import React from 'react';

import EventRegistrationButton from './EventRegistrationButton';
import EventTicketAvailability from './EventTicketAvailability';
import EventTicketPriceRange from './EventTicketPriceRange';
import EventStartDatetime from './EventStartDatetime';

const TicketDetails = (props) => {

  // Computes ticket availability
  let availability = 0;
  props.tickets.forEach((ticket) => {
    availability += (ticket.quantity_total - ticket.quantity_sold);
  })


  return (
    <div className="ticket-details">
      <EventRegistrationButton />
      <EventTicketAvailability availability={availability} />
      <EventTicketPriceRange tickets={props.tickets} />
      <EventStartDatetime start={props.start} end={props.end}/>
    </div>
  )
}

export default TicketDetails;
