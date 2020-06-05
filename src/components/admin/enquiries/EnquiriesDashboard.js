import React from "react";
import EnquiriesList from "./EnquiriesList";
import DashboardList from "../DashboardList";
import DashBoardHeader from "../DashboardHeader";
export default function EnquiriesDashboard() {
  return (
    <>
      <DashBoardHeader headerText="Enquiries" />
      <DashboardList listName={<EnquiriesList />} />
    </>
  );
}
