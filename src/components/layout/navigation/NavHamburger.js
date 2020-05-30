import React from "react";

function NavHamburger({ toggleNav }) {
  return (
    <div className="hamburgerNav" onClick={(e) => toggleNav(e)}>
      <span className="hamburgerNav__span"></span>
      <span className="hamburgerNav__span"></span>
      <span className="hamburgerNav__span"></span>
    </div>
  );
}
export default NavHamburger;
