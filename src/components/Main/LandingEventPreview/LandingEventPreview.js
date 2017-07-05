import React, { Component } from 'react';
import axios from 'axios';

import EventPreviewCardContainer from './EventPreviewCardContainer';
import LoadingScreen from '../../LoadingScreen/LoadingScreen';

export default class LandingEventPreview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events : [],
      loading: false
    }
  }

  componentWillMount() {
    this.setState({ loading: true })
  }

  componentDidMount() {
    axios.get('http://localhost:8000/events')
    .then(response => this.setState({
      events: response.data,
      loading: false
    }))

    .catch(err => console.log('ERROR:', err));
  }

  render() {
    return(
      <section id="event-preview-container">
        <h1>Upcoming Experiences</h1>
        <EventPreviewCardContainer events={this.state.events}/>
        <LoadingScreen loading={this.state.loading} />
      </section>
    )
  }
}
