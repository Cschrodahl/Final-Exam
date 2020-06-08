import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers } from "../../../constant/api";
export default function EnquiryForm({ EstablishmentName }) {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  async function onSubmit(data) {
    const enquiryUrl = BASE_URL + "enquiries";

    console.log(data);
    const enquiryOptions = {
      headers,
      method: "POST",
      body: JSON.stringify(data),
    };

    await fetch(enquiryUrl, enquiryOptions);

    history.go();
  }
  return (
    <form className="bookingForm" onSubmit={handleSubmit(onSubmit)}>
      <h3>Booking</h3>
      <label className="bookingForm__label">Establishment: </label>
      <input
        className="bookingForm__input"
        name="establishmentId"
        defaultValue={EstablishmentName}
        ref={register}
      />
      <label className="bookingForm__label">Full name: </label>
      <input
        className="bookingForm__input"
        name="name"
        placeholder="Enter your full name"
        ref={register}
      />
      <label className="bookingForm__label">Email</label>
      <input
        className="bookingForm__input"
        name="email"
        placeholder="Enter an email address"
        ref={register}
      />
      <div className="row row__direction--column">
        <div className="col2">
          <label className="bookingForm__label">Check-in</label>
          <input
            className="bookingForm__input--date"
            name="checkIn"
            type="date"
            ref={register}
          />
        </div>
        <div className="col2">
          <label className="bookingForm__label">Check-out</label>
          <input
            className="bookingForm__input--date"
            name="checkOut"
            type="date"
            ref={register}
          />
        </div>
      </div>
      <button className="bookingForm__button" type="submit">
        Submit
      </button>
    </form>
  );
}
