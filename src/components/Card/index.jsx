/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card,
} from 'reactstrap';

export default ({ children, className }) => (
  <Card className={`${className} p-3`}>
    {children}
  </Card>
);
