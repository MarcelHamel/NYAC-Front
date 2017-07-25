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
        }
      }
    }
  }

  // This is the same caching algorithm as the category and landing event previews.
  // Rather than refreshing the batch if the event isn't found, it simply grabs
  // the event by ID.
  componentWillMount() {
    // Define events as event cache
    let eventsCache = localStorage.getItem('events');
    if (eventsCache) { eventsCache = JSON.parse(eventsCache)};
    const cacheIsValid = ValidateCache();
    console.log('cacheisvalid: ', cacheIsValid);

    const filterEventFromCache = (arr) => {
      return arr.filter(event => event.id === this.props.params.id)
    }
    const cachedEvent = eventsCache ? filterEventFromCache(eventsCache)[0] : [];

    const getEventFromAPI = (id) => {
      console.log('fetch from API')
      axios.get(`http://www.localhost:8000/events/${id}`)
      .then(response => this.setState({ event: response.data }))
    }

    cachedEvent ? this.setState({ event: cachedEvent }) : getEventFromAPI(this.props.params.id);

    document.querySelector('body').scrollTop = 0;
  }

  render() {

    return(
      <div>
        <UniversalHeader image={this.state.event.logo.original.url}/>
        <SingleEventContainer event={this.state.event} displayRedirectModal={this.displayRedirectModal} />
        <div className='mobile-venue-details'>
          <VenueDetails venue={this.state.event.venue} />
        </div>
        <BackToTopLink />
        <NYACFooter />
      </div>
    )
  }
}
