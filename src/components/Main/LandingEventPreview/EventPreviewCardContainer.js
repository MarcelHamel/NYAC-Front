import React from 'react';

import EventPreviewCard from './EventPreviewCard';

const EventPreviewCardContainer = (props) => {
  console.log(props)
  let eventCards = props.events.map((event) => {
    return <EventPreviewCard event={event} key={`event_id${event.id}`}/>
  });
  return(
    <div id="event-preview-card-container">
      {eventCards}
    </div>
  )
}

export default EventPreviewCardContainer;
