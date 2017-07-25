// Container for SearchBar.
import React, { Component } from 'react';
import update from 'react-addons-update';

import SearchBar from './SearchBar';

export default class SearchBarContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchField: ''
    }
  }

  // Your standard handleChange works for the SearchBar
  handleChange(event) {
    let newState = update(this.state, {
        $merge: {
          [event.target.name]: event.target.value
        }
    })

    this.setState(newState);
  }

  // window.location.assign was used here in order to force the Search page to remount when a
  // new search was made from it. Otherwise, the query parameter itself would change but the
  // component wouldn't update. I haven't encountered performance degradation from this yet, but
  // if we're attempting to scale something, this is naturally sort of suspect. The category sort
  // pages work the same way.
  handleSubmit(event) {
    event.preventDefault();

    window.location.assign(`/search/${this.state.searchField}`);
  }

  render() {
    return (
      <div id="event-search-bar">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <SearchBar handleChange={this.handleChange.bind(this)} />
        </form>
      </div>
    )
  }
}
