import React from "react";

export default function DashboardHeader({ headerText }) {
  return (
    <section className="adminHeader">
      <h2 className="adminHeader__header">{headerText}</h2>
    </section>
  );
}
