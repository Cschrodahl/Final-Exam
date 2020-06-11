import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../../constant/api";
import Pagination from "../../pagination/Pagination";
export default function EnquiriesList() {
  const url = BASE_URL + "enquiries/";
  const options = { headers };
  const [enquiries, setEnquiries] = useState([]);
  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        setEnquiries(json);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [enquiriesPerPage] = useState(6);

  const indexOfLastItem = currentPage * enquiriesPerPage;
  const indexOfFirstItem = indexOfLastItem - enquiriesPerPage;
  const currentItems = enquiries.slice(indexOfFirstItem, indexOfLastItem);
  const goToPage = (page) => setCurrentPage(page);
  const numberOfEnquiries = enquiries.length;
  return (
    <>
      <table className="dashboardList">
        <thead className="dashboardList__head">
          <tr>
            <th>Title</th>
            <th>Name</th>
            <th>Email</th>
            <th>Check in</th>
            <th>Check out</th>
          </tr>
        </thead>
        <tbody className="dashboardList__body">
          {enquiries
            ? currentItems.map((enquiries) => {
                const {
                  establishmentId,
                  name,
                  email,
                  checkIn,
                  checkOut,
                } = enquiries;

                return (
                  <tr key={enquiries.id}>
                    <td>
                      <button className="dashboardList__editBtn">
                        {establishmentId}
                      </button>
                    </td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{checkIn.split("T")[0]}</td>
                    <td>{checkOut.split("T")[0]}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
      <Pagination
        itemsPerPage={enquiriesPerPage}
        total={numberOfEnquiries}
        goToPage={goToPage}
        nextBtn={
          indexOfLastItem <= numberOfEnquiries ? currentPage + 1 : currentPage
        }
        prevBtn={currentPage !== 1 ? currentPage - 1 : currentPage}
      />
    </>
  );
}
