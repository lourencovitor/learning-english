/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import { Col, Row } from "reactstrap";
import Card from "../../components/Card";
import SideBar from "../../components/SideBar";
import "./styles.css";
import { GAMES } from "../../constants/constants";

const DashBoard = () => {
  return (
    <>
      <div className="d-flex">
        <div style={{ height: "100vh" }}>
          <SideBar />
        </div>
        <div className="p-4 w-100">
          <h1 className="text-center learningEnglish">
            Game <SportsEsportsIcon style={{ fontSize: 50 }} />
          </h1>
          <Row className="mt-5">
            {GAMES.map((game) => (
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

export default DashBoard;
