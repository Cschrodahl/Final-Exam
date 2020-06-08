import React, { useState, useContext } from "react";
import { HotelContext } from "../../context/HotelContext";
import Pagination from "../pagination/Pagination";
import EditHotel from "./EditHotel";
import AddHotel from "./AddHotel";
import OpenModal from "../modal/OpenModal";

function Hotels() {
  const { hotelsGet } = useContext(HotelContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [establishmentsPerPage] = useState(6);

  const indexOfLastItem = currentPage * establishmentsPerPage;
  const indexOfFirstItem = indexOfLastItem - establishmentsPerPage;
  const currentItems = hotelsGet.slice(indexOfFirstItem, indexOfLastItem);
  const goToPage = (page) => setCurrentPage(page);
  const numberOfEstablishments = hotelsGet.length;
  return (
    <>
      <OpenModal buttonText="Create new" modalContent={<AddHotel />} />
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
          {currentItems.map((hotel, index) => {
            return (
              <tr key={index}>
                <td>
                  <OpenModal
                    buttonClassName="dashboardList__editBtn"
                    modalContent={<EditHotel id={hotel.id} />}
                    buttonText={hotel.name}
                  />
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
        itemsPerPage={establishmentsPerPage}
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
/**<TableList
        page={"hotels"}
        tableHead={["Title", "Email", "Price", "Description"]}
        tableContentList={currentItems}
        itemKeys={["name", "email", "price", "description"]}
      /> */
export default Hotels;
