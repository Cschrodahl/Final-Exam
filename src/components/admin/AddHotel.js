import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers } from "../../constant/api";

function AddHotel() {
  const { register, handleSubmit, control } = useForm();

  const history = useHistory();

  async function onSubmit(data) {
    const url = BASE_URL + "establishments";

    const options = {
      headers,
      method: "POST",
      body: JSON.stringify(data),
    };

    await fetch(url, options);

    history.go();
  }
  const selfCateringOptions = [
    { value: true, label: "True" },
    { value: false, label: "False" },
  ];
  return (
    <form className="adminForms" onSubmit={handleSubmit(onSubmit)}>
      <h3>Add Hotel</h3>
      <div className="adminForms__col2">
        <label className="adminForms__label">Name</label>
        <input
          className="adminForms__input"
          name="name"
          placeholder="Enter a name for the hotel"
          ref={register}
        />
      </div>
      <div className="adminForms__col2">
        <label className="adminForms__label">Email</label>
        <input
          className="adminForms__input"
          name="email"
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
            placeholder="Enter the price"
            ref={register}
          />
        </div>
      </div>
      <div className="adminForms__col1">
        <div className="adminForms__col2">
          <label className="adminForms__label">Google coordinate</label>
          <input
            step="any"
            className="adminForms__input"
            name="lat"
            type="number"
            placeholder="Enter latitude"
            ref={register}
          />
        </div>
        <div className="adminForms__col2">
          <input
            step="any"
            className="adminForms__input"
            name="lng"
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
          type="text"
          placeholder="Enter Image url"
          ref={register}
        />
      </div>
      <div className="adminForms__col1">
        <label className="adminForms__label">Category</label>
        <select className="adminForms__input" name="category" ref={register}>
          <option>Select</option>
          <option>Hotel</option>
          <option>Guest houses</option>
          <option>{`B&B`}</option>
        </select>
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
          checked={false}
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
  );
}
/**<div className="adminForms__col1">
        <label className="adminForms__label">Category</label>
        <input
          className="adminForms__input"
          name="category"
          type="text"
          placeholder="enter category"
          ref={register}
        />
      </div> 
      
      <div className="adminForms__col1">
        <label className="adminForms__label">Self-catering</label>
        <label className="adminForms__label--radio">True:</label>
        <input
          className="adminForms__input--radio"
          name="selfCatering"
          type="radio"
          ref={register}
        />

        <label className="adminForms__label--radio">False:</label>
        <input
          className="adminForms__input--radio"
          name="selfCatering"
          type="radio"
          ref={register}
          defaultChecked
        />
      </div>*/
export default AddHotel;
