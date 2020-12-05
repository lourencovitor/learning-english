/* eslint-disable import/prefer-default-export */
import React from "react";
import "../assets/css/global.css";
import Layout from "../layout";
import Auth from "./Auth";
import DashBoard from "./DashBoard";
import Error from "./Error";
import RegisterUser from "./RegisterUser";
import Games from "./Games";
import Activity from "./Activity";

export const auth = () => (
  <Layout>
    <Auth />
  </Layout>
);

export const registerUser = () => (
  <Layout>
    <RegisterUser />
  </Layout>
);

export const dashBoard = () => (
  <Layout>
    <DashBoard />
  </Layout>
);

export const games = () => (
  <Layout>
    <Games />
  </Layout>
);

export const activity = () => (
  <Layout>
    <Activity />
  </Layout>
);

export const error = () => (
  <Layout>
    <Error />
  </Layout>
);
