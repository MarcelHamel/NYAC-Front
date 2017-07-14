import React, { Component } from 'react';
import axios from 'axios';

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

  componentWillMount() {
    if (localStorage.getItem('lastUpdateTime') && localStorage.getItem('events')) {
      let localStorageEvents = JSON.parse(localStorage.getItem('events'));
      let currentEvent = {};
      localStorageEvents.forEach((event) => {
        if (event.id == this.props.params.id) { currentEvent = event }
      })
      if ( currentEvent ) {
        this.setState({ event: currentEvent })
      } else {
        axios.get(`/events/${this.props.params.id}`)
        .then((response) => {
          this.setState({ event: response.data })
        })
        .catch(err => console.log('ERROR:', err));
      }
    } else {
      axios.get(`/events/${this.props.params.id}`)
      .then((response) => {
        this.setState({ event: response.data })
      })
      .catch(err => console.log('ERROR:', err));
    }

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
