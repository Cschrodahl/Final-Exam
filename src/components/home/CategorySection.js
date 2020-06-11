import React from "react";
import { NavLink } from "react-router-dom";
function CategorySection() {
  return (
    <section className="categorySection">
      <NavLink to={`/booking#Hotel`} className="categorySection__buttons">
        Hotell
      </NavLink>
      <NavLink to={`/booking#B&B`} className="categorySection__buttons">
        {"B&B"}
      </NavLink>
      <NavLink
        to={`/booking#Guest houses`}
        className="categorySection__buttons"
      >
        Guesthouse
      </NavLink>
    </section>
  );
}
export default CategorySection;
