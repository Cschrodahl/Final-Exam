import React from "react";
import { NavLink } from "react-router-dom";
export default function FooterNav({ destinationName = [] }) {
  return (
    <nav>
      {destinationName.map((pageName, index) => {
        const { page, link } = pageName;
        return (
          <NavLink key={index} className="footerContent__link" to={link} exact>
            {page}
          </NavLink>
        );
      })}
    </nav>
  );
}
