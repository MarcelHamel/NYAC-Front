import React from 'react';

const SingleNavLink = (props) => {
  if (props.name && props.name === props.category) {
    return (
      <a href={`http://www.localhost:3000/categories/${props.category}`} style={{color: '#DBA510'}} key={`nav-link-${props.category}`}>{props.category.toUpperCase()}</a>
    )
  } else {
    return (
      <a href={`http://www.localhost:3000/categories/${props.category}`} key={`nav-link-${props.category}`}>{props.category.toUpperCase()}</a>
    )
  }
}

export default SingleNavLink;
