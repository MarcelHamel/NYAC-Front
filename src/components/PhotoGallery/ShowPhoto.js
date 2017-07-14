import React, { Component } from 'react';
import axios from 'axios';

import UniversalHeader from '../Headers/UniversalHeader';
import NYACFooter from '../NYACFooter/NYACFooter';
import BackButton from './BackButton';

export default class ShowPhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: {
        highres_link: '',
        photo_album: {
          title: ''
        }
      }
    }
  }

  componentDidMount() {
    axios.get(`/photos/event/${this.props.params.event_id}/photo/${this.props.params.id}`)
    .then(response => {
      this.setState({ photo: response.data })
      console.log("data:", response.data);
    })
    .catch(err => console.log('ERROR:', err));

    document.querySelector('body').scrollTop = 0;
  }

  render() {
    return(
      <div>
        <UniversalHeader image='../../../../images/about-page-hero.jpg' />
        <div className="container flex-column">
          <h1>{this.state.photo.photo_album.title}</h1>
          <img src={this.state.photo.highres_link} id="gallery-feature-photo" />
          <BackButton />
        </div>
        <NYACFooter />
      </div>
    )
  }
}
