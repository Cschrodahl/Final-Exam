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
    console.log("data", data);

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Edit Hotel</h1>

        <label>Name</label>
        <input
          name="name"
          defaultValue={hotel.name}
          placeholder="Enter a name for the hotel"
          ref={register}
        />

        <label>Email</label>
        <input
          name="email"
          defaultValue={hotel.email}
          placeholder="Enter an email address"
          ref={register}
        />

        <button type="submit">Update</button>
      </form>
      <DeleteHotel id={id} />
    </>
  );
}
//<DeleteHotel id={id} />
export default EditHotel;
