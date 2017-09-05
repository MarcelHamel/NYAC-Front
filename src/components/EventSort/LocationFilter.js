// Select HTML element to sort Location

import React from 'react';

const LocationFilter = (props) => {
  return(
    <div className="filter-menu">
      <h3>Location</h3>
      <div className="filter-select">
        <select onChange={props.handleLocationChange} defaultValue="">
          <option value="New York">Manhattan</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Queens">Queens</option>
          <option value="Bronx">Bronx</option>
          <option value="Staten Island">Staten Island</option>
          <option value="">Show All</option>
        </select>
      </div>
    </div>
  )
};

export default LocationFilter;
