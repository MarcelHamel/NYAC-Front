import React, { Component } from 'react';
import { GetEvents } from '../GetEventData/GetEvents';

import UniversalHeader from '../Headers/UniversalHeader';
import NYACFooter from '../NYACFooter/NYACFooter';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import EventPreviewCardContainer from '../Main/LandingEventPreview/EventPreviewCardContainer';
import CategoryTitle from './CategoryTitle';
import FilterContainer from './FilterContainer';
import BackToTopLink from '../BackToTopLink/BackToTopLink';



export default class CategorySort extends Component {
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
    }
  }

  componentWillMount() {
    this.setState({
      loading: true,
      title: this.props.params.name
    })

    document.querySelector('body').scrollTop = 0;
  }

  componentDidMount() {
    const filterEvents = (arr) => {
      window.localStorage.setItem('events', JSON.stringify(arr));
      const filteredEvents = arr.filter((event) => {
        if (event) {
          let categoryTagStart = event.description.html.indexOf('>Categories: ');
          let categoryTagEnd = event.description.html.indexOf('<', categoryTagStart);
          let categoryTagsRaw = event.description.html.slice(categoryTagStart, categoryTagEnd);
          let categoryTags = categoryTagsRaw.slice(13);
          let categories = categoryTags.split(', ');
          return categories.includes(this.props.params.name);
        }
      })
      const displayEventsArray = this.props.params.name === 'All' ? arr : filteredEvents;
      this.setState({
        events: displayEventsArray,
        displayEvents: displayEventsArray,
        loading: false
      })
    }

    GetEvents('http://www.localhost:8000/events', filterEvents);
  }


  componentDidUpdate() {
    document.querySelector('body').scrollTop = 0;
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

        const citiesInQueens = ['Queens', 'Bayside'];
        let city = citiesInQueens.includes(event.venue.address.city) ? 'Queens' : event.venue.address.city;

        return city === this.state.location;
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
    const name = this.props.params.name.toLowerCase().replace(' ','');
    const image = require(`../../images/scroll_banner_images/${name}.jpeg`);

    return(
      <div>
        <UniversalHeader image={image} name={this.props.params.name} />
        <div id="event-preview-container">
          <CategoryTitle title={this.state.category} />
          <FilterContainer location={this.state.location} handleLocationChange={this.handleLocationChange.bind(this)} time={this.state.timeOfDay} handleTimeChange={this.handleTimeChange.bind(this)} day={this.state.timeOfWeek} handleDayChange={this.handleDayChange.bind(this)} />
          <EventPreviewCardContainer events={this.state.displayEvents} />
        </div>
        <LoadingScreen loading={this.state.loading} />
        <BackToTopLink />
        <NYACFooter />
      </div>
    )
  }
}
