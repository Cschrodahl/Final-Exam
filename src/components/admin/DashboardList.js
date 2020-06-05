import React from "react";
import { NavLink } from "react-router-dom";
function DashboardList({ listName }) {
  return (
    <>
      <span
        className="adminNavigation__toggle"
        onClick={() => {
          let toggle = document.querySelector(".adminNavigation");
          toggle =
            toggle.style.display === "block"
              ? (toggle.style.display = "none")
              : (toggle.style.display = "block");
          return toggle;
        }}
      >
        Menu
      </span>
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
        <div className="col4">{listName}</div>
      </section>
    </>
  );
}

export default DashboardList;
