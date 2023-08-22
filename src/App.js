import "./App.css";
import { DashboardRoutes } from "./Routes/dashboard-routes";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <>
      <Dashboard>
        <DashboardRoutes />
      </Dashboard>
    </>
  );
}

export default App;
