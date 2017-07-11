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
    const currentTime = new Date().getTime();
    if (localStorage.getItem('lastUpdateTime') && localStorage.getItem('events')) {
      const lastUpdate = localStorage.getItem('lastUpdateTime');
      if (currentTime - lastUpdate < 900000) {
        let displayEvents = JSON.parse(localStorage.getItem('events')).slice(0,6);
        this.setState({
          events: displayEvents,
          loading: false
        })
      } else {
        axios.get('/events')
        .then(response => {
          let displayEvents = response.data.slice(0,6);
          this.setState({
            events: displayEvents,
            loading: false
          })
        window.localStorage.setItem('events', JSON.stringify(response.data));
        window.localStorage.setItem('lastUpdateTime', new Date().getTime());
      })
      .catch(err => console.log('ERROR:', err));
      }
    } else {
      axios.get('/events')
      .then(response => {
        let displayEvents = response.data.slice(0,6);
        this.setState({
          events: displayEvents,
          loading: false
        })
        window.localStorage.setItem('events', response.data);
        window.localStorage.setItem('lastUpdateTime', new Date().getTime());
      })
      .catch(err => console.log('ERROR:', err));
    }
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
