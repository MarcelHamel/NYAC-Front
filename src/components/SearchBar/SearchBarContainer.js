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

  handleChange(event) {
    let newState = update(this.state, {
        $merge: {
          [event.target.name]: event.target.value
        }
    })

    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();

    window.location=`http://localhost:3000/search/${this.state.searchField}`;
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
