import React from 'react';
import { Link } from 'react-router';

const FooterLinks = () => {
  return (
    <div className="footer-links">
      <Link to="#">About</Link>
      <div className="menu-spacer">|</div>
      <Link to="#">Presskit</Link>
      <div className="menu-spacer">|</div>
      <Link to="#">Gallery</Link>
      <div className="menu-spacer">|</div>
      <Link to="#">Private Events</Link>
      <div className="menu-spacer">|</div>
      <Link to="#">Contact</Link>
    </div>
  )
}

export default FooterLinks;
