// This is the "REGISTER" button on the Single Event display.
import React from 'react';

// Its worth noting that appending "#tickets" to the eventbrite link
// automatically displays their purchase modal.
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
