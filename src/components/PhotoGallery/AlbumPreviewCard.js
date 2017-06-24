import React from 'react';
import { Link } from 'react-router';

import AlbumPreviewCardBanner from './AlbumPreviewCardBanner';

const AlbumPreviewCard = (props) => {
  return(
    <div className="album-preview-card">
      <Link to={`/gallery/${props.album.id}`}>
        <AlbumPreviewCardBanner image={props.album.photo_sample[0].photo_link} />
      </Link>
      <h3>{props.album.title}</h3>
      <p>Photo Count: {props.album.photo_count}</p>
    </div>
  )
};

export default AlbumPreviewCard;
