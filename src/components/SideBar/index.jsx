/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/auth/actions";

const SideBar = ({ logoutAction }) => {
  return (
    <ProSidebar>
      <Menu iconShape="square" className="py-3">
        <MenuItem icon={<DashboardIcon style={{ fontSize: 15 }} />}>
          Dashboard
          <Link to="/dash-board" />
        </MenuItem>
        <MenuItem icon={<SportsEsportsIcon style={{ fontSize: 15 }} />}>
          Game
          <Link to="/game" />
        </MenuItem>
        <MenuItem icon={<ListAltIcon style={{ fontSize: 15 }} />}>
          Activity
          <Link to="/activity" />
        </MenuItem>

        <MenuItem
          style={{ marginTop: "5vh" }}
          icon={<ExitToAppIcon style={{ fontSize: 15 }} />}
        >
          Logout
          <Link to="#" onClick={() => logoutAction()} />
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default connect(() => ({}), {
  logoutAction: logout,
})(React.memo(SideBar));
