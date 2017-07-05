import React from 'react';

const RedirectModalCloseButton = (props) => {
  return (
    <div>
      <button className="redirect-modal-button" onClick={props.closeRedirectModal}>Back</button>
    </div>
  )
}

export default RedirectModalCloseButton;
