import React from 'react';

const Logo = (props) => {
  if (props.landing) {
    return (
      <div id="landing-logo">
      </div>
    )
  } else {
    return (
      <div id="logo">
      </div>
    )
  }
}

export default Logo;
