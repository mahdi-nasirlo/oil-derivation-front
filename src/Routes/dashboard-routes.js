import { Routes, Route } from "react-router-dom";

import MessageEdit from "../pages/message-edit";
import MessageCreate from "../pages/message-create";
import MessageDelete from "../pages/message-delete";

import DashboardGrid from "../components/dashboard-grid";

import CreateGroup from "../pages/group/create-group";
import EditGroup from "../pages/group/edit-group";
import Group from "../pages/group/group";
import Domain from "../pages/domain/domain";
import CreateDomain from "../pages/domain/create-domain";
import EditTemplate from "../pages/template/edit-template";
import CreateTemplate from "../pages/template/create-template";

const routes = [
  // { headName: "home", path: "/", element: <Dashboard /> },
  { headName: "dashboard", path: "/", element: <DashboardGrid /> },
  { headName: "domain", path: "/domain", element: <Domain /> },
  { headName: "create", path: "/create", element: <CreateDomain /> },
  { headName: "edit", path: "/edit", element: <MessageEdit /> },
  { headName: "delete", path: "/delete", element: <MessageDelete /> },
  {
    headName: "edittemplate",
    path: "/edittemplate",
    element: <EditTemplate />,
  },
  {
    headName: "createtemplate",
    path: "/createtemplate",
    element: <CreateTemplate />,
  },
  {
    headName: "group",
    path: "/group",
    element: <Group />,
  },
  {
    headName: "creategroup",
    path: "/creategroup",
    element: <CreateGroup />,
  },
  {
    headName: "editgroup",
    path: "/editgroup",
    element: <EditGroup />,
  },
];

export const DashboardRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <>
          <Route element={route.element} path={route.path} />
        </>
      ))}
    </Routes>
  );
};
