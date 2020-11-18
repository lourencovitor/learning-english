import React from "react";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { Card, Col, Row } from "reactstrap";
import SideBar from "../../components/SideBar";
import "./styles.css";

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
            <Col>
              <Card>
                <h3>Noticia 1</h3>
              </Card>
            </Col>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
