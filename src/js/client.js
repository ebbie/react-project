import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Devices from './pages/Devices';
import About from './pages/About';
import Layout from './pages/Layout';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute path="/about-us" component={About} />
      <Route path="/about-us" name="about" component={About} />
      <Route path="/devices(/:devices)" name="devices" component={Devices} />
    </Route>
  </Router>,
  app,
);
