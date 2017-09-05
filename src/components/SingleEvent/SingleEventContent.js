// This container renders the event description.

import React from 'react';

// Eventbrite includes two versions of the event description: one plain text
// and one HTML string. The HTML string includes a tremendous amount of <SPAN> tags
// which completely override our page formatting...
const SingleEventContent = (props) => {
  const description = props.description ? props.description.html : 'ERROR: Could not load event description.';

  let content = description;

  // As long as Eventbrite is trying to ruin our styling...
  while (content.includes("STYLE=")) {
    // Find the next instance of the STYLE attribute...
    let tagStart = content.indexOf("STYLE=");
    // ... and also find the end of that <SPAN> tag
    let tagEnd = content.indexOf(">", tagStart);
    // Find a string that encompasses our entire STYLE attribute
    let styleTag = content.slice(tagStart, tagEnd);
    // Replace STYLE attribute with an empty string.
    content = content.replace(styleTag, '');
    // We should also do this with <SCRIPT> tags. For now, this is our little secret.
  }

  // "dangerouslySetInnerHTML" is my middle name.
    const name = props.name ? props.name.text : 'ERROR: Could not load event title.'
  return (

    <div id="single-event-content">
      <h1>{name}</h1>
      <div dangerouslySetInnerHTML={{__html: content}}></div>
    </div>
  )
}

export default SingleEventContent;
