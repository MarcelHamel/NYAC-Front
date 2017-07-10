import React from 'react';

const SingleEventContent = (props) => {
  let content = props.description;

  while (content.includes("STYLE=")) {
    let tagStart = content.indexOf("STYLE=");
    let tagEnd = content.indexOf(">", tagStart);
    let styleTag = content.slice(tagStart, tagEnd);
    content = content.replace(styleTag, '');
  }

  return (

    <div id="single-event-content">
      <h1>{props.name}</h1>
      <div dangerouslySetInnerHTML={{__html: content}}></div>
    </div>
  )
}

export default SingleEventContent;
