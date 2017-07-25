// Container for Album Preview Cards.
import React from 'react';

import AlbumPreviewCard from './AlbumPreviewCard';

const AlbumPreviewCardContainer = (props) => {
  let albumCards = props.albums.map((album) => {
    return <AlbumPreviewCard album={album} key={album.id} />
  })
  return(
    <div id="album-preview-card-container">
      {albumCards}
    </div>
  )
};

export default AlbumPreviewCardContainer;
