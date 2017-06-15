import React from 'react';

const EventPreviewDate = (props) => {
  let start = props.date;
  let ymd = start.slice(0, start.indexOf('T')).split('-');
  let year = ymd[0].slice(2);
  let month = ymd[1].match(/[^0]/g).join('');
  let day = ymd[2];
  let date = `Event Date: ${month}/${day}/${year}`
  return (
    <div>
      <p className='event-preview-date'>{date}</p>
    </div>
  )
}

export default EventPreviewDate;
