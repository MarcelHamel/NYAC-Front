import React from 'react';

const EventTicketAvailability = (props) => {
  return (
    <div>
      <p className="event-ticket-availability">{props.availability} tickets available</p>
    </div>
  )
}

export default EventTicketAvailability;
