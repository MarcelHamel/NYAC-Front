// Deprecated like rest of modal.
import React from 'react';

import RedirectModalOKButton from './RedirectModalOKButton';
import RedirectModalCloseButton from './RedirectModalCloseButton';

const RedirectModalContent = (props) => {
  return(
    <div id="redirect-modal-content">
      <h3>You are about to leave New York Adventure Club</h3>
      <p><i>Click "OK" to navigate to Eventbrite to purchase tickets. Click "Back" to close this window.</i></p>
      <div className="redirect-modal-button-container">
        <RedirectModalOKButton event_id={props.event_id} />
        <RedirectModalCloseButton closeRedirectModal={props.closeRedirectModal} />
      </div>
    </div>
  )
}

export default RedirectModalContent;
