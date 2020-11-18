/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { Card, CardImg, Col, Row } from "reactstrap";
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
              <Card className="cardDash">
                <h3 className="my-2">Education</h3>
                <CardImg
                  top
                  width="100%"
                  className="p-2"
                  src="https://conteudo.imguol.com.br/c/noticias/d3/2020/05/24/24052020---capa-do-the-new-york-times-traz-nomes-de-vitimas-da-covid-19-1590331527409_v2_615x300.jpg"
                  alt="Education"
                />
                <a
                  className="text-center p-3"
                  href="https://www.nytimes.com/section/education"
                  target="_blank"
                >
                  Education
                </a>
              </Card>
            </Col>
            <Col>
              <Card className="cardDash">
                <h3 className="my-2">Politics</h3>
                <CardImg
                  top
                  width="100%"
                  className="p-2"
                  src="https://conteudo.imguol.com.br/c/noticias/d3/2020/05/24/24052020---capa-do-the-new-york-times-traz-nomes-de-vitimas-da-covid-19-1590331527409_v2_615x300.jpg"
                  alt="Politics"
                />
                <a
                  className="text-center p-3"
                  href="https://www.nytimes.com/section/politics"
                  target="_blank"
                >
                  Politics
                </a>
              </Card>
            </Col>
            <Col>
              <Card className="cardDash">
                <h3 className="my-2">Technology</h3>
                <CardImg
                  top
                  width="100%"
                  className="p-2"
                  src="https://conteudo.imguol.com.br/c/noticias/d3/2020/05/24/24052020---capa-do-the-new-york-times-traz-nomes-de-vitimas-da-covid-19-1590331527409_v2_615x300.jpg"
                  alt="Technology"
                />
                <a
                  className="text-center p-3"
                  href="https://www.nytimes.com/section/technology"
                  target="_blank"
                >
                  Technology
                </a>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
