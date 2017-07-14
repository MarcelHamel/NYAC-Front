import React from 'react';
import { Link } from 'react-router';

const FooterLinks = (props) => {
  return (
    <div className="footer-links">
      <Link to="/">Home</Link>
      <div className="menu-spacer"> </div>
      <a href="http://about.nyadventureclub.com/about/">About</a>
      <div className="menu-spacer"> </div>
      <a href="http://about.nyadventureclub.com/press/">Press</a>
      <div className="menu-spacer"> </div>
      <Link to="/gallery">Gallery</Link>
      <div className="menu-spacer"> </div>
      <a href="http://about.nyadventureclub.com/private-events/">Private Events</a>
      <div className="menu-spacer"> </div>
      <a href="https://www.giftfly.com/shop/new-york-adventure-club" target="_blank">Gift Card</a>
      <div className="menu-spacer"> </div>
      <a onClick={props.displayContactModal}>Contact</a>
    </div>
  )
}

export default FooterLinks;
