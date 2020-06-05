import React from "react";
import DashboardList from "./DashboardList";
import Hotels from "./Hotels";
import DashBoardHeader from "./DashboardHeader";
function Dashboard() {
  return (
    <div>
      <DashBoardHeader headerText="Establishment list" />
      <DashboardList listName={<Hotels />} />
    </div>
  );
}

export default Dashboard;
