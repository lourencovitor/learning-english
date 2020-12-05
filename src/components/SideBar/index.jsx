import React from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <ProSidebar>
      <Menu iconShape="square" className="py-3">
        <MenuItem>
          Dashboard{" "}
          <DashboardIcon style={{ fontSize: 15, marginLeft: "10px" }} />
        </MenuItem>
        <Link to="/game">
          <MenuItem>
            Game{" "}
            <SportsEsportsIcon style={{ fontSize: 15, marginLeft: "10px" }} />
          </MenuItem>
        </Link>
        <MenuItem>
          Activity <ListAltIcon style={{ fontSize: 15, marginLeft: "10px" }} />
        </MenuItem>
        <MenuItem>
          English training{" "}
          <RecordVoiceOverIcon style={{ fontSize: 15, marginLeft: "10px" }} />
        </MenuItem>
        <MenuItem style={{ marginTop: "5vh" }}>
          Logout <ExitToAppIcon style={{ fontSize: 15, marginLeft: "10px" }} />{" "}
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default SideBar;
