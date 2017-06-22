import React from 'react';

import PrivateEventsHeader from '../Headers/PrivateEventsHeader';
import NYACFooter from '../NYACFooter/NYACFooter';

const PrivateEvents = () => {
  return (
    <div id="private-events">
      <PrivateEventsHeader image='../../images/private-events-hero.jpg' />
      <div className="container flex-column">
        <h1>Who We've Worked With</h1>
        <div className="container justify-center private-icon">
          <img src="../../images/private-events/partners/google.png" />
          <img src="../../images/private-events/partners/ufc.png" />
          <img src="../../images/private-events/partners/nyu.png" />
          <img src="../../images/private-events/partners/carnegiemellon.png" />
        </div>
        <h1>Recent Press</h1>
        <div className="container justify-center private-icon row-wrap">
          <div className="private-icon-row">
            <img src="../../images/private-events/press/curbed.jpg" />
            <img src="../../images/private-events/press/huffpost.png" />
            <img src="../../images/private-events/press/newyorker.png" />
          </div>
          <div className="private-icon-row">
            <img src="../../images/private-events/press/nyt.jpg" />
            <img src="../../images/private-events/press/thrillist.jpg" />
            <img src="../../images/private-events/press/timeout.png" />
          </div>
        </div>
        <h1>Awards</h1>
        <div className="container justify-center private-icon">
          <img src="../../images/private-events/awards/yelp.jpg" />
          <img src="../../images/private-events/awards/nycandco.jpg" />
        </div>
        <iframe width="952" height="536" src="https://www.youtube.com/embed/7dmiF78hCaw" frameborder="0" allowfullscreen></iframe>
      </div>
      <NYACFooter />
    </div>
  )
}

export default PrivateEvents;
