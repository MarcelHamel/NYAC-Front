import React from 'react';
import { Link } from 'react-router';

const PhotoPreview = (props) => {
  console.log(props);

  return(
    <div>
      <Link to={`/gallery/photo/${props.event_id}/${props.photo_id}`}>
        <div className="photo-preview" style={{backgroundImage: `url(${props.image})`}} key={props.unique_key}>
        </div>
      </Link>
    </div>
  )
}

export default PhotoPreview;
