/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
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
            Game <SportsEsportsIcon style={{ fontSize: 50 }} />
          </h1>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
