import { Layout, theme } from "antd";
import Sidebar from "./sidebar";
import HeaderApp from "./header-app";
import { useState } from "react";
// import DashboardGrid from "./dashboard-grid";

const { Content } = Layout;

const Dashboard = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
        backgroundColor: colorBgContainer,
      }}
    >
      <Sidebar collapsed={collapsed} setZahreMar={setCollapsed} />
      <Layout>
        <HeaderApp collapsed={collapsed} setCollapsed={setCollapsed} />

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: "9DB2BF",
          }}
        >
          <div>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
