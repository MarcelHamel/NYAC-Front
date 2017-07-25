// This is the banner image for the event preview card.

// Notice that the preview price is a separate component contained within this.

import React from 'react';

import EventPreviewCost from './EventPreviewCost';

const EventPreviewCardBanner = (props) => {
  return(
    <div className='event-preview-card-banner' style={{backgroundImage: `url(${props.image})`}}>
      <EventPreviewCost description={props.description} tickets={props.tickets} />
    </div>
  )
}

export default EventPreviewCardBanner;
