import React, { useState, useRef, useContext, useEffect } from "react";
import LoginWindow from "./LoginWindow";
import { AuthContext } from "../../../context/AuthContext";
function LoginModal() {
  const { user } = useContext(AuthContext);
  const [toggleWindow, setToggleWindow] = useState(true);
  const closeWhenClickOutside = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        closeWhenClickOutside.current &&
        !closeWhenClickOutside.current.contains(event.target)
      ) {
        setToggleWindow(true);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeWhenClickOutside]);
  return (
    <>
      <button
        className="topMenu__loginBtn"
        onClick={() => setToggleWindow(false)}
      >
        {user ? "Settings" : "Login"}
      </button>
      {!toggleWindow ? <LoginWindow refs={closeWhenClickOutside} /> : null}
    </>
  );
}
/**const modalwindow = useRef(null);
  let activeClass = "topMenu__window";

  const toggleLoginWindow = (e) => {
    if (activeClass !== "topMenu__window--Active") {
      activeClass = "topMenu__window--Active";
    } else {
      activeClass = "topMenu__window";
    }
    modalwindow.current.className = activeClass;
  }; */
export default LoginModal;
