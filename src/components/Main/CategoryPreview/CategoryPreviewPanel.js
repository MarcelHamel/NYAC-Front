import React from 'react';

import CategoryScrollLeft from './CategoryScrollLeft'
import CategoryPreviewText from './CategoryPreviewText';
import CategoryPreviewLink from './CategoryPreviewLink';
import CategoryScrollRight from './CategoryScrollRight';

const CategoryPreviewPanel = (props) => {
  return(
    <div id="category-preview-panel" style={{backgroundImage: `url(${props.slide.image})`}}>
      <div id="category-preview-panel-overlay">
        <CategoryScrollLeft scrollLeft={props.scrollLeft} />
        <div id="category-preview-content-container">
          <CategoryPreviewText text={props.slide.text} title={props.slide.title} />
          <CategoryPreviewLink linkTarget={props.slide.linkTarget} linkTitle={props.slide.linkTitle}/>
        </div>
        <CategoryScrollRight scrollRight={props.scrollRight} />
      </div>
    </div>
  )
}

export default CategoryPreviewPanel;
