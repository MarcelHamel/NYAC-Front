// This is the hamburger!

import React from 'react';

const MenuToggle = () => {
  // hamburgerContainer includes both the word 'BROWSE' and the burger itself
  const hamburgerContainer = document.querySelector('#hamburger-container');
  // This is the actual hamburger
  const hamburger = document.querySelector('.hamburger');
  // This is the array of navLinks
  const navLinks = document.querySelector('#nav-links');
  // This is the subscribe button from the nav bar
  const navSubscribe = document.querySelector('#nav-subscribe-button');
  // Activate the "visible" class when hamburger is clicked.
  // Sets display to "flex !important", which means that the user can expand the window
  // on desktop again without the hamburger disappearing.
  hamburgerContainer.classList.toggle('visible');
  // Self contained class from hamburgers.css, changes burger to "X"
  hamburger.classList.toggle('is-active');
  // Preserves display of [don't totally remember] through window resizing
  hamburger.classList.toggle('dropdown-burger');
  // Displays navLinks as dropdown menu
  navLinks.classList.toggle('dropdown-menu');
  // prevents subscribe button from reappearing if window expanded with hamburger menu open
  navSubscribe.classList.toggle('invisible');
}

// The below combination if buttons, spans etc is set out by Jon Suh's Hamburgers.css. Please consult his
// documentation for more info.
const Hamburger = () => {
  return (
    <div id="hamburger-container">
      <p id="menu-title">BROWSE</p>
      <button className="hamburger hamburger--spring" type="button" onClick={MenuToggle.bind(this)}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  )
}

export default Hamburger;
