import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
export default function EnquiryForm({
  API_url,
  API_headers,
  EstablishmentName,
}) {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  async function onSubmit(data) {
    const url = API_url + "enquiries";
    console.log(data);
    const options = {
      API_headers,
      method: "POST",
      body: JSON.stringify(data),
    };

    await fetch(url, options);

    history.go();
  }
  return (
    <form className="bookingForm" onSubmit={handleSubmit(onSubmit)}>
      <h3>Booking</h3>
      <label className="bookingForm__label">Establishment: </label>
      <input
        className="bookingForm__input"
        name="establishment"
        defaultValue={EstablishmentName}
        ref={register}
      />
      <label className="bookingForm__label">Full name: </label>
      <input
        className="bookingForm__input"
        name="clientName"
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
            name="checkin"
            type="date"
            ref={register}
          />
        </div>
        <div className="col2">
          <label className="bookingForm__label">Check-out</label>
          <input
            className="bookingForm__input--date"
            name="checkout"
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
