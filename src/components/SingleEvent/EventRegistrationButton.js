import React from 'react';

const EventRegistrationButton = (props) => {
  return(
    <div>
      <a href={`https://www.eventbrite.com/e/${props.event_id}#tickets`} target="_blank">
        <button id="event-registration-button">Register</button>
      </a>
    </div>
  )
}

export default EventRegistrationButton;
