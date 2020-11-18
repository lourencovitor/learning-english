import React from "react";
import { Button, Card, Row } from "reactstrap";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./styles.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="main">
      <Row className="w-100 d-flex justify-content-center">
        <Card className="cardError" style={{ borderRadius: "20px" }}>
          <p className="notFound">Not found</p>
          <p className="number">404</p>
          <div className="d-flex justify-content-left w-100">
            <Link to="/">
              <Button
                color="danger"
                className="mt-5 mx-5 w-100"
                style={{ borderRadius: "20px" }}
              >
                <ArrowBackIcon style={{ fontSize: 20, color: "white" }} /> Go
                Back
              </Button>
            </Link>
          </div>
        </Card>
      </Row>
    </div>
  );
};

export default Error;
