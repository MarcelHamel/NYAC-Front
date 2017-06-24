import React, { Component } from 'react';
import axios from 'axios';

import UniversalHeader from '../Headers/UniversalHeader';
import NYACFooter from '../NYACFooter/NYACFooter';
import PhotoPreviewContainer from './PhotoPreviewContainer';
import BackButton from './BackButton';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

export default class PhotoAlbum extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: [
        {
          id: '',
          photo_album: {
            title: '',
            event: {
              id: ''
            }
          }
        }
      ]
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/photos/albums/${this.props.params.id}`)
    .then(response => {
      this.setState({ photos: response.data })
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
    return(
      <div>
        <UniversalHeader image='../../images/about-page-hero.jpg' />
        <div className="container flex-column">
          <h1>{this.state.photos[0].photo_album.title}</h1>
          <BackButton />
          <PhotoPreviewContainer photos={this.state.photos} />
          <LoadingScreen />
        </div>
        <NYACFooter />
      </div>
    )
  }
}
