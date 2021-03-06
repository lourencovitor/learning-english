/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { Col, Row } from "reactstrap";
import { connect } from "react-redux";
import Card from "../../components/Card";
import SideBar from "../../components/SideBar";
import "./styles.css";
import { GET_DASH } from "../../redux/actions";
import { getDash } from "../../redux/dashboard/actions";
import Loading from "../../components/Loading";

const DashBoard = ({ getDashAction, news, loadingList }) => {
  useEffect(() => {
    getDashAction();
  }, [getDashAction]);
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
          {loadingList ? (
            <div
              className="d-flex justify-content-center"
              style={{ marginTop: "25%" }}
            >
              <Loading type="spinningBubbles" color="#ffff" />
            </div>
          ) : (
            <Row className="mt-5">
              {news &&
                news.map((card) => (
                  <Col xs={4} key={card._id}>
                    <Card title={card.title} img={card.img} url={card.url} />
                  </Col>
                ))}
            </Row>
          )}
        </div>
      </div>
    </>
  );
};

export default connect(
  ({ dashStore }) => ({
    loadingList: dashStore.loadingList[GET_DASH],
    news: dashStore.news,
  }),
  {
    getDashAction: getDash,
  }
)(React.memo(DashBoard));
