import React, { useContext } from "react";
import { StateHandler } from "../../context/StateHandler";
function Modal({ modalType }) {
  const { closeModal } = useContext(StateHandler);
  return (
    <div className="modal">
      <div className="container">
        <span onClick={() => closeModal()}>X</span>
        {modalType}
      </div>
    </div>
  );
}

export default Modal;
