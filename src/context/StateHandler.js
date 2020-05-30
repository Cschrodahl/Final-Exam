import React, { createContext, useState } from "react";

const StateHandler = createContext();

const StateContext = ({ children }) => {
  const lmao = (el) => {
    return el || null;
  };
  const [stateValue, SetStateValue] = useState(lmao);

  function openModal(open) {
    SetStateValue(open);
  }
  function closeModal() {
    SetStateValue(null);
  }

  return (
    <StateHandler.Provider value={{ stateValue, openModal, closeModal }}>
      {children}
    </StateHandler.Provider>
  );
};

export { StateHandler, StateContext };
