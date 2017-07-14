import React from 'react';

const EventPreviewDate = (props) => {
  // Parse event date from JS Date object...
  let start = props.date;
  let rawEventDate = new Date(start);
  let eventDayOfWeek = rawEventDate.getDay();
  let eventMonth = rawEventDate.getMonth();
  let eventDate = rawEventDate.getDate();

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

  const getTime = (date) => {
    let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    let min = date.getMinutes();
    min = min === 0 ? '' : `:${min}`
    let AMPM = date.getHours() > 12 ? 'PM' : 'AM';

    return `${hour}${min} ${AMPM}`;
  }

  // Derive Display Date from these arrays...
  let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
  let time = getTime(rawEventDate);


  // Final display date...
  let date = `${daysOfWeek[eventDayOfWeek]}, ${months[eventMonth]} ${eventDate} @ ${time}`
  return (
    <div>
      <p className='event-preview-date'>{date}</p>
    </div>
  )
}

export default EventPreviewDate;
