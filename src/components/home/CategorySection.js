import React from "react";
import { NavLink } from "react-router-dom";
function CategorySection() {
  return (
    <section className="categorySection">
      <NavLink to="/booking" className="categorySection__buttons">
        Hotell
      </NavLink>
      <NavLink to="/booking" className="categorySection__buttons">
        BB
      </NavLink>
      <NavLink to="/booking" className="categorySection__buttons">
        Guesthouse
      </NavLink>
    </section>
  );
}
export default CategorySection;
