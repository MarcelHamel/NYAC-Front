import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import UniversalHeader from '../Headers/UniversalHeader';
import SingleEventContainer from './SingleEventContainer';
import NYACFooter from '../NYACFooter/NYACFooter';

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
    axios.get(`http://localhost:8000/events/${this.props.params.id}`)
    .then((response) => {
      this.setState({ event: response.data })
    })
    .catch(err => console.log('ERROR:', err));
  }

  render() {

    return(
      <div>
        <UniversalHeader image={this.state.event.logo.original.url}/>
        <SingleEventContainer event={this.state.event} />
        <NYACFooter />
      </div>
    )
  }
}
