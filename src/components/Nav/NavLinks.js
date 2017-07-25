// Nav menu

import React from 'react';

import SingleNavLink from './SingleNavLink';

const NavLinks = (props) => {
  const categories = ['Tours', 'Active', 'Hidden Spots', 'Food', 'Arts', 'Historic Sites', 'Social'];
  const allNavLinks = categories.map((category) => {
    return (
      <SingleNavLink name={props.name} category={category} key={`nav-link-${category}`} />
    )
  })

  return (
    <div id="nav-links" className="text-shadow">
    {allNavLinks}
    </div>
  )
}

export default NavLinks;
