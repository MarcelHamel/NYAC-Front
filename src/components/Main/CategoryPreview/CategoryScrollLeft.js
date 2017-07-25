// Left scroll button in category preview.

import React from 'react';

const CategoryScrollLeft = (props)=> {
  return(
    <div className="category-scroll-arrow-box" onClick={props.scrollLeft}>
      <div className="category-scroll-arrow scroll-arrow-left"></div>
    </div>
  )
}

export default CategoryScrollLeft;
