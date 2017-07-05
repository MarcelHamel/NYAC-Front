import React from 'react';

const SearchBar = (props) => {
  return(
    <div>
      <input type="text" name="searchField" onChange={props.handleChange} placeholder="Search for your adventure" />
    </div>
  )
}

export default SearchBar;
