// This search events component is virtually identical to the category filter page.
// The crucial difference between the two is the SearchEvents is handed an array of
// events provided by the Eventbrite API's search endpoint, where CategorySort receives
// the next 100 upcoming events.

import React, { Component } from 'react';
import axios from 'axios';

import SearchHeader from '../Headers/SearchHeader';
import NYACFooter from '../NYACFooter/NYACFooter';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import EventPreviewCardContainer from '../Main/LandingEventPreview/EventPreviewCardContainer';
import SearchTitle from './SearchTitle';
import FilterContainer from './FilterContainer';

import '../../images/about_page_hero.jpg';

export default class SearchEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      displayEvents: [],
      category: '',
      location: '',
      timeOfWeek: '',
      timeOfDay: '',
      loading: false,
      title: ''
    }
  }

  componentWillMount() {
    this.setState({ loading: true })
  }

  componentDidMount() {
    const title = this.props.params.name;
    axios.get(`/events/search/${this.props.params.keyword}`)
    .then(response => {
      this.setState({
        events: response.data,
        displayEvents: response.data,
        category: title,
        loading: false
      });
    })
    .catch(err => console.log('ERROR:', err));
  }

  handleLocationChange(e) {
    this.setState({ location: e.target.value });
    setTimeout(this.filterEvents.bind(this), 500);
  }

  handleTimeChange(e) {
    this.setState({ timeOfDay: e.target.value });
    setTimeout(this.filterEvents.bind(this), 500);
  }

  handleDayChange(e) {
    this.setState({ timeOfWeek: e.target.value });
    setTimeout(this.filterEvents.bind(this), 500);
  }

  filterEvents() {
    let filteredEvents = this.state.events;

    // Filters first by city, if condition is present.
    if (this.state.location) {
      filteredEvents = filteredEvents.filter((event) => {
        return event.venue.address.city === this.state.location;
      })
    }

    // Filters next by timeOfWeek, if condition is present.
    if (this.state.timeOfWeek) {
      filteredEvents = filteredEvents.filter((event) => {
        let eventDayRaw = new Date(event.start.local)
        let eventDay = eventDayRaw.getDay();
        if (this.state.timeOfWeek === "Weekday") {
          return eventDay < 5 && eventDay > 0
        } else {
          return eventDay === 0 || eventDay > 4
        }
      })
    }

    // Filters finally by timeOfDay
    if (this.state.timeOfDay) {
      filteredEvents = filteredEvents.filter((event) => {

        let eventDayRaw = new Date(event.start.local)
        let eventHour = eventDayRaw.getHours();

        switch (this.state.timeOfDay) {
          case 'Morning':
            return eventHour > 4 && eventHour < 12;
          case 'Afternoon':
            return eventHour > 11 && eventHour < 17;
          case 'Evening':
            return eventHour > 16 || eventHour < 5;
        }
      })
    }

    this.setState({ displayEvents: filteredEvents })
  }


  render() {
    const image = require(`../../images/about_page_hero.jpg`);

    return(
      <div>
        <SearchHeader image={image} />
        <div id="event-preview-container">
          <SearchTitle keyword={this.props.params.keyword} />
          <FilterContainer location={this.state.location} handleLocationChange={this.handleLocationChange.bind(this)} time={this.state.timeOfDay} handleTimeChange={this.handleTimeChange.bind(this)} day={this.state.timeOfWeek} handleDayChange={this.handleDayChange.bind(this)} />
          <EventPreviewCardContainer events={this.state.displayEvents} />
        </div>
        <LoadingScreen loading={this.state.loading} />
        <NYACFooter />
      </div>
    )
  }
}
