import React from 'react';

const SearchBar = (props) => {
  return(
    <div>
      <input type="text" name="searchField" onChange={props.handleChange} placeholder="Search by keyword" />
    </div>
  )
}

export default SearchBar;
