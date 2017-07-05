import React from 'react';
import { Link } from 'react-router';

const FooterLinks = () => {
  return (
    <div className="footer-links">
      <Link to="/">Home</Link>
      <div className="menu-spacer"> </div>
      <a href="http://about.nyadventureclub.com/nyadventureclub/" target="_blank">About</a>
      <div className="menu-spacer"> </div>
      <a href="http://about.nyadventureclub.com/press/">Press</a>
      <div className="menu-spacer"> </div>
      <a href="http://about.nyadventureclub.com/press-kit/">Presskit</a>
      <div className="menu-spacer"> </div>
      <Link to="/gallery">Gallery</Link>
      <div className="menu-spacer"> </div>
      <a href="http://about.nyadventureclub.com/private-events/" target="_blank">Private Events</a>
      <div className="menu-spacer"> </div>
      <a href="https://squareup.com/gift/2DEXAVS7PJ5YE/order" target="_blank">Gift Card</a>
      <div className="menu-spacer"> </div>
      <a href="http://about.nyadventureclub.com/nyadventureclub/" target="_blank">Contact</a>
    </div>
  )
}

export default FooterLinks;
