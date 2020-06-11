import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers, PATCH } from "../../constant/api";
import DeleteHotel from "./DeleteHotel";

function EditHotel({ id }) {
  const defaultState = {
    name: "",
    email: "",
  };

  const history = useHistory();
  const { register, handleSubmit, control } = useForm();
  const [hotel, setHotel] = useState(defaultState);

  const options = { headers };
  const fetchUrl = BASE_URL + "establishments/" + id;

  useEffect(() => {
    fetch(fetchUrl, options)
      .then((response) => response.json())
      .then((json) => setHotel(json))
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSubmit(data) {
    const updateOptions = {
      headers,
      method: PATCH,
      body: JSON.stringify(data),
    };
    await fetch(fetchUrl, updateOptions);
    history.go();
  }
  const selfCateringOptions = [
    { value: true, label: "True" },
    { value: false, label: "False" },
  ];

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
              step="any"
              name="lat"
              type="number"
              defaultValue={hotel.lat}
              placeholder="Enter latitude"
              ref={register}
            />
          </div>
          <div className="adminForms__col2">
            <input
              step="any"
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
          <label className="adminForms__label">Category</label>
          <select
            className="adminForms__input"
            name="category"
            value={hotel.category}
            ref={register}
          >
            <option>Select</option>
            <option>Hotel</option>
            <option>Guest houses</option>
            <option>{`B&B`}</option>
          </select>
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
          <Controller
            as={<input type="checkbox" options={selfCateringOptions} />}
            control={control}
            rules={{ required: false }}
            onChange={([selected]) => {
              if (!selected.target.checked)
                return (selected.target.checked = false);
              else return (selected.target.checked = true);
            }}
            name="selfCatering"
            checked={hotel.selfCatering === true}
          />
        </div>
        <label className="adminForms__label">Descritpion</label>
        <textarea
          className="adminForms__textarea"
          name="description"
          defaultValue={hotel.description}
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
/**<label className="adminForms__label--radio">True:</label>
          <input
            className="adminForms__input--radio"
            name="selfCatering"
            checked={hotel.selfCatering === true}
            onChange={([{ checked }]) => ({ checked })}
            value={true}
            type="radio"
            ref={register}
          />

          <label className="adminForms__label--radio">False:</label>
          <input
            className="adminForms__input--radio"
            name="selfCatering"
            type="radio"
            value={false}
            checked={hotel.selfCatering === false}
            onChange={([{ checked }]) => ({ checked })}
            ref={register}
          /> */
export default EditHotel;
