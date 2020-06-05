import React, { useState } from "react";
import Modal from "./Modal";
export default function OpenModal({
  buttonText,
  modalContent,
  buttonClassName,
  modalModified,
}) {
  const [displayModal, setDisplayModal] = useState();
  const showModal = () => {
    setDisplayModal(() => {
      return (
        <Modal
          modified={modalModified}
          displayModal={setDisplayModal}
          modalContent={modalContent}
        />
      );
    });
  };

  return (
    <>
      <span className={buttonClassName} onClick={showModal}>
        {buttonText}
      </span>
      {displayModal}
    </>
  );
}
