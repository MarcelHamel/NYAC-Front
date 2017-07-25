// Displays number of tickets remaining from Eventbrite.

import React from 'react';

const EventTicketAvailability = (props) => {
  let ticketPluralNoun = props.availability === 1 ? 'ticket' : 'tickets';
  return (
    <div>
      <p className="event-ticket-availability">{props.availability} {ticketPluralNoun} available</p>
    </div>
  )
}

export default EventTicketAvailability;
