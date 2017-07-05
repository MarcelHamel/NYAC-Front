import React from 'react';

const VenueMap = (props) => {
  if (props.lat) {
    return(
      <div id="venue-map-container">
        <iframe src={`//www.google.com/maps/embed/v1/place?q=${props.address}&zoom=17&key=AIzaSyAOWFboESLtmI4ZfsrEkamkml5C6SLkzNo&center=${props.lat},${props.lng}`}>
        </iframe>
      </div>
    )
  } else {
    return(
      <div id="venue-map-container">
      </div>
    )
  }
}

export default VenueMap;
