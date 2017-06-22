import React from 'react';

const VenueMap = (props) => {
  return(
    <div id="venue-map-container">
      <iframe src={`//www.google.com/maps/embed/v1/place?q=${props.address}&zoom=17&key=AIzaSyAOWFboESLtmI4ZfsrEkamkml5C6SLkzNo&center=${props.lat},${props.lng}`}>
      </iframe>
    </div>
  )
}

export default VenueMap;
