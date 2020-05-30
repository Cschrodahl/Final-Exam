import React from "react";
import Banner from "../banner/Banner";
import DashboardList from "./DashboardList";
function Dashboard() {
  return (
    <div>
      <Banner backgroundImageSize="introBannersubSites" />
      <DashboardList />
    </div>
  );
}

export default Dashboard;
