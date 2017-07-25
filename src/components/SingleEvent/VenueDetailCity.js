// This component renders the city name above the map.
import React from 'react';

const VenueDetailCity = (props) => {

  return (
    <div>
      <h3 id="event-venue-city">{props.city}</h3>
    </div>
  )
}

export default VenueDetailCity;
