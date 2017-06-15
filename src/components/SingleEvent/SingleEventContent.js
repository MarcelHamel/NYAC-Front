import React from 'react';

const SingleEventContent = (props) => {

  return (
    <div id="single-event-content">
      <h1>{props.name}</h1>
      <div dangerouslySetInnerHTML={{__html: props.description}}></div>
    </div>
  )
}

export default SingleEventContent;
