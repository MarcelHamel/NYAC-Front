import React from 'react';

import PrivateEventsHeader from '../Headers/PrivateEventsHeader';
import NYACFooter from '../NYACFooter/NYACFooter';

const PrivateEvents = () => {
  return (
    <div id="private-events">
      <PrivateEventsHeader image='../../images/private-events-hero.jpg' />
      <div className="container flex-column private-container">
        <h1>Who We've Worked With</h1>
        <div className="container justify-center private-icon">
          <div className="partner-row">
            <img src="../../images/private-events/partners/google.png" />
            <img src="../../images/private-events/partners/ufc.png" />
          </div>
          <div className="partner-row">
            <img src="../../images/private-events/partners/nyu.png" />
            <img src="../../images/private-events/partners/carnegiemellon.png" />
          </div>
        </div>
        <h1>Recent Press</h1>
        <div className="container justify-center private-icon row-wrap">
          <div className="private-icon-row row-wrap">
            <img src="../../images/private-events/press/curbed.jpg" />
            <img src="../../images/private-events/press/huffpost.png" />
            <img src="../../images/private-events/press/newyorker.png" />
          </div>
          <div className="private-icon-row row-wrap">
            <img src="../../images/private-events/press/nyt.jpg" />
            <img src="../../images/private-events/press/thrillist.jpg" />
            <img src="../../images/private-events/press/timeout.png" />
          </div>
        </div>
        <h1>Awards</h1>
        <div className="container justify-center awards">
          <div className="award-container">
            <img src="../../images/private-events/awards/yelp.jpg" />
            <p><i>"People Love Us on Yelp 2016" Award Recipient</i></p>
          </div>
          <div className="award-container">
            <img src="../../images/private-events/awards/nycandco.jpg" />
            <p><i>Named one of the "10 Best Tours" by NYCGO.com</i></p>
          </div>
        </div>
        <div className="aspect-ratio">
          <iframe width="950" height="535" src="https://www.youtube.com/embed/7dmiF78hCaw" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
      <NYACFooter />
    </div>
  )
}

export default PrivateEvents;
