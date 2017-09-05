import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

import './styles/normalize.css';
import './styles/style.css';

// This is the landing page
import Main from './components/Main/Main';
// This is the Single Event preview page
import SingleEvent from './components/SingleEvent/SingleEvent';
// This is the PhotoGallery page. It displays a collection of photo albums.
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
// This the PhotoAlbum page, which displays a collection of photos.
import PhotoAlbum from './components/PhotoGallery/PhotoAlbum';
// Displays a single photo from Meetup API.
import ShowPhoto from './components/PhotoGallery/ShowPhoto';
// Sorts category preview cards based on category
import CategorySort from './components/EventSort/CategorySort';
// Displays category preview cards based on search results
import SearchEvents from './components/EventSort/SearchEvents';

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
    <Route path="/categories/:name" component={CategorySort} />
    <Route path="/search/:keyword" component={SearchEvents} />
    <Route path="/gallery" component={PhotoGallery} />
    <Route path="/gallery/:id" component={PhotoAlbum} />
    <Route path="/gallery/photo/:event_id/:id" component={ShowPhoto} />
    <Route path="/event/:id" component={SingleEvent} />
  </Router>,
  document.getElementById('app'));
