import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { auth } from './pages';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={auth} />
    </Switch>
  </BrowserRouter>
);
export default Router;
