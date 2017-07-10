import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

import './styles/normalize.css';
import './styles/style.css';

import Main from './components/Main/Main';
import SingleEvent from './components/SingleEvent/SingleEvent';
import About from './components/About/About';
import PrivateEvents from './components/PrivateEvents/PrivateEvents';
import PressKit from './components/PressKit/PressKit';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import PhotoAlbum from './components/PhotoGallery/PhotoAlbum';
import ShowPhoto from './components/PhotoGallery/ShowPhoto';
import CategorySort from './components/EventSort/CategorySort';
import SearchEvents from './components/EventSort/SearchEvents';

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
    <Route path="/about" component={About} />
    <Route path="/categories/:name" component={CategorySort} />
    <Route path="/search/:keyword" component={SearchEvents} />
    <Route path="/private-events" component={PrivateEvents} />
    <Route path="/presskit" component={PressKit} />
    <Route path="/gallery" component={PhotoGallery} />
    <Route path="/gallery/:id" component={PhotoAlbum} />
    <Route path="/gallery/photo/:event_id/:id" component={ShowPhoto} />
    <Route path="/event/:id" component={SingleEvent} />
  </Router>,
  document.getElementById('app'));
