import React, { Component } from 'react';

import UniversalHeader from '../Headers/UniversalHeader';
import NYACFooter from '../NYACFooter/NYACFooter';

export default class PhotoGallery extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <UniversalHeader image='../../images/about-page-hero.jpg' />

        <NYACFooter />
      </div>
    )
  }
}
