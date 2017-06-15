import React from 'react';
import { Link } from 'react-router';

const CategoryPreviewLink = (props) => {
  return (
    <div>
      <Link to={props.linkTarget}>
        <button id="category-preview-link">{props.linkTitle}</button>
      </Link>
    </div>
  )
}

export default CategoryPreviewLink;

