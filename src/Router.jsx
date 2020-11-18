import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { auth, error, registerUser } from "./pages";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={auth} />
      <Route path="/register-user" exact component={registerUser} />
      <Route path="/error" component={error} />
      <Redirect to="/error" />
    </Switch>
  </BrowserRouter>
);
export default Router;
