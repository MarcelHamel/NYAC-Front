import React from 'react';

const VenueDetailAddress = (props) => {
  return(
    <div>
      <p id="event-venue-name">{props.name}</p>
      <p>{props.address[0]}</p>
      <p>{props.address[1]}</p>
    </div>
  )
}

export default VenueDetailAddress;
