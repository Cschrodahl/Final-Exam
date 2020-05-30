import React, { useContext } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const { logout } = useContext(AuthContext);
  const history = useHistory();

  function doLogout() {
    logout();
    history.push("/");
  }

  return (
    <>
      <NavLink to="/admin" className="topMenu__settingbutton">
        Control panel
      </NavLink>
      <button className="topMenu__settingbutton" onClick={doLogout}>
        Log out
      </button>
    </>
  );
}

export default Login;
