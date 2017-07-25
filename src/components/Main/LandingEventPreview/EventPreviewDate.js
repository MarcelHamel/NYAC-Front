import React from 'react';

const EventPreviewDate = (props) => {
  // Parse event date from JS Date object...
  let start = props.date;
  // Create a Date object from props.date
  let rawEventDate = new Date(start);
  // Parse day from Date obj (returns as int 0-6)
  let eventDayOfWeek = rawEventDate.getDay();
  // Parse month from Date obj (returns as in 0-11)
  let eventMonth = rawEventDate.getMonth();
  // Parse date from Date obj (returns as in 1-31)
  let eventDate = rawEventDate.getDate();

  // This method may have to change as Date.getX() relies on the local time of the server calling it.
  // Can be modified by Date.getLocaleTimeString() but it didn't have enough browser support and didn't
  // polyfill correctly. If we begin caching events on the server side, we can move this functionality
  // there and format everything without issue.

  // Add suffix to event Date
  switch (eventDate % 10) {
    case 1:
      eventDate === 11 ? eventDate + 'th' : eventDate + 'st';
      break;
    case 2:
      eventDate === 12 ? eventDate + 'th' : eventDate + 'nd';
      break;
    case 3:
      eventDate === 13 ? eventDate + 'th' : eventDate + 'rd';
      break;
    default:
      eventDate = eventDate + 'th';
      break;
  }

  // Parse event time into string.
  const getTime = (date, origDate) => {
    // Hour isn't handled as Date object to prevent parsing errors based on user time zone.
    let hour = parseInt(origDate.slice(11,13));
    // Determine AM or PM.
    let AMPM = hour > 11 ? 'PM' : 'AM';
    // Convert display hour from 'military time' to 'everybody else time' if necessary
    hour = hour > 12 ? hour - 12 : hour;
    // Parse minutes from date string.
    let min = date.getMinutes();
    // Determine whether to display minutes or not.
    min = min === 0 ? '' : `:${min}`

    return `${hour}${min} ${AMPM}`;
  }

  // Derive Display Date from these arrays...
  let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];

  let time = getTime(rawEventDate, props.date);


  // Final display date...
  let date = `${daysOfWeek[eventDayOfWeek]}, ${months[eventMonth]} ${eventDate} @ ${time}`
  return (
    <div>
      <p className='event-preview-date'>{date}</p>
    </div>
  )
}

export default EventPreviewDate;
