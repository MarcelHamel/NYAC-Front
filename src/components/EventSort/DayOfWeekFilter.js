// HTML "select" Element to set DayOfWeek filter

import React from 'react';

const TimeOfWeekFilter = (props) => {
  return(
    <div className="filter-menu">
      <h3>Day of Week</h3>
      <div className="filter-select">
        <select onChange={props.handleDayChange} defaultValue="">
          <option value="">Show All</option>
          <option value="Weekday">Weekday</option>
          <option value="Weekend">Weekend</option>
        </select>
      </div>
    </div>
  )
};

export default TimeOfWeekFilter;
