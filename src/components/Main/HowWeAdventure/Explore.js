import React from 'react';

import explore from "../../../images/explore.png";

const Explore = () => {
  return(
    <div className="adventure-item">
      <img src={explore} />
      <p className="adventure-title">EXPLORE</p>
      <p>Explore the unknown stories of everyday places</p>
    </div>
  )
}

export default Explore;
