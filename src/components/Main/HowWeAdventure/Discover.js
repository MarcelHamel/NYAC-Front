import React from 'react';

import discover from '../../../images/discover.png';

const Discover = () => {
  return(
    <div className="adventure-item">
      <img src={discover} />
      <p className="adventure-title">DISCOVER</p>
      <p>Discover the hidden gems around NYC & beyond</p>
    </div>
  )
}

export default Discover;
