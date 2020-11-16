/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card,
} from 'reactstrap';

export default ({ children, className, style }) => (
  <Card className={`${className} p-3`} style={style}>
    {children}
  </Card>
);
