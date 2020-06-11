import React, { useContext } from "react";
import Register from "../../auth/Register";
import Login from "../../auth/Login";
import { AuthContext } from "../../../context/AuthContext";
import Logout from "../../auth/Logout";
function LoginWindow({ refs }) {
  const { registeredUser, user } = useContext(AuthContext);

  return (
    <div ref={refs} className={`topMenu__window`}>
      <span
        className="topMenu__closeWindow"
        onClick={() => {
          refs.current.className = "topMenu__window";
        }}
      >
        x
      </span>
      {user ? (
        <>
          <h3 className="topMenu__userStatus">Admin</h3>
          <Logout />
        </>
      ) : registeredUser ? (
        <>
          <h3 className="topMenu__userStatus">Login</h3>
          <Login />
        </>
      ) : (
        <>
          <h3 className="topMenu__userStatus">Register</h3>
          <Register />
        </>
      )}
    </div>
  );
}
export default LoginWindow;
