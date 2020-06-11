import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
function DashboardList({ listName }) {
  let showMenu = "";
  const adminNavRef = useRef(null);
  const toggleAdminNav = (e) => {
    if (showMenu !== "Active") {
      showMenu = "Active";
    } else {
      showMenu = "";
    }
    adminNavRef.current.id = showMenu;
  };

  return (
    <>
      <img
        className="adminNavigation__toggle"
        alt="admin Logo"
        src={require("../../images/Icons/HouseMenu-01.png")}
        onClick={() => {
          toggleAdminNav();
        }}
      />

      <section className="container row">
        <aside className="col1 adminNavigation" ref={adminNavRef}>
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
