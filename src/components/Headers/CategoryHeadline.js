// This component renders the Title and Category Description on the
// Category Sort page. ONLY renders if passed both category and title props.

import React from 'react';

const CategoryHeadline = (props) => {
  console.log('category: ', props.category);
  console.log('description: ', props.description);

  if (props.category && props.description) {
    return (
      <div className='category-headline'>
        <h3>{props.category}</h3>
        <p>{props.description}</p>
      </div>
    )
  } else {
    return(<div></div>)
  }
}

export default CategoryHeadline;
