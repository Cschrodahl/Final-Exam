import React, { useState, useEffect, createContext } from "react";
import { BASE_URL, headers } from "../constant/api";

const HotelContext = createContext();

function HotelContextProvider({ children }) {
  const [hotelsGet, setHotelsGet] = useState([""]);

  const url = BASE_URL + "establishments/";
  const options = { headers };
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [filteredHotelsGlobal, setFilteredHotelsGlobal] = useState([]);
  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        setHotelsGet(json);
        setFilteredHotels(json);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterResult = function (e) {
    const searchValue = e.target.value.toLowerCase();

    const filteredArray = hotelsGet.filter(function (char) {
      const lowerCaseName = char.name.toLowerCase();
      if (lowerCaseName.startsWith(searchValue)) {
        return true;
      }
      return false;
    });
    setFilteredHotels(filteredArray);
    if (searchValue !== "") {
      setFilteredHotelsGlobal(filteredArray);
    } else {
      setFilteredHotelsGlobal([]);
    }
  };

  return (
    <HotelContext.Provider
      value={{
        hotelsGet,
        filterResult,
        filteredHotels,
        filteredHotelsGlobal,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
}

export { HotelContext, HotelContextProvider };
