import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required()
    .min(4, "Age must be greater than 10")
    .max(18, "Age must be less than 10"),
});
function LoginForm() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });
  function onSubmit(data) {
    console.log("data", data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h3>Login</h3>
        <label className="form__label">Email</label>
        <input
          className="form__input"
          name="email"
          placeholder="Enter your email"
          ref={register}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label className="form__label">Password</label>
        <input
          className="form__input"
          type="password"
          name="password"
          placeholder="Enter your password"
          ref={register}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button className="form__submit" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
export default LoginForm;
