// A single navLink. The conditional render turns a link gold if display its category page.

import React from 'react';

const SingleNavLink = (props) => {
  if (props.name && props.name === props.category) {
    return (
      <a href={`/categories/${props.category}`} style={{color: '#DBA510'}}>{props.category.toUpperCase()}</a>
    )
  } else {
    return (
      <a href={`/categories/${props.category}`}>{props.category.toUpperCase()}</a>
    )
  }
}

export default SingleNavLink;
