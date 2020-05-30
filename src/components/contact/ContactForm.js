import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import FormError from "./FormError";
import FormSubmitted from "./FormSubmitted";
import ContactInformation from "./ContactInformation";
const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
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
  const [validated, setValidated] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  function onSubmit(data, event) {
    console.log("data", data);
    event.target.reset();

    setValidated(true);

    setTimeout(() => setValidated(false), 3000);
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
              name="fullName"
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
              ref={register}
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
