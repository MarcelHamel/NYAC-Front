import React from 'react';

const SearchTitle = (props) => {
  return (
    <div>
      <p className="search-keyword"><i>Showing search results for: "{props.keyword}"</i></p>
    </div>
  )
}

export default SearchTitle;
