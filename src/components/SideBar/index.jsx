import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const SideBar = () => {
  return (
    <ProSidebar>
      <Menu iconShape="square" className="py-3">
        <MenuItem>Dashboard</MenuItem>
        <SubMenu title="Games">
          <MenuItem>game 1</MenuItem>
          <MenuItem>game 2</MenuItem>
        </SubMenu>
        <SubMenu title="Activities">
          <MenuItem>Activity 1</MenuItem>
          <MenuItem>Activity 2</MenuItem>
        </SubMenu>
        <SubMenu title="English training">
          <MenuItem>training 1</MenuItem>
          <MenuItem>training 2</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default SideBar;
