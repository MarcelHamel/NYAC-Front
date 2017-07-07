import React from 'react';
import { Link } from 'react-router';

const SingleNavLink = (props) => {
  if (props.name && props.name === props.category) {
    return (
      <Link to={`/categories/${props.category}`} style={{color: '#DBA510'}}>{props.category.toUpperCase()}</Link>
    )
  } else {
    return (
      <Link to={`/categories/${props.category}`}>{props.category.toUpperCase()}</Link>
    )
  }
}

export default SingleNavLink;
