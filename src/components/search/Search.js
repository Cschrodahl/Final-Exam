import React, { useState, useEffect } from "react";
import SearchField from "./SearchField";
import { BASE_URL, headers } from "../../constant/api";

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const url = BASE_URL + "establishments";
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        setSearchResult(json);
      })
      .catch((error) => console.log(error));
  }, [setSearchResult]);

  const filterResult = function (e) {
    const searchValue = e.target.value.toLowerCase();

    const filteredArray = searchResult.filter(function (char) {
      const lowerCaseName = char.name.toLowerCase();

      if (lowerCaseName.startsWith(searchValue) && searchValue !== "") {
        return true;
      }
      return false;
    });
    setFilteredHotels(filteredArray);
  };
  console.log(filteredHotels);
  return <SearchField handleSearch={filterResult} result={filteredHotels} />;
}
export default Search;
