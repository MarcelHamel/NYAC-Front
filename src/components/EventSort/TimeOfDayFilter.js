// HTML "select" Element to set TimeOfDay filter

import React from 'react';

const TimeOfDayFilter = (props) => {
  return(
    <div className="filter-menu">
      <h3>Time of Day</h3>
      <div className="filter-select">
        <select onChange={props.handleTimeChange} defaultValue="">
          <option value="">Show All</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>
      </div>
    </div>
  )
};

export default TimeOfDayFilter;
