// This Event Preview for the landing page.
// I will eventually want to break out the preview components into their own component folder.

import React, { Component } from 'react';
import { GetEvents } from '../../GetEventData/GetEvents';

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
    const processEvents = (data) => {
      window.localStorage.setItem('events', JSON.stringify(data));
      let displayEvents = data.slice(0,6);
      this.setState({
        events: displayEvents,
        loading: false
      })
    }

    GetEvents('/events', processEvents);
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
