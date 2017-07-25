// This is the banner image for the Album Preview Card, similar to the Event Preview.
import React from 'react';

const AlbumPreviewCardBanner = (props) => {
  return (
    <div className="album-preview-card-banner" style={{backgroundImage: `url(${props.image})`}}>
    </div>
  )
};

export default AlbumPreviewCardBanner;
