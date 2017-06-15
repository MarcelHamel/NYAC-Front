import React from 'react';

const EventStartDatetime = (props) => {
  let startDate = new Date(props.start.local);
  let endDate = new Date(props.end.local);

  let monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  let month = monthsArray[startDate.getMonth()];
  let day = startDate.getDate();
  let year = startDate.getFullYear();

  const getTime = (date) => {
    let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    let min = date.getMinutes();
    min = min === 0 ? '' : `:${min}`
    let AMPM = date.getHours() > 12 ? 'PM' : 'AM';

    return `${hour}${min} ${AMPM}`;
  }

  const startTime = getTime(startDate);
  const endTime = getTime(endDate);

  if (props.start.local) {
    return (
      <div id="event-ticket-start">
        <p className="event-start-datetime">{month} {day}, {year}<br />
        {startTime} - {endTime}</p>
      </div>
    )
  } else {
    return(<div></div>)
  }
}

export default EventStartDatetime;
