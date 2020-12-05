import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { activity, auth, dashBoard, error, games, registerUser } from "./pages";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={auth} />
      <Route path="/register-user" exact component={registerUser} />
      <Route path="/dash-board" exact component={dashBoard} />
      <Route path="/game" exact component={games} />
      <Route path="/activity" exact component={activity} />
      <Route path="/error" component={error} />
      <Redirect to="/error" />
    </Switch>
  </BrowserRouter>
);
export default Router;
