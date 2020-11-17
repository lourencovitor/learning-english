/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { red } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "../../components/Card";
import "./styles.css";
import {
  nameValidade,
  phoneValidade,
  rgValidade,
  confirmPasswordValidade,
} from "./validate";
import { emailValidade, passwordValidade } from "../Auth/validate";
import { POST_USER } from "../../redux/actions";
import { postUser } from "../../redux/user/actions";

const initialValue = {
  value: "",
  valid: false,
  invalid: false,
};

const RegisterUser = ({ postUserAction }) => {
  const [name, setName] = useState({
    initialValue,
  });
  const [rg, setRg] = useState({
    initialValue,
  });
  const [email, setEmail] = useState({
    initialValue,
  });
  const [phone, setPhone] = useState({
    initialValue,
  });
  const [password, setPassword] = useState({
    initialValue,
  });
  const [confirmPassword, setConfirmPassword] = useState({
    initialValue,
  });

  const validateName = () => {
    const data = nameValidade(name.value, name);
    setName({ ...data });
  };

  const validateRg = () => {
    const data = rgValidade(rg.value, rg);
    setRg({ ...data });
  };

  const validateEmail = () => {
    const data = emailValidade(email.value, email);
    setEmail({ ...data });
  };

  const validatePhone = () => {
    const data = phoneValidade(phone.value, phone);
    setPhone({ ...data });
  };

  const validatePassword = () => {
    const data = passwordValidade(password.value, password);
    setPassword({ ...data });
  };

  const validateConfirmPassword = () => {
    const data = confirmPasswordValidade(
      confirmPassword.value,
      password.value,
      confirmPassword
    );
    setConfirmPassword({ ...data });
  };

  const onSubmit = () => {
    const data = {
      name: name.value,
      rg: rg.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    };
    postUserAction(data);
  };

  return (
    <div className="main">
      <Row className="w-100 d-flex justify-content-center">
        <Col sm={12} md={7} lg={4}>
          <Card style={{ borderRadius: "20px" }}>
            <h1 className="text-center">
              <PersonAddIcon style={{ fontSize: 50, color: red[400] }} />
            </h1>
            <Form>
              <FormGroup>
                <Label for="name" className="mb-1">
                  Name
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={name.value || ""}
                  onChange={(e) => setName({ ...name, value: e.target.value })}
                  onKeyUp={validateName}
                  valid={name.valid}
                  invalid={name.invalid}
                />
              </FormGroup>
              <FormGroup>
                <Label for="rg" className="mb-1">
                  RG
                </Label>
                <Input
                  type="number"
                  name="rg"
                  id="rg"
                  max={9}
                  value={rg.value || ""}
                  onChange={(e) => setRg({ ...rg, value: e.target.value })}
                  onKeyUp={validateRg}
                  valid={rg.valid}
                  invalid={rg.invalid}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email" className="mb-1">
                  E-mail
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email.value || ""}
                  onChange={(e) =>
                    setEmail({ ...email, value: e.target.value })
                  }
                  onKeyUp={validateEmail}
                  valid={email.valid}
                  invalid={email.invalid}
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone" className="mb-1">
                  Phone
                </Label>
                <Input
                  type="number"
                  name="phone"
                  id="phone"
                  max={13}
                  value={phone.value || ""}
                  onChange={(e) =>
                    setPhone({ ...phone, value: e.target.value })
                  }
                  onKeyUp={validatePhone}
                  valid={phone.valid}
                  invalid={phone.invalid}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password" className="mb-1">
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={password.value || ""}
                  onChange={(e) =>
                    setPassword({ ...password, value: e.target.value })
                  }
                  onKeyUp={validatePassword}
                  valid={password.valid}
                  invalid={password.invalid}
                />
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword" className="mb-1">
                  Confirm password
                </Label>
                <Input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={confirmPassword.value || ""}
                  onChange={(e) =>
                    setConfirmPassword({
                      ...confirmPassword,
                      value: e.target.value,
                    })
                  }
                  onKeyUp={validateConfirmPassword}
                  valid={confirmPassword.valid}
                  invalid={confirmPassword.invalid}
                />
                <div className="d-flex justify-content-beteween mb-1">
                  <Link to="/" className="d-flex justify-content-end w-100 ">
                    <Button
                      color="link"
                      style={{ color: red[400], boxShadow: "none" }}
                      className="d-flex justify-content-end w-100 p-2"
                    >
                      Sign in
                    </Button>
                  </Link>
                </div>
                <Button
                  onClick={onSubmit}
                  disabled={
                    !name.valid ||
                    !rg.valid ||
                    !email.valid ||
                    !phone.valid ||
                    !password.valid ||
                    !confirmPassword.valid
                  }
                  color="danger"
                  block
                >
                  Sign up
                </Button>
              </FormGroup>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default connect(
  ({ userStore }) => ({
    loadingList: userStore.loadingList[POST_USER],
    user: userStore.user,
    error: userStore.error,
  }),
  {
    postUserAction: postUser,
  }
)(React.memo(RegisterUser));
