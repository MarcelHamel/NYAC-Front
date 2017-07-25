// This is the search bar itself.

// Bar has no handleSubmit attached here, as it is contained in the parent SearchBarContainer.

import React from 'react';

const SearchBar = (props) => {
  return(
    <div>
      <input type="text" name="searchField" onChange={props.handleChange} placeholder="Search by keyword" />
    </div>
  )
}

export default SearchBar;
