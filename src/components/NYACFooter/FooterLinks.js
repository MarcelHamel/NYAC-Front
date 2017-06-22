import React from 'react';
import { Link } from 'react-router';

const FooterLinks = () => {
  return (
    <div className="footer-links">
      <Link to="/">Home</Link>
      <div className="menu-spacer"> </div>
      <Link to="/about">About</Link>
      <div className="menu-spacer"> </div>
      <Link to="/presskit">Presskit</Link>
      <div className="menu-spacer"> </div>
      <Link to="/gallery">Gallery</Link>
      <div className="menu-spacer"> </div>
      <Link to="/private-events">Private Events</Link>
      <div className="menu-spacer"> </div>
      <a href="https://squareup.com/gift/2DEXAVS7PJ5YE/order">Gift Card</a>
      <div className="menu-spacer"> </div>
      <Link to="#">Contact</Link>
    </div>
  )
}

export default FooterLinks;
