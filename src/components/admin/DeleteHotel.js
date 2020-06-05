import React from "react";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { BASE_URL, headers, DELETE } from "../../constant/api";
import "react-confirm-alert/src/react-confirm-alert.css";

function DeleteHotel(props) {
  const history = useHistory();

  function checkDelete() {
    confirmAlert({
      title: "Confirm deletion",
      buttons: [
        {
          label: "yes",
          onClick: () => {
            deleteHotel();
            history.go();
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
    <button
      className="adminForms__delete"
      variant="danger"
      onClick={checkDelete}
    >
      Delete
    </button>
  );
}

export default DeleteHotel;
