import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';

const Routes = () => (
  <Switch>
    <Route path="/" component={ MainPage } />
  </Switch>
);

export default Routes;
