import React from "react";
import { NavLink } from "react-router-dom";
function EstablishmentItem({
  title,
  price,
  image,
  maxGuests,
  link,
  category,
  desctiption,
}) {
  return (
    <NavLink to={`/booking/${link}`} className=" bookingList__col">
      <img alt={desctiption} src={image} />
      <h4>{title}</h4>
      <p>Max number of people {maxGuests}</p>
      <p>Price per night {price}$</p>
      <p className="bookingList__span">{category}</p>
    </NavLink>
  );
}

export default EstablishmentItem;
