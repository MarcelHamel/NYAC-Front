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
