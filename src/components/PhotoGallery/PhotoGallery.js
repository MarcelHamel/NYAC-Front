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

  componentWillMount() {
    this.setState({ loading: true })
  }

  componentDidMount() {
    axios.get('http://localhost:8000/photos')
    .then(response => {
      this.setState({
        albums: response.data,
        loading: false
      })
    })
    .catch(err => console.log('ERROR:', err));
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
