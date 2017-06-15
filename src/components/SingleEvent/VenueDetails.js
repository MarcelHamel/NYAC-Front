import React from 'react';

import VenueDetailCity from './VenueDetailCity';
import VenueDetailAddress from './VenueDetailAddress';

const VenueDetails = (props) => {
  return(
    <div id="event-venue-details">
      <VenueDetailCity city={props.venue.address.city} />
      <VenueDetailAddress name={props.venue.name} address={props.venue.address.localized_multi_line_address_display} />
    </div>
  )
}

export default VenueDetails;
