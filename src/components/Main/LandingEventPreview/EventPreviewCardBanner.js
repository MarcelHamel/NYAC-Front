import React from 'react';

import EventPreviewCost from './EventPreviewCost';

const EventPreviewCardBanner = (props) => {
  return(
    <div className='event-preview-card-banner' style={{backgroundImage: `url(${props.image})`}}>
      <EventPreviewCost tickets={props.tickets} />
    </div>
  )
}

export default EventPreviewCardBanner;
