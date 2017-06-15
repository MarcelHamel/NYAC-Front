import React from 'react';

const CategoryPreviewText = (props) => {
  return(
    <div id="category-preview-text" className="text-shadow">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default CategoryPreviewText;
