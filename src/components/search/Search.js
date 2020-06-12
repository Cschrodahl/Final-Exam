import React, { useContext } from "react";
import SearchField from "./SearchField";
import { HotelContext } from "../../context/HotelContext";

function Search() {
  const { filterResult, filteredHotelsGlobal } = useContext(HotelContext);

  return (
    <SearchField handleSearch={filterResult} results={filteredHotelsGlobal} />
  );
}
export default Search;
