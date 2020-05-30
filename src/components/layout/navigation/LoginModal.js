import React, { useRef, useContext } from "react";
import LoginWindow from "./LoginWindow";
import { AuthContext } from "../../../context/AuthContext";
function LoginModal({ loginWindow }) {
  const { user } = useContext(AuthContext);
  const modalwindow = useRef(null);
  let activeClass = "topMenu__window";
  return (
    <>
      <button
        className="topMenu__loginBtn"
        onClick={(e) => {
          if (activeClass !== "topMenu__window--Active") {
            activeClass = "topMenu__window--Active";
          } else {
            activeClass = "topMenu__window";
          }
          modalwindow.current.className = activeClass;
        }}
      >
        {user ? "Settings" : "Login"}
      </button>
      <LoginWindow refs={modalwindow} />
    </>
  );
}
export default LoginModal;
