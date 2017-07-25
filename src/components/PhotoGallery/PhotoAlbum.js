// This is the display for the Photo Album view. Shows all photos from one event album on Meetup.
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
      ],
      loading: false
    }
  }

  // Sets loading screen prop to "true" as component mounts...
  componentWillMount() {
    this.setState({ loading: true })
  }

  // Fetches contents of photo album from Meetup based on album ID.
  componentDidMount() {
    axios.get(`/photos/albums/${this.props.params.id}`)
    .then(response => {
      // Commits array of photos to application state, turns off loading screen.
      this.setState({
        photos: response.data,
        loading: false
      })
    })
    .catch(err => console.log('ERROR:', err));

    // Also scrolls to top of page when component mounts.
    document.querySelector('body').scrollTop = 0;
  }

  render() {
    // For the Album view, the High-Res version of the first photo in the album is used as the Universal
    // Header background.
    let backgroundImage;
    backgroundImage = this.state.photos ? this.state.photos[0].highres_link : '';

    return(
      <div>
        <UniversalHeader image={backgroundImage} />
        <div className="container flex-column">
          <h1>{this.state.photos[0].photo_album.title}</h1>
          <BackButton />
          <PhotoPreviewContainer photos={this.state.photos} />
          <LoadingScreen loading={this.state.loading} />
        </div>
        <NYACFooter />
      </div>
    )
  }
}
