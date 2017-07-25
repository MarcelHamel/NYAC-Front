// Category preview menu about category preview panel.

import React from 'react';
import { Link } from 'react-router';

const CategoryPreviewMenu = (props) => {
  // categories prop is the complete array of slides contained in state.
  // Maps each slide to a new menu link element...
  let categoryMenuItems = props.categories.map((category) => {
    // categoryKey becomes the element's id
    let categoryKey = `${category.title}${props.categories.indexOf(category)}`;
    // categoryMenuItem represents the default class name for menu items. This is
    // later concatenated with an active menu class name.
    let categoryMenuItem = 'category-preview-menu-link';
    // This line sets a classname for the active menu link
    let categoryMenuStatus = props.current === props.categories.indexOf(category) ? categoryMenuItem + ' category-active' : categoryMenuItem;
    // Returns Link element.
    return <Link to="#" onClick={props.selectCategoryPreview} className={categoryMenuStatus} key={`category${categoryKey}`} id={`category${categoryKey}`}>{category.title}</Link>;
  })

  // Renders menu container with array of links
  return(
    <div id="category-preview-menu">
      {categoryMenuItems}
    </div>
  )
}

export default CategoryPreviewMenu;
