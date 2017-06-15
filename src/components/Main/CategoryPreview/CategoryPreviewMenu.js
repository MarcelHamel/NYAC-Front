import React from 'react';
import { Link } from 'react-router';

const CategoryPreviewMenu = (props) => {
  let categoryMenuItems = props.categories.map((category) => {
    let categoryKey = `${category.title}${props.categories.indexOf(category)}`;
    let categoryMenuItem = 'category-preview-menu-link';
    let categoryMenuStatus = props.current === props.categories.indexOf(category) ? categoryMenuItem + ' category-active' : categoryMenuItem;
    return <Link to="#" onClick={props.selectCategoryPreview} className={categoryMenuStatus} key={`category${categoryKey}`} id={`category${categoryKey}`}>{category.title}</Link>;
  })

  return(
    <div id="category-preview-menu">
      {categoryMenuItems}
    </div>
  )
}

export default CategoryPreviewMenu;
