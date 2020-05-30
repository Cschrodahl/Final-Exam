import React, { useState, useEffect, useContext } from "react";
import { BASE_URL, headers } from "../../constant/api";
import Pagination from "../pagination/Pagination";
import Modal from "../modal/Modal";
import EditHotel from "./EditHotel";
import { StateHandler } from "../../context/StateHandler";
import AddHotel from "./AddHotel";
function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [establishmentsPerPage] = useState(6);
  const { stateValue, openModal } = useContext(StateHandler);
  const url = BASE_URL + "establishments";

  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        setHotels(json);
      })
      .catch((error) => console.log(error));
  }, [url, options]);
  const indexOfLastItem = currentPage * establishmentsPerPage;
  const indexOfFirstItem = indexOfLastItem - establishmentsPerPage;
  const currentItems = hotels.slice(indexOfFirstItem, indexOfLastItem);
  const goToPage = (page) => setCurrentPage(page);
  const numberOfEstablishments = hotels.length;
  function openingModal(addHotel) {
    openModal(() => {
      return <Modal modalType={addHotel} />;
    });
  }
  return (
    <>
      {stateValue ? stateValue : null}
      <button onClick={() => openingModal(<AddHotel />)}>
        Create new item
      </button>
      <table className="dashboardList">
        <thead className="dashboardList__head">
          <tr>
            <th>Title</th>
            <th>Email</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody className="dashboardList__body">
          {currentItems.map((hotel) => {
            return (
              <tr key={hotel.id}>
                <td>
                  <button
                    className="dashboardList__editBtn"
                    onClick={() => {
                      openingModal(<EditHotel id={hotel.id} />);
                    }}
                  >
                    {hotel.name}
                  </button>
                </td>
                <td>{hotel.email}</td>
                <td>{hotel.price}</td>
                <td>{hotel.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        establishmentsPerPage={establishmentsPerPage}
        total={numberOfEstablishments}
        goToPage={goToPage}
        nextBtn={
          indexOfLastItem <= numberOfEstablishments
            ? currentPage + 1
            : currentPage
        }
        prevBtn={currentPage !== 1 ? currentPage - 1 : currentPage}
      />
    </>
  );
}

export default Hotels;
