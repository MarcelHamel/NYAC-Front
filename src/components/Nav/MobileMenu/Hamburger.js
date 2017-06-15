import React from 'react';

const MenuToggle = (e) => {
  const hamburgerContainer = document.querySelector('#hamburger-container');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('#nav-links');
  const navSubscribe = document.querySelector('#nav-subscribe-button');
  hamburgerContainer.classList.toggle('visible');
  hamburger.classList.toggle('is-active');
  hamburger.classList.toggle('dropdown-burger');
  navLinks.classList.toggle('dropdown-menu');
  navSubscribe.classList.toggle('invisible');
}

const Hamburger = () => {
  return (
    <div id="hamburger-container">
      <p id="menu-title">MENU</p>
      <button className="hamburger hamburger--spring" type="button" onClick={MenuToggle.bind(this)}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  )
}

export default Hamburger;
