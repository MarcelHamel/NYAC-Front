import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

import './styles/normalize.css';
import './styles/style.css';

import Main from './components/Main/Main';
import SingleEvent from './components/SingleEvent/SingleEvent';

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main} />
    <Route path="/:id" component={SingleEvent} />
  </Router>,
  document.getElementById('app'));
