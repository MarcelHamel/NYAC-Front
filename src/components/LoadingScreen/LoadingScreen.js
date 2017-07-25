// Loading screen displayed when waiting on API response.
// Triggered with a boolean "loading" prop in all components its used in.

// Each component employing it begins with the "loading" prop set to FALSE.
// It is set to TRUE via setState during API calls, and set back once a response is received
// and commited to application state.

// If your Loading screen doesn't turn off it means Eventbrite isn't responding with events.

import React from 'react';

const LoadingScreen = (props) => {
  if (props.loading) {
    return (
      <div className="loading-screen-container">
        <h1>Loading...</h1>
      </div>
    )
  } else {
    return(
      <div></div>
    )
  }
};

export default LoadingScreen;
