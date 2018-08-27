import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as routes from 'constants/routes';

import Search from './scenes/search';
import Discover from './scenes/discover';

// Dashboard Router.
const Router = () => (
  <Switch>
    <Route exact path={routes.DASHBOARD} component={Discover} />
    <Route path={routes.SEARCH} component={Search} />
  </Switch>
);

export default Router;
