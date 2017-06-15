import React from 'react';

const CategoryScrollRight = (props)=> {
  return(
    <div className="category-scroll-arrow-box" onClick={props.scrollRight}>
      <div className="category-scroll-arrow scroll-arrow-right"></div>
    </div>
  )
}

export default CategoryScrollRight;
