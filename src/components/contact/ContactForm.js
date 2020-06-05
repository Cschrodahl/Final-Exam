import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { BASE_URL, headers } from "../../constant/api";
import * as yup from "yup";
import FormError from "./FormError";
import FormSubmitted from "./FormSubmitted";
import ContactInformation from "./ContactInformation";
const schema = yup.object().shape({
  name: yup.string().required("First name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must contain atleast 10 letters"),
});

function ContactForm() {
  const history = useHistory();
  const [validated, setValidated] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  async function onSubmit(data) {
    const url = BASE_URL + "contacts/";
    const options = { headers, method: "POST", body: JSON.stringify(data) };
    setValidated(true);
    setTimeout(() => setValidated(false), 3000);
    await fetch(url, options);
    history.go();
  }

  return (
    <>
      <FormSubmitted displayMessage={validated} />
      <form onSubmit={handleSubmit(onSubmit)} className="contactForm">
        <div className="row row__direction--reverse">
          <div className="col3 col3__md col3__specifiedOrder">
            <label className="contactForm__label">Full Name</label>
            <input
              className="contactForm__input"
              name="name"
              placeholder="Enter your full name"
              ref={register}
            />
            {errors.firstName && (
              <FormError>{errors.firstName.message}</FormError>
            )}

            <label className="contactForm__label">Email</label>
            <input
              className="contactForm__input"
              name="email"
              placeholder="Enter your email"
              ref={register}
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}
            <label className="contactForm__label">Subject</label>
            <select
              className="contactForm__input"
              name="subject"
              placeholder="Select a subject"
            >
              <option>Support</option>
              <option>Booking</option>
              <option>Other</option>
            </select>
          </div>
          <ContactInformation />

          <div className="col3 col3__lg col3__specifiedOrder">
            <label className="contactForm__label">Message</label>
            <textarea
              className="contactForm__textarea"
              type="message"
              name="message"
              placeholder="Write a message"
              ref={register}
            />
            {errors.message && <FormError>{errors.message.message}</FormError>}

            <button className="contactForm__btn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
