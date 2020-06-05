import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../../constant/api";

export default function ViewMessage({ id }) {
  const defaultState = {
    name: "",
    email: "",
  };
  const [Message, setMessage] = useState(defaultState);

  const options = { headers };
  const fetchUrl = BASE_URL + "contacts/" + id;

  useEffect(() => {
    fetch(fetchUrl, options)
      .then((response) => response.json())
      .then((json) => setMessage(json))
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { name, message, createdAt } = Message;
  return (
    <div>
      <h4>{name}</h4>
      <p>{createdAt}</p>
      <p>{message}</p>
    </div>
  );
}
