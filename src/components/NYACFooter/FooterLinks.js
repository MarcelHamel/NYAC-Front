import React from 'react';
import { Link } from 'react-router';

const FooterLinks = () => {
  return (
    <div className="footer-links">
      <Link to="#">About</Link>
      |
      <Link to="#">Presskit</Link>
      |
      <Link to="#">Gallery</Link>
      |
      <Link to="#">Private Events</Link>
      |
      <Link to="#">Contact</Link>
    </div>
  )
}

export default FooterLinks;
