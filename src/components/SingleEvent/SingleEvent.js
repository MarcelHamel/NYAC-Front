// This is the primary component for the Single Event view.
import React, { Component } from 'react';
import axios from 'axios';
import { ValidateCache } from '../GetEventData/ValidateCache';

import UniversalHeader from '../Headers/UniversalHeader';
import SingleEventContainer from './SingleEventContainer';
import VenueDetails from './VenueDetails';
import NYACFooter from '../NYACFooter/NYACFooter';
import BackToTopLink from '../BackToTopLink/BackToTopLink';

export default class SingleEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      event: {
        logo: {
          original: {
            url: ''
          }
        },
        capacity: 0,
        start: {
          local: ''
        },
        end: {
          local: ''
        },
        name: {
          text: ''
        },
        description: {
          html: ''
        },
        ticket_classes: [],
        venue: {
          address: {
            city: '',
            localized_multi_line_address_display: [],
            localized_address_display: '',
            latitude: '',
            longitude: ''
          }
        },
        availability: 0
      }
    }
  }

  // This is the same caching algorithm as the category and landing event previews.
  // Rather than refreshing the batch if the event isn't found, it simply grabs
  // the event by ID.
  componentWillMount() {
    // Define events as event cache
    let eventsCache = localStorage.getItem('events');
    // Occasionally the cache is corrupted. Here's a try/catch function to avoid errors..
    const IsJSONString = (str) => {
      try {
          JSON.parse(str);
      } catch (e) {
          console.error("Not a valid JSON string")
          return false;
      }
      console.log("Valid JSON")
      return true;
    }
    // If the cache is a valid JSON string, then return that parsed string.
    // Else, return empty string.
    eventsCache = IsJSONString(eventsCache) ? JSON.parse(eventsCache) : '';
    const cacheIsValid = ValidateCache();

    // Filter function to pull event from cache
    const filterEventFromCache = (arr) => {
      return arr.filter(event => event.id === this.props.params.id)
    }
    // Set 'cachedEvent' to empty array if cache is invalid
    const cachedEvent = cacheIsValid ? filterEventFromCache(eventsCache)[0] : [];

    // Function to find ticket quantity
    const findTicketQuantityAndDisplay = (displayEvent) => {
      console.log(displayEvent.ticket_classes);
      let availability = 0;
      displayEvent.ticket_classes.forEach((ticket) => {
        availability += ticket.quantity_total;
        console.log('Availability: ', availability, ' plus qty:', ticket.quanity_total)
      })
      availability = availability < displayEvent.capacity ? availability : displayEvent.capacity;

      displayEvent.ticket_classes.forEach((ticket) => {

        availability -= ticket.quantity_sold;
      })

      console.log('availability', availability);
      displayEvent.availability = availability;
      console.log('ticketavail:' ,displayEvent.availability)

      this.setState({ event: displayEvent })
    }

    // Callback to fetch event from API
    const getEventFromAPI = (id) => {
      console.log('fetch from API')
      axios.get(`http://www.nyadventureclub.com/events/${id}`)
      .then(response => {
        findTicketQuantityAndDisplay(response.data)
      })
      .catch(err => console.log('Error retreiving event from Eventbrite API: ', err));
    }

    const handleCachedEvent = (cE) => {
      findTicketQuantityAndDisplay(cE)
    }

    cacheIsValid ? handleCachedEvent(cachedEvent) : getEventFromAPI(this.props.params.id);

    document.querySelector('body').scrollTop = 0;

  }


  render() {
    // If event doesn't have logo, display a default image.
    const headerImage = this.state.event.logo ?
                          this.state.event.logo.original.url :
                          '../../images/about_page_hero.jpg';

    return(
      <div>
        <UniversalHeader image={headerImage}/>
        <SingleEventContainer availability={this.state.event.availability} event={this.state.event} displayRedirectModal={this.displayRedirectModal} />
        <div className='mobile-venue-details'>
          <VenueDetails venue={this.state.event.venue} />
        </div>
        <BackToTopLink />
        <NYACFooter />
      </div>
    )
  }
}
