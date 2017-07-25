// Shown in the Album view, this is a preview of each image in the album.
// Clicking this leads to the individual photo view, which renders a high-res
// version of the image.

import React from 'react';
import { Link } from 'react-router';

const PhotoPreview = (props) => {
  console.log(props);

  return(
    <div className="photo-preview-card">
      <Link to={`/gallery/photo/${props.event_id}/${props.photo_id}`}>
        <div className="photo-preview" style={{backgroundImage: `url(${props.image})`}} key={props.unique_key}>
        </div>
      </Link>
    </div>
  )
}

export default PhotoPreview;
