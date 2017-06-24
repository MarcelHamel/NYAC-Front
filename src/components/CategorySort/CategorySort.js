import React, { Component } from 'react';
// import { Link } from 'react-router';
import axios from 'axios';

import UniversalHeader from '../Headers/UniversalHeader';
import NYACFooter from '../NYACFooter/NYACFooter';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

export default class CategorySort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/events/batch/')
    .then(response => {
      this.setState({ events: response.data });
      console.log(response.data);
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
        <LoadingScreen />
        <NYACFooter />
      </div>
    )
  }
}
