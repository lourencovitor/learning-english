/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
import React from "react";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import { Col, Row } from "reactstrap";
import SideBar from "../../components/SideBar";
import { ACTIVITY } from "../../constants/constants";
import Card from "../../components/Card";
import "./styles.css";

const Activity = () => {
  return (
    <>
      <div className="d-flex">
        <div style={{ height: "100vh" }}>
          <SideBar />
        </div>
        <div className="p-4 w-100">
          <h1 className="text-center learningEnglish">
            Activity <SportsEsportsIcon style={{ fontSize: 50 }} />
          </h1>
          <Row className="mt-5">
            {ACTIVITY.map((game) => (
              <Col xs={4} key={game._id}>
                <Card title={game.title} img={game.img} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Activity;
