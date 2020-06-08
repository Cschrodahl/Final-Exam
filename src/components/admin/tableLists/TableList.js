import React from "react";
import OpenModal from "../../modal/OpenModal";
import EditHotel from "../EditHotel";
import EnquiriesList from "../enquiries/EnquiriesList";
import ViewMessage from "../contacts/ViewMessage";
function TableList({ tableHead, tableContentList, itemKeys, page }) {
  const contents = (id) => {
    if (page === "hotels") return <EditHotel id={id} />;
    if (page === "enquiries") return <EnquiriesList id={id} />;
    if (page === "contact") return <ViewMessage id={id} />;
  };
  return (
    <table className="dashboardList">
      <thead className="dashboardList__head">
        <tr>
          {tableHead.map((header, index) => {
            return <th key={index}>{header}</th>;
          })}
        </tr>
      </thead>
      <tbody className="dashboardList__body">
        {tableContentList.map((item, index) => {
          return (
            <tr key={item.id}>
              {itemKeys.map((test) => {
                return (
                  <td>
                    {test === "name" ? (
                      <OpenModal
                        buttonClassName="dashboardList__editBtn"
                        modalContent={contents(item.id)}
                        buttonText={item[test]}
                      />
                    ) : (
                      item[test]
                    )}
                  </td>
                );
              })}
            </tr>
          );
          /*return (
              <tr key={item.id}>
                <td>
                  <OpenModal
                    buttonClassName="dashboardList__editBtn"
                    modalContent={<EditHotel id={item.id} />}
                    buttonText={item.name}
                  ></OpenModal>
                </td>
                <td>{hotel.email}</td>
                <td>{hotel.price}</td>
                <td>{hotel.description}</td>
              </tr>
            );*/
        })}
      </tbody>
    </table>
  );
}

export default TableList;
