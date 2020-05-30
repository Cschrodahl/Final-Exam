import React from "react";

function Pagination({
  establishmentsPerPage,
  total,
  goToPage,
  prevBtn,
  nextBtn,
}) {
  const totalPages = total / establishmentsPerPage;
  const numberOfPages = [...Array(Math.ceil(totalPages)).keys()];
  return (
    <ul className="pagination">
      <li className="pagination__btn">
        <span onClick={() => goToPage(prevBtn)}>prev</span>
      </li>
      {numberOfPages.map((number) => {
        return (
          <li className="pagination__btn" key={number + 1}>
            <span onClick={() => goToPage(number + 1)}>{number + 1}</span>
          </li>
        );
      })}
      <li className="pagination__btn">
        <span onClick={() => goToPage(nextBtn)}>Next</span>
      </li>
    </ul>
  );
}
export default Pagination;
