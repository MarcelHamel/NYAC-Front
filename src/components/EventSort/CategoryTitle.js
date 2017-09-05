// Renders category title

import React from 'react';

const CategoryTitle = (props) => {
  if (props.title) {
    return (
      <div>
        <h1 className="category-title">Browse {props.title} Experiences</h1>
      </div>
    )
  } else {
    return (<div></div>)
  }
}

export default CategoryTitle;
