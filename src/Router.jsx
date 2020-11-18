import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { auth, dashBoard, error, registerUser } from "./pages";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={auth} />
      <Route path="/register-user" exact component={registerUser} />
      <Route path="/dash-board" exact component={dashBoard} />
      <Route path="/error" component={error} />
      <Redirect to="/error" />
    </Switch>
  </BrowserRouter>
);
export default Router;
