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
import Card from '../../components/Card';
import './styles.css';

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
    if (email) {
      const re = /\S+@\S+\.\S+/;
      const validate = re.test(email.value);
      if (validate) {
        return setEmail({
          ...email,
          valid: true,
          invalid: false,
        });
      }
      return setEmail({
        ...email,
        invalid: true,
        valid: false,
      });
    }
    return setEmail(initialValue);
  };

  const validatePassword = () => {
    if (password) {
      const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
      const validate = re.test(password.value);
      if (validate) {
        return setPassword({
          ...password,
          valid: true,
          invalid: false,
        });
      }
      return setPassword({
        ...password,
        invalid: true,
        valid: false,
      });
    }
    return setPassword(initialValue);
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
                  value={email.value}
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
                  valid={password.valid}
                  invalid={password.invalid}
                />
                <div className="d-flex justify-content-beteween mb-1">
                  <Button color="link" style={{ color: red[400] }} className="d-flex justify-content-left w-100 p-2">Sign Up</Button>
                  <Button color="link" style={{ color: red[400] }} className="d-flex justify-content-end w-100 p-2">Forgot password</Button>
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
