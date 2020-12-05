/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { Col, Row } from "reactstrap";
import Card from "../../components/Card";
import SideBar from "../../components/SideBar";
import "./styles.css";
import { DASH } from "../../constants/constants";

const DashBoard = () => {
  return (
    <>
      <div className="d-flex">
        <div style={{ height: "100vh" }}>
          <SideBar />
        </div>
        <div className="p-4 w-100">
          <h1 className="text-center learningEnglish">
            Learning English <MenuBookIcon style={{ fontSize: 50 }} />
          </h1>
          <Row className="mt-5">
            {DASH.map((card) => (
              <Col xs={4} key={card._id}>
                <Card title={card.title} img={card.img} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
