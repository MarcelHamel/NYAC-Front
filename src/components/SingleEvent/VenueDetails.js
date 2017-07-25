// This container comprises the bottom half of the event details container and includes the map, address and city.
import React from 'react';

import VenueDetailCity from './VenueDetailCity';
import VenueDetailAddress from './VenueDetailAddress';
import VenueMap from './VenueMap';

const VenueDetails = (props) => {
  return(
    <div id="event-venue-details">
      <VenueDetailCity city={props.venue.address.city} />
      <VenueMap lat={props.venue.address.latitude} lng={props.venue.address.longitude} address={props.venue.address.localized_address_display} />
      <VenueDetailAddress name={props.venue.name} address={props.venue.address.localized_multi_line_address_display} />
    </div>
  )
}

export default VenueDetails;

