import { Menu } from "antd/lib";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  EditFilled,
  DeleteFilled,
} from "@ant-design/icons";
import Sider from "antd/lib/layout/Sider";

export default function Sidebar({ collapsed }) {
  return (
    <Sider collapsed={collapsed}>
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          marginTop: 50,
        }}
      ></div>
      <div className="demo-logo-vertical" />x
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<VideoCameraOutlined />}>
          <Link to="/">dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/domain">domain</Link>
        </Menu.Item>
        {/* <Menu.Item key="3" icon={<EditFilled />}>
          <Link to="/edit">Edit</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<DeleteFilled />}>
          <Link to="/delete">Delete</Link>
        </Menu.Item> */}
        <Menu.Item key="5" icon={<DeleteFilled />}>
          <Link to="/group">group</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
