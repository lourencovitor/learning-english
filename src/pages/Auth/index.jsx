/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from 'reactstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import './styles.css';
import { emailValidade, passwordValidade } from './validate';

const initialValue = {
  value: '',
  valid: false,
  invalid: false,
};

const Auth = () => {
  const [email, setEmail] = useState({
    initialValue,
  });
  const [password, setPassword] = useState({
    initialValue,
  });

  const validateEmail = () => {
    const data = emailValidade(email.value, email);
    setEmail({ ...data });
  };

  const validatePassword = () => {
    const data = passwordValidade(password.value, password);
    setPassword({ ...data });
  };

  const onSubmit = () => {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
  };

  return (
    <div className="main">
      <Row className="w-100 d-flex justify-content-center">
        <Col sm={12} md={7} lg={4}>
          <Card style={{ borderRadius: '20px' }}>
            <h1 className="text-center"><AccountCircleIcon style={{ fontSize: 50, color: red[400] }} /></h1>
            <Form>
              <FormGroup>
                <Label for="email" className="mb-1">E-mail</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email.value || ''}
                  onChange={(e) => setEmail({ ...email, value: e.target.value })}
                  onKeyUp={validateEmail}
                  valid={email.valid}
                  invalid={email.invalid}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password" className="mb-1">Password</Label>
                <Input
                  name="password"
                  id="password"
                  value={password.value}
                  onChange={(e) => {
                    setPassword({ ...password, value: e.target.value });
                  }}
                  onKeyUp={() => validatePassword()}
                  valid={password.valid || ''}
                  invalid={password.invalid}
                />
                <div className="d-flex justify-content-beteween my-3 p-1">
                  <Link to="/register-user" className="d-flex justify-content-first w-100">
                    <Button color="link" className="p-0" style={{ color: red[400], boxShadow: 'none' }}>Sign Up</Button>
                  </Link>
                  <Link to="#" className="d-flex justify-content-end w-100 ">
                    <Button color="link" className="p-0" style={{ color: red[400], boxShadow: 'none' }}>Forgot password</Button>
                  </Link>
                </div>
                <Button onClick={onSubmit} color="danger" block disabled={!email.valid || !password.valid}>Sign in</Button>
              </FormGroup>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Auth;
