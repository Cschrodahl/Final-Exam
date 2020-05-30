import React from "react";
import Hotels from "./Hotels";
import { NavLink } from "react-router-dom";
function DashboardList() {
  return (
    <section className="container row">
      <aside className="col1 adminNavigation">
        <NavLink to="/admin" className="adminNavigation__links">
          Establishments
        </NavLink>
        <NavLink to="/admin/enquiries" className="adminNavigation__links">
          Enqueries
        </NavLink>
        <NavLink to="/admin/contacts" className="adminNavigation__links">
          Contact
        </NavLink>
      </aside>
      <div className="col4">
        <Hotels />
      </div>
    </section>
  );
}

export default DashboardList;
