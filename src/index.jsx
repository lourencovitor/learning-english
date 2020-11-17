import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router";

ReactDOM.render(
  <>
    <Provider store={configureStore()}>
      <Router />
    </Provider>
  </>,
  document.getElementById("root")
);
