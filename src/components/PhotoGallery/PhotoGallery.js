import React, { Component } from 'react';
import axios from 'axios';

import UniversalHeader from '../Headers/UniversalHeader';
import NYACFooter from '../NYACFooter/NYACFooter';
import AlbumPreviewCardContainer from './AlbumPreviewCardContainer';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

export default class PhotoGallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/photos')
    .then(response => {
      this.setState({ albums: response.data })
      console.log("data:", response.data);
    })
    .then(() => {
      document
      .querySelector('.loading-screen-container')
      .setAttribute('style', 'display: none');
    })
    .catch(err => console.log('ERROR:', err));
  }

  render() {
    return (
      <div>
        <UniversalHeader image='../../images/about-page-hero.jpg' />
        <div className="container flex-column">
          <h1>Photos from Past Events</h1>
          <AlbumPreviewCardContainer albums={this.state.albums} />
          <LoadingScreen />
        </div>
        <NYACFooter />
      </div>
    )
  }
}
