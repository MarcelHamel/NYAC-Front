// Container to hold all category filter menus.

import React from 'react';

import LocationFilter from './LocationFilter';
import TimeOfDayFilter from './TimeOfDayFilter';
import DayOfWeekFilter from './DayOfWeekFilter';

const FilterContainer = (props) => {
  return (
    <div id="filter-container">
      <LocationFilter handleLocationChange={props.handleLocationChange} />
      <TimeOfDayFilter time={props.time} handleTimeChange={props.handleTimeChange} />
      <DayOfWeekFilter day={props.day} handleDayChange={props.handleDayChange} />
    </div>
  )
};

export default FilterContainer;
