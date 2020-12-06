/* eslint-disable no-unused-expressions */
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { activity, auth, dashBoard, error, games, registerUser } from "./pages";
import { isAuthenticated } from "./utils/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={auth} />
      <Route path="/register-user" exact component={registerUser} />
      <PrivateRoute path="/dash-board" exact component={dashBoard} />
      <PrivateRoute path="/game" exact component={games} />
      <PrivateRoute path="/activity" exact component={activity} />
      <Route path="/error" component={error} />
      <Redirect to="/error" />
    </Switch>
  </BrowserRouter>
);
export default Router;
