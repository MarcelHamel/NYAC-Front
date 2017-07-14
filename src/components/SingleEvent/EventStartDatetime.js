import React from 'react';

const EventStartDatetime = (props) => {
  let startDate = new Date(props.start.local);
  let endDate = new Date(props.end.local);

  let monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let month = monthsArray[startDate.getMonth()];
  let day = startDate.getDate();
  // let year = startDate.getFullYear();
  let dayOfWeek = daysOfWeek[startDate.getDay()];

  const getTime = (date) => {
    let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    let min = date.getMinutes();
    min = min === 0 ? '' : `:${min}`
    let AMPM = date.getHours() > 11 ? 'PM' : 'AM';

    return `${hour}${min} ${AMPM}`;
  }

  const startTime = getTime(startDate);
  const endTime = getTime(endDate);

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
