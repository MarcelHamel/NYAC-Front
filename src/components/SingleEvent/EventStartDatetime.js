// This component renders the start time for the Single Event view.
import React from 'react';

// Beneath is the exact same code from the event preview date component.
// Here, its simply run for two dates and not one. This can functionality
// can/should be broken out into its own component.
const EventStartDatetime = (props) => {
  let startDate = new Date(props.start.local);
  let endDate = new Date(props.end.local);

  let monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let month = monthsArray[startDate.getMonth()];
  let day = startDate.getDate();
  let dayOfWeek = daysOfWeek[startDate.getDay()];

  const getTime = (date, origDate) => {
    let hour = parseInt(origDate.slice(11,13));
    let AMPM = hour > 11 ? 'PM' : 'AM';
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
