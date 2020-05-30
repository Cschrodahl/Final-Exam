import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers } from "../../constant/api";

function AddHotel() {
  const { register, handleSubmit } = useForm();

  const history = useHistory();

  async function onSubmit(data) {
    console.log("data", data);

    const url = BASE_URL + "establishments";

    const options = { headers, method: "POST", body: JSON.stringify(data) };

    await fetch(url, options);

    history.go();
  }

  return (
    <form className="hotelForm" onSubmit={handleSubmit(onSubmit)}>
      <h3>Add Hotel</h3>

      <label className="hotelForm__label">
        Name
        <input
          className="hotelForm__input"
          name="name"
          placeholder="Enter a name for the hotel"
          ref={register}
        />
      </label>
      <label className="hotelForm__label">
        Email
        <input
          className="hotelForm__input"
          name="email"
          placeholder="Enter an email address"
          ref={register}
        />
      </label>

      <label className="hotelForm__label">Price</label>
      <input
        className="hotelForm__input"
        name="price"
        type="number"
        placeholder="Enter the price"
        ref={register}
      />
      <label className="hotelForm__label">
        Google coordinate
        <input
          className="hotelForm__input"
          name="lat"
          type="number"
          placeholder="Enter latitude"
          ref={register}
        />
        <input
          className="hotelForm__input"
          name="lng"
          type="number"
          placeholder="Enter longditude"
          ref={register}
        />
      </label>
      <label className="hotelForm__label">Max guests</label>
      <input
        className="hotelForm__input"
        name="maxGuests"
        type="number"
        placeholder="Enter the price"
        ref={register}
      />
      <label className="hotelForm__label">Image url</label>
      <input
        className="hotelForm__input"
        name="image"
        type="text"
        placeholder="Enter Image url"
        ref={register}
      />
      <label className="hotelForm__label">Descritpion</label>
      <textarea
        className="hotelForm__textarea"
        name="description"
        placeholder="Enter description"
        ref={register}
      />

      <button className="hotelForm__btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default AddHotel;
