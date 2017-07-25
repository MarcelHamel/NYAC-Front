// This is the container for the "How We Adventure" section of the landing page.

import React from 'react';

import Discover from './Discover';
import Explore from './Explore';
import Learn from './Learn';

const HowWeAdventure = () => {
  return (
    <section id="how-we-adventure">
      <h1>How We Adventure</h1>
      <div className="container">
        <Discover />
        <Explore />
        <Learn />
      </div>
    </section>
  )
}

export default HowWeAdventure;
