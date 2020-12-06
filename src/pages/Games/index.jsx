/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import { Col, Row } from "reactstrap";
import { connect } from "react-redux";
import Card from "../../components/Card";
import SideBar from "../../components/SideBar";
import { GET_GAMES } from "../../redux/actions";
import { getGames } from "../../redux/game/actions";
import "./styles.css";
import Loading from "../../components/Loading";

const Games = ({ games, getGamesAction, loadingList }) => {
  useEffect(() => {
    getGamesAction();
  }, [getGamesAction]);
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
          {loadingList ? (
            <div
              className="d-flex justify-content-center"
              style={{ marginTop: "25%" }}
            >
              <Loading type="spinningBubbles" color="#ffff" />
            </div>
          ) : (
            <Row className="mt-5">
              {games.map((game) => (
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
  ({ gameStore }) => ({
    loadingList: gameStore.loadingList[GET_GAMES],
    games: gameStore.games,
  }),
  {
    getGamesAction: getGames,
  }
)(React.memo(Games));
