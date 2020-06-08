import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../../constant/api";
import OpenModal from "../../modal/OpenModal";
import ViewMessage from "./ViewMessage";
import Pagination from "../../pagination/Pagination";
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

  const [currentPage, setCurrentPage] = useState(1);
  const [contactPerPage] = useState(6);

  const indexOfLastItem = currentPage * contactPerPage;
  const indexOfFirstItem = indexOfLastItem - contactPerPage;
  const currentItems = contacts.slice(indexOfFirstItem, indexOfLastItem);
  const goToPage = (page) => setCurrentPage(page);
  const numberOfContacts = contacts.length;
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
            ? currentItems.map((contact) => {
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
      <Pagination
        itemsPerPage={contactPerPage}
        total={numberOfContacts}
        goToPage={goToPage}
        nextBtn={
          indexOfLastItem <= numberOfContacts ? currentPage + 1 : currentPage
        }
        prevBtn={currentPage !== 1 ? currentPage - 1 : currentPage}
      />
    </>
  );
}
