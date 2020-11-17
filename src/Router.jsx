import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { auth, registerUser } from "./pages";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={auth} />
      <Route path="/register-user" exact component={registerUser} />
    </Switch>
  </BrowserRouter>
);
export default Router;
