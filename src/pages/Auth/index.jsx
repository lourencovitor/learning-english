import React, { useState } from 'react';
import {
  Form, FormGroup, Label, Input,
} from 'reactstrap';
import Card from '../../components/Card';
import './index.css';

const Auth = () => {
  const [email, setEmail] = useState({
    value: '',
    valid: false,
    invalid: false,
  });
  const [password, setPassword] = useState({
    value: '',
    valid: false,
    invalid: false,
  });

  const validateEmail = () => {
    if (email.value.length) {
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
    return setEmail({ ...email });
  };

  const validatePassword = () => {
    if (password.value.length) {
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
    return setPassword({ ...password });
  };

  return (
    <div className="main">
      <Card className="w-25" style={{ borderRadius: '20px' }}>
        <h1 className="text-center">Sign in</h1>
        <Form>
          <FormGroup>
            <Label for="email" className="mb-1">E-mail</Label>
            <Input
              name="email"
              value={email.value}
              onChange={(e) => setEmail({ ...email, value: e.target.value })}
              onBlur={() => validateEmail()}
              valid={email.valid}
              invalid={email.invalid}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password" className="mb-1">Password</Label>
            <Input
              value={password.value}
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => validatePassword()}
              valid={password.valid}
              invalid={password.invalid}
            />
          </FormGroup>
        </Form>
      </Card>
    </div>
  );
};

export default Auth;
