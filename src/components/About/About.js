import React, { Component } from 'react';

import UniversalHeader from '../Headers/UniversalHeader';
import NYACFooter from '../NYACFooter/NYACFooter';
import SubscriptionButton from '../Subscribe/SubscriptionButton';

const About = () => {
  return(
    <div>
      <UniversalHeader image="../../images/about-page-hero.jpg" />
      <div className="container flex-column center-text" id="about">
        <div className="who-we-are">
          <h1>WHO WE ARE</h1>
          <p>We give you insider access to the city’s best-kept secrets. But we’re so much more than a tour company.</p>
          <p>We are a community-driven club that curates the most unique experiences in town, with a focus on history and storytelling. We show you a city you never knew existed, and offer a community you can’t live without. You won’t find our special-access tours and exclusive events anywhere else.</p>
          <p>Think after-hours tours of New York City’s most celebrated spaces, themed parties in unexpected locations, and weekend excursions to incredible destinations.</p>
        </div>
        <div className="container about-content">
          <img src="../../images/about/lighthouse.jpg" />
          <div className="container flex-column center-text">
          <h1>THE ‘CLUB’ IN NEW YORK ADVENTURE CLUB</h1>
          <p>Our current community is more than 7,000 members strong and includes everyone from recent NYC transplants to lifelong residents. Whatever borough you’re from (or city or country, for that matter), we’ll make it easy for you to take full advantage of the unique places and great people this city has to offer.</p>
          </div>
        </div>
        <div className="container about-content">
          <div className="container flex-column center-text">
            <h1>WHERE WE GO</h1>
            <p>To ensure a one-of-a-kind experience each and every time, we handpick events and outings specifically for the New York Adventure Club community.</p>
          </div>
          <img src="../../images/about/tunnel.jpg" />
        </div>
        <div className="container flex-column about-content">
          <h1>JOIN NEW YORK ADVENTURE CLUB</h1>
          <p>It's free!</p>
          <SubscriptionButton buttonType={'newsletter-landing-button'} />
        </div>
      </div>
      <NYACFooter />
    </div>
  )
}

export default About;
