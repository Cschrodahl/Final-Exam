import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { BASE_URL, headers, DELETE } from "../../constant/api";
import { StateHandler } from "../../context/StateHandler";
import "react-confirm-alert/src/react-confirm-alert.css";

function DeleteHotel(props) {
  const history = useHistory();
  const { closeModal } = useContext(StateHandler);

  function checkDelete() {
    confirmAlert({
      title: "Confirm deletion",
      buttons: [
        {
          label: "yes",
          onClick: () => {
            deleteHotel();
            closeModal();
          },
        },
        {
          label: "no",
        },
      ],
    });
  }

  async function deleteHotel() {
    const url = BASE_URL + "establishments/" + props.id;
    const options = { headers, method: DELETE };
    await fetch(url, options);
    history.go();
  }

  return (
    <button variant="danger" onClick={checkDelete}>
      Delete
    </button>
  );
}

export default DeleteHotel;
