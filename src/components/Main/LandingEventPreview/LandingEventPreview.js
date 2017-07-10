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
      if (currentTime - lastUpdate < 300000) {
        this.setState({
          events: JSON.parse(localStorage.getItem('events')),
          loading: false
        })
      } else {
        axios.get('http://www.localhost:8000/events')
        .then(response => {
        this.setState({
          events: response.data,
          loading: false
        })
        window.localStorage.setItem('events', JSON.stringify(response.data));
        window.localStorage.setItem('lastUpdateTime', new Date().getTime());
      })
      .catch(err => console.log('ERROR:', err));
      }
    } else {
      axios.get('http://www.localhost:8000/events')
      .then(response => {
        this.setState({
          events: response.data,
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
