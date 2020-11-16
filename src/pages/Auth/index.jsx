import React from 'react';
import {
  Form, FormGroup, Label, Input,
} from 'reactstrap';
import Card from '../../components/Card';
import './index.css';

const Auth = () => (
  <div className="main">
    <Card className="w-50">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Input without validation</Label>
          <Input />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Valid input</Label>
          <Input valid />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Invalid input</Label>
          <Input invalid />
        </FormGroup>
      </Form>
    </Card>
  </div>
);

export default Auth;
