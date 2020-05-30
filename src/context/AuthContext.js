import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const existingUser = localStorage.getItem("user") || null;
  const userRegistered = localStorage.getItem("registered") || null;

  const [user, setUser] = useState(existingUser);
  const [registeredUser, setRegister] = useState(userRegistered);

  function registerUser(username, password) {
    localStorage.setItem(
      "registered",
      JSON.stringify({ username: username, password: password })
    );

    setRegister([username, password]);
  }
  function userLogin(username) {
    localStorage.setItem("user", JSON.stringify(username));
    setUser(username);
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return (
    <AuthContext.Provider
      value={{ user, userLogin, registeredUser, registerUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
