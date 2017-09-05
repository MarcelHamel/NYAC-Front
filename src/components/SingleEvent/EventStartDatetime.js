// This component renders the start time for the Single Event view.
import React from 'react';

// Beneath is the exact same code from the event preview date component.
// Here, its simply run for two dates and not one. This can functionality
// can/should be broken out into its own component.
const EventStartDatetime = (props) => {
  const startDate = new Date(props.start.local);
  const endDate = new Date(props.end.local);

  const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const month = monthsArray[startDate.getMonth()];
  const day = startDate.getDate();
  const dayOfWeek = daysOfWeek[startDate.getDay()];

  const getTime = (date, origDate) => {
    let hour = parseInt(origDate.slice(11,13));
    const AMPM = hour > 11 ? 'PM' : 'AM';
    hour = hour > 12 ? hour - 12 : hour;
    let min = date.getMinutes();
    min = min === 0 ? '' : `:${min}`

    return `${hour}${min} ${AMPM}`;
  }

  const startTime = getTime(startDate, props.start.local);
  const endTime = getTime(endDate, props.end.local);

  if (props.start.local) {
    return (
      <div id="event-ticket-start">
        <p className="event-start-datetime">{dayOfWeek}, {month} {day}<br />
        {startTime} - {endTime}</p>
      </div>
    )
  } else {
    return(<div></div>)
  }
}

export default EventStartDatetime;
