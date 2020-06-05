import React from "react";
import ContactMessages from "./ContactMessages";
import DashboardList from "../DashboardList";
import DashBoardHeader from "../DashboardHeader";
export default function ContactsAdmin() {
  return (
    <>
      <DashBoardHeader headerText="Contact messages" />
      <DashboardList listName={<ContactMessages />} />
    </>
  );
}
