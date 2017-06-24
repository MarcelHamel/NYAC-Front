import React from 'react';

import PhotoPreview from './PhotoPreview';

const PhotoPreviewContainer = (props) => {
  let photoCards = props.photos.map((photo) => {
    console.log(photo);
    return <PhotoPreview image={photo.photo_link} unique_key={photo.id} event_id={photo.photo_album.event.id} photo_id={photo.id}/>
  })

  return (
    <div id="photo-preview-container">
      {photoCards}
    </div>
  )
}

export default PhotoPreviewContainer;
