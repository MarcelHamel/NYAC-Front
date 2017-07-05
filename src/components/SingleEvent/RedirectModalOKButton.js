import React from 'react';

const RedirectModalOKButton = (props) => {
  return (
    <div>
      <a  href={`https://www.eventbrite.com/e/${props.event_id}#tickets`}>
        <button className="redirect-modal-button">OK</button>
      </a>
    </div>
  )
}

export default RedirectModalOKButton;
