import React, { useState } from "react";
import { Layout } from "antd";
import { Button } from "antd/lib";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

export default function HeaderApp({ collapsed, setCollapsed }) {
  const { Header } = Layout;

  return (
    <Header
      style={{
        padding: 0,
        background: "dark",
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          color: "white",
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    </Header>
  );
}
