// Display a logo. The landing page will pass a prop of "landing",
// and the only difference is that the landing page logo is white and not gold.
// I would imagine this is subject to change.

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
