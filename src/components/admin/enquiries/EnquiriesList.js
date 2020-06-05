import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../../../constant/api";
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
  console.log(enquiries);
  return (
    <>
      <table className="dashboardList">
        <thead className="dashboardList__head">
          <tr>
            <th>Title</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody className="dashboardList__body">
          {enquiries
            ? enquiries.map((enquiries) => {
                return (
                  <tr key={enquiries.id}>
                    <td>
                      <button className="dashboardList__editBtn">
                        {enquiries.name}
                      </button>
                    </td>
                    <td>{enquiries.email}</td>
                    <td>{enquiries.message}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </>
  );
}
