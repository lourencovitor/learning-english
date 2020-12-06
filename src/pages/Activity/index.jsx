/* eslint-disable import/no-unresolved */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from "react";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import { Col, Row } from "reactstrap";
import { connect } from "react-redux";
import SideBar from "../../components/SideBar";
import Card from "../../components/Card";
import "./styles.css";
import { GET_ACTIVITY } from "../../redux/actions";
import { getActivity } from "../../redux/activity/actions";
import Loading from "../../components/Loading";

const Activity = ({ activies, loadingList, getActivityAction }) => {
  useEffect(() => {
    getActivityAction();
  }, [getActivityAction]);
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
          {loadingList ? (
            <div
              className="d-flex justify-content-center"
              style={{ marginTop: "25%" }}
            >
              <Loading type="spinningBubbles" color="#ffff" />
            </div>
          ) : (
            <Row className="mt-5">
              {activies.map((game) => (
                <Col xs={4} key={game._id}>
                  <Card title={game.title} img={game.img} />
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
  ({ activityStore }) => ({
    loadingList: activityStore.loadingList[GET_ACTIVITY],
    activies: activityStore.activies,
  }),
  {
    getActivityAction: getActivity,
  }
)(React.memo(Activity));
