import React from "react";

function Modal({ modalContent, displayModal, modified }) {
  return (
    <div className={`modal${modified ? modified : ""}`}>
      <div className="container">
        <span
          onClick={() =>
            displayModal(() => {
              return null;
            })
          }
        >
          X
        </span>
        {modalContent}
      </div>
    </div>
  );
}

export default Modal;
