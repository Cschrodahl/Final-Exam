import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../../constant/api";
import OpenModal from "../../modal/OpenModal";
import ViewMessage from "./ViewMessage";
export default function ContactMessages() {
  const url = BASE_URL + "contacts/";
  const options = { headers };
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        setContacts(json);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <table className="dashboardList">
        <thead className="dashboardList__head">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody className="dashboardList__body">
          {contacts
            ? contacts.map((contact) => {
                return (
                  <tr key={contact.id}>
                    <td>
                      <OpenModal
                        className="dashboardList__editBtn"
                        buttonText={contact.name}
                        modalContent={<ViewMessage id={contact.id} />}
                      />
                    </td>
                    <td>{contact.email}</td>
                    <td>{contact.message}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </>
  );
}
