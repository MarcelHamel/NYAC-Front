import React from 'react';
import { Link } from 'react-router';

const NavLinks = () => {
  return (
    <div id="nav-links" className="text-shadow">
      <Link to="#">TOURS</Link>
      <Link to="#">ACTIVITES</Link>
      <Link to="#">HIDDEN SPOTS</Link>
      <Link to="#">FOOD</Link>
      <Link to="#">ARTS</Link>
      <Link to="#">HISTORIC SITES</Link>
      <Link to="#">SOCIAL</Link>
    </div>
  )
}

export default NavLinks;
