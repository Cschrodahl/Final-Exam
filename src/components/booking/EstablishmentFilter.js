import React from "react";
import { useForm } from "react-hook-form";
function EstablishmentFilter({ setFilterList }) {
  const { register, handleSubmit } = useForm();
  function onchangeFilter(data) {
    setFilterList(data);
  }

  return (
    <form
      onChange={handleSubmit(onchangeFilter)}
      className="filterEstablishments row"
    >
      <label className="filterEstablishments__label col3">
        Category:
        <select
          ref={register}
          name="category"
          className="filterEstablishments__dropdown"
        >
          <option>Show all</option>
          <option>Hotel</option>
          <option>Guest houses</option>
          <option>{"B&B"}</option>
        </select>
      </label>
      <label className="filterEstablishments__label col3">
        Price:
        <input
          ref={register}
          className="filterEstablishments__input"
          type="number"
          name="price"
          placeholder="From"
        />
      </label>
      <label className="filterEstablishments__label col3">
        Guests:
        <input
          ref={register}
          className="filterEstablishments__input"
          type="number"
          name="maxGuests"
          placeholder="Any"
        />
      </label>
    </form>
  );
}

export default EstablishmentFilter;
