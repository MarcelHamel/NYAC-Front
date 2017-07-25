// This was originally built to warn users that they'd be navigating to Eventbrite to purchase tickets. Deprecated. Keeping in case of change of heart.
import React from 'react';

import RedirectModalContent from './RedirectModalContent';

const RedirectModal = (props) => {
  const closeRedirectModal = () => {
    document.querySelector('#redirect-modal')
    .setAttribute('style', 'display: none')
  }

  return (
    <div id="redirect-modal">
      <RedirectModalContent event_id={props.event_id} closeRedirectModal={closeRedirectModal} />
    </div>
  )
};

export default RedirectModal;
