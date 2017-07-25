// This is the main gallery page, which lists all Photo Albums connected to NYAC events on Meetup.
import React, { Component } from 'react';
import axios from 'axios';

import UniversalHeader from '../Headers/UniversalHeader';
import NYACFooter from '../NYACFooter/NYACFooter';
import AlbumPreviewCardContainer from './AlbumPreviewCardContainer';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

import about_page_hero from "../../images/about_page_hero.jpg"

export default class PhotoGallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      albums: [],
      loading: false
    }
  }

  // Turns on loading screen.
  componentWillMount() {
    this.setState({ loading: true })
  }

  // Fetches list of albums from Meetup
  componentDidMount() {
    axios.get('/photos')
    .then(response => {
      // Commits album list to application state, turns off loading screen.
      this.setState({
        albums: response.data,
        loading: false
      })
    })
    .catch(err => console.log('ERROR:', err));

    // Scroll to top of page on component load.
    document.querySelector('body').scrollTop = 0;
  }

  render() {
    return (
      <div>
        <UniversalHeader image={about_page_hero} />
        <div className="container flex-column">
          <h1>Photos from Past Experiences</h1>
          <AlbumPreviewCardContainer albums={this.state.albums} />
          <LoadingScreen loading={this.state.loading} />
        </div>
        <NYACFooter />
      </div>
    )
  }
}
