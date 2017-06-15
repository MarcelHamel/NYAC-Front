import React, { Component } from 'react';
import axios from 'axios';

import EventPreviewCardContainer from './EventPreviewCardContainer';

export default class LandingEventPreview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events : []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/events')
    .then(response => this.setState({ events: response.data }))
    .catch(err => console.log('ERROR:', err));
  }

  render() {
    return(
      <section id="event-preview-container">
        <h1>Find Your Adventure</h1>
        <EventPreviewCardContainer events={this.state.events}/>
      </section>
    )
  }
}
