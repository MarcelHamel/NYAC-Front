import React from 'react';
import { Link } from 'react-router';

import EventPreviewCardBanner from './EventPreviewCardBanner';
import EventPreviewTitle from './EventPreviewTitle';
import EventPreviewDate from './EventPreviewDate';

const EventPreviewCard = (props) => {
  return(
    <div className="event-preview-card" key={`event_id${props.event.id}`}>
      <Link to={`/${props.event.id}`}>
        <EventPreviewCardBanner image={props.event.logo.url} tickets={props.event.ticket_classes} />
      </Link>
      <EventPreviewTitle title={props.event.name.text} />
      <EventPreviewDate date={props.event.start.local} />
    </div>
  )
}

export default EventPreviewCard;
