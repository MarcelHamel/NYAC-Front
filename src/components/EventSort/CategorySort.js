// This component renders the category pages found in the Nav bar on each page.

import React, { Component } from 'react';
// GetEvents is our cache validation script.
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
      categoryDescription: '',
      location: '',
      timeOfWeek: '',
      timeOfDay: '',
      loading: false,
    }
  }

  componentWillMount() {
    // Upon component mount, turn on loading screen and set the title for the hero image.
    this.setState({
      loading: true,
      title: this.props.params.name
    })

    document.querySelector('body').scrollTop = 0;
  }

  componentDidMount() {

    // This contains all of the category descriptions contained within the header.
    const categoryDescriptions = {
      Tours: 'Get insider access to the best-kept local secrets.',
      Active: 'Discover hidden gems through physical exploration.',
      HiddenSpots: 'Explore secrets hiding in plain sight.',
      Food: 'Let your taste buds lead the way.',
      Arts: 'Take a closer look at the art influences defining our culture.',
      HistoricSites: 'Learn about the intricate and sometimes forgotten past of incredible destinations.',
      Social: 'Get social with our community, which includes everyone from recent NYC transplants to lifelong residents.'
    }

    // This filter function grabs all of the events that contain this category tag within their body.
    // This appears as a line of text within the event description.
    // Function is passed as a callback to "GetEvents".
    const filterEvents = (arr) => {
      window.localStorage.setItem('events', JSON.stringify(arr));
      const filteredEvents = arr.filter((event) => {
        if (event) {
          // Search the event description for the word "Categories".
          let categoryTagStart = event.description.html.indexOf('>Categories: ');
          // Find the end of the Category list.
          let categoryTagEnd = event.description.html.indexOf('<', categoryTagStart);
          // Grab the category list as its own string.
          let categoryTagsRaw = event.description.html.slice(categoryTagStart, categoryTagEnd);
          // Remove the word "Categories" from string.
          let categoryTags = categoryTagsRaw.slice(13);
          // Split categories into an array
          let categories = categoryTags.split(', ');
          // Return all events whose categories array includes the "name" paramater provided
          // in URL query string.
          return categories.includes(this.props.params.name);
        }
      })

      // Formats category name to find category description in categoryDescriptions object.
      const formatDescription = this.props.params.name.replace(' ','');
      // If the category is "All", then make sure the display events contain the entire array
      // And not the filtered results
      const displayEventsArray = this.props.params.name === 'All' ? arr : filteredEvents;
      this.setState({
        // Store displayedEvents in events and displayEvents in state.
        events: displayEventsArray,
        displayEvents: displayEventsArray,
        // Turn off loading screen
        loading: false,
        // Set category to parameter from URL query string
        category: this.props.params.name,
        // Set category description
        categoryDescription: categoryDescriptions[formatDescription]
      })
    }

    GetEvents('/events', filterEvents);
  }


  componentDidUpdate() {
    document.querySelector('body').scrollTop = 0;
  }

  // Mutliple handleChange functions exist as they are handed to different components.
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


  // This function filters events based on parameters supplied by user.
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
    console.log('category sort category:', this.state.category);
    console.log('category sort description:', this.state.categoryDescription);

    return(
      <div>
        <UniversalHeader image={image} name={this.props.params.name} category={this.state.category} description={this.state.categoryDescription} />
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
