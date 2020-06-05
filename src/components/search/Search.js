import React, { useContext } from "react";
import SearchField from "./SearchField";
//import { BASE_URL, headers } from "../../constant/api";
import { HotelContext } from "../../context/HotelContext";

function Search() {
  const { filterResult, filteredHotelsGlobal } = useContext(HotelContext);

  return (
    <SearchField handleSearch={filterResult} result={filteredHotelsGlobal} />
  );
}
export default Search;
