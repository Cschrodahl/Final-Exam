import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers, PATCH } from "../../constant/api";
import DeleteHotel from "./DeleteHotel";

function EditHotel({ id }) {
  const defaultState = {
    name: "",
    email: "",
  };

  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [hotel, setHotel] = useState(defaultState);

  const options = { headers };
  const fetchUrl = BASE_URL + "establishments/" + id;

  useEffect(() => {
    fetch(fetchUrl, options)
      .then((response) => response.json())
      .then((json) => setHotel(json))
      .catch((error) => console.log(error));
  }, [fetchUrl, options]);

  async function onSubmit(data) {
    const updateOptions = {
      headers,
      method: PATCH,
      body: JSON.stringify(data),
    };
    await fetch(fetchUrl, updateOptions);
    history.go();
  }

  return (
    <>
      <form className="adminForms" onSubmit={handleSubmit(onSubmit)}>
        <h3>Edit Hotel</h3>
        <div className="adminForms__col2">
          <label className="adminForms__label">Name</label>
          <input
            className="adminForms__input"
            name="name"
            defaultValue={hotel.name}
            placeholder="Enter a name for the hotel"
            ref={register}
          />
        </div>
        <div className="adminForms__col2">
          <label className="adminForms__label">Email</label>
          <input
            className="adminForms__input"
            name="email"
            defaultValue={hotel.email}
            placeholder="Enter an email address"
            ref={register}
          />
        </div>
        <div className="adminForms__col1">
          <div className="adminForms__col2">
            <label className="adminForms__label">Price</label>
            <input
              className="adminForms__input"
              name="price"
              defaultValue={hotel.price}
              type="number"
              placeholder="Enter the price"
              ref={register}
            />
          </div>
          <div className="adminForms__col2">
            <label className="adminForms__label">Max guests</label>
            <input
              className="adminForms__input"
              name="maxGuests"
              type="number"
              defaultValue={hotel.maxGuests}
              placeholder="Enter the price"
              ref={register}
            />
          </div>
        </div>
        <div className="adminForms__col1">
          <div className="adminForms__col2">
            <label className="adminForms__label">Google coordinate</label>
            <input
              className="adminForms__input"
              name="lat"
              type="number"
              defaultValue={hotel.lat}
              placeholder="Enter latitude"
              ref={register}
            />
          </div>
          <div className="adminForms__col2">
            <input
              className="adminForms__input"
              name="lng"
              defaultValue={hotel.lng}
              type="number"
              placeholder="Enter longditude"
              ref={register}
            />
          </div>
        </div>
        <div className="adminForms__col1">
          <label className="adminForms__label">Image url</label>
          <input
            className="adminForms__input"
            name="image"
            defaultValue={hotel.image}
            type="text"
            placeholder="Enter Image url"
            ref={register}
          />
        </div>
        <div className="adminForms__col1">
          <label className="adminForms__label">Self-catering</label>
          <label className="adminForms__label--radio">True:</label>
          <input
            className="adminForms__input--radio"
            name="selfCatering"
            defaultChecked={hotel.selfCatering ? true : false}
            type="radio"
            ref={register}
          />

          <label className="adminForms__label--radio">False:</label>
          <input
            className="adminForms__input--radio"
            name="selfCatering"
            type="radio"
            defaultChecked={!hotel.selfCatering ? true : false}
            ref={register}
          />
        </div>
        <label className="adminForms__label">Descritpion</label>
        <textarea
          className="adminForms__textarea"
          name="description"
          placeholder="Enter description"
          ref={register}
        />

        <button className="adminForms__button" type="submit">
          Submit
        </button>
      </form>
      <DeleteHotel id={id} />
    </>
  );
}

export default EditHotel;
