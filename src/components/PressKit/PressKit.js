import React from 'react';

import UniversalHeader from '../Headers/UniversalHeader';
import NYACFooter from '../NYACFooter/NYACFooter';

const PressKit = () => {
  return (
    <div>
      <UniversalHeader image={'../../images/about-page-hero.jpg'} />
        <div className="container flex-column">
          <h3 className="press-kit-headline">Founded in 2013, we provide insider access to the city's best-kept secrets. But we're so much more than a tour company. Our current community is more than 7,000 members strong and includes everything from recent NYC transplants to lifelong residents.</h3>
          <div className="press-clippings">
            <div className="press-kit-item">
              <a href="http://www.sarahfunky.com/nyc-nightlife/2017/3/14/pop-up-speakeasy-with-the-ny-adventure-club">
                <img src="../../images/presskit/sarahfunky.jpg" />
              </a>
              <h3>Pop-up Speakeasy with the NY Adventure Club</h3>
              <h5>Upon arrival at the nondescript door, Alyssa and I utter the requisite password, and are ushered inside the pop-up speakeasy..</h5>
            </div>
            <div className="press-kit-item">
              <a href="https://greenpointers.com/2017/05/18/thursday-spotlight-ken-butler-one-mans-trash-artists-musical-legacy/">
                <img src="../../images/presskit/kenbutler.jpg" />
              </a>
              <h3>Thursday Spotlight: Ken Butler—One Man’s Trash Is An Artist’s Musical Legacy</h3>
              <h5>Ken Butler’s artwork is playful. Often, literally. He designs, builds and plays unconventional musical instruments...</h5>
            </div>
            <div className="press-kit-item">
              <a href="https://highstrung.co/2017/05/04/solar-and-the-city-a-day-with-brooklyn-solarworks/">
                <img src="../../images/presskit/brooklynsolar.jpg" />
              </a>
              <h3>Solar and the City: A Day with Brooklyn SolarWorks</h3>
              <h5>As the High-Strung ambassador for the Power chapter, Frida joined a group of New Yorkers for a rainy-day tour with Brooklyn SolarWorks, put on by New York Adventure Club.</h5>
            </div>
            <div className="press-kit-item">
              <a href="https://www.timeout.com/newyork/things-to-do/the-secret-eats-and-gritty-past-of-chinatown">
                <img src="../../images/presskit/chinatown.jpg" />
              </a>
              <h3>The Secret Eats and Gritty Past of Chinatown</h3>
              <h5>Ken Butler’s artwork is playful. Often, literally. He designs, builds and plays unconventional musical instruments...</h5>
            </div>
            <div className="press-kit-item">
              <a href="http://www.huffingtonpost.com/entry/how-this-new-york-city-transplant-built-an-adventure_us_5898f71be4b0985224db58a5">
                <img src="../../images/presskit/community.png" />
              </a>
              <h3>How This New York City Transplant Built An Adventure-Filled Community</h3>
              <h5>In this episode of The #CommunityBuilder Series, I sit down with Corey Schneider, the Founder of New York Adventure Club to...</h5>
            </div>
            <div className="press-kit-item">
              <a href="https://www.thrillist.com/lifestyle/new-york/best-jobs-in-nyc-how-to-get-them">
                <img src="../../images/presskit/cooljob.jpg" />
              </a>
              <h3>How To Get NYC'S Coolest Jobs, According To The People Who Have Them</h3>
              <h5>Chances are, whatever job you’re working by day or night (or both) just to pay rent in New York isn’t making all of your friends...</h5>
            </div>
          </div>
        </div>
      <NYACFooter />
    </div>
  )
};

export default PressKit;
