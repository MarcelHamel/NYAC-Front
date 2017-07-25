// This is the back button that appears at the top of the Album and Single Photo views.
import React from 'react';
import { browserHistory } from 'react-router';

const BackButton = () => {
  return (
    <div>
      <button id="back-button" onClick={browserHistory.goBack} >
        BACK
      </button>
    </div>
  )
}

export default BackButton;
