import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Register() {
  const { register, handleSubmit } = useForm();
  const { registerUser, userLogin } = useContext(AuthContext);

  const history = useHistory();

  function onSubmit(data) {
    console.log("data", data);
    registerUser(data.username, data.password);
    userLogin(data.username);
    history.push("/admin");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label className="form__label">Name</label>
      <input
        className="form__input"
        name="username"
        placeholder="Enter your username"
        ref={register}
      />
      <label className="form__label">Password</label>
      <input
        className="form__input"
        name="password"
        placeholder="Enter your password"
        ref={register}
      />

      <button className="form__button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Register;
