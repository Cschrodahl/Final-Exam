import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import * as yup from "yup";
import ErrorMessage from "../forms/ErrorMessage";

function Login() {
  const { userLogin } = useContext(AuthContext);
  const history = useHistory();
  const getUserLogin = JSON.parse(localStorage.getItem("registered"));
  const schema = yup.object().shape({
    name: yup
      .string()
      .test("user-match", "username incorrect", function (value) {
        return this.parent.username === getUserLogin.username;
      }),
    password: yup
      .string()
      .required()
      .test("password-match", "password incorrect", function (value) {
        return this.parent.password === getUserLogin.password;
      }),
  });
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });
  function onSubmit(data) {
    userLogin(data.username);
    history.push("/admin");
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label className="form__label">Name</label>
        <input
          className="form__input"
          name="username"
          type="text"
          placeholder="Enter your username"
          ref={register}
        />
        <label className="form__label">Password</label>
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
        <input
          className="form__input"
          name="password"
          type="password"
          placeholder="Enter your password"
          ref={register}
        />

        <button className="form__button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
