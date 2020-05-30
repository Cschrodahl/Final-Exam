import React from "react";
import PropTypes from "prop-types";
function EstablishmentFilter({ filterOnChange }) {
  return (
    <form onChange={(e) => filterOnChange(e)}>
      <input type="number" name="price" />
    </form>
  );
}
EstablishmentFilter.propTypes = {
  filterOnChange: PropTypes.func.isRequired,
};
export default EstablishmentFilter;
