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
