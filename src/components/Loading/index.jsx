import React from "react";
import ReactLoading from "react-loading";
import "./styles.css";

const Loading = ({ type, color }) => (
  <ReactLoading type={type} color={color} height="5%" width="5%" />
);

export default Loading;
