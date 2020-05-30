import React, { useState, useEffect } from "react";
import Banner from "../banner/Banner";
import { BASE_URL, headers } from "../../constant/api";
import EstablishmentItem from "./EstablishmentItem";
import EstablishmentFilter from "./EstablishmentFilter";
function EstablishmentList() {
  const [hotels, setHotels] = useState([]);
  const url = BASE_URL + "establishments";
  const options = { headers };
  const [filterEstablishment, setFilterEstablishment] = useState([]);
  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        setHotels(json);
      })
      .catch((error) => console.log(error));
  }, []);
  const onFilterChange = (e) => {
    const filterValue = e.target.value;

    const filterArray = hotels.filter(function (value) {
      const priceValue = value.price;
      if (priceValue >= filterValue) {
        return true;
      }
      return false;
    });
    setFilterEstablishment(filterArray);
    console.log(filterEstablishment, "rrrr");
  };
  console.log(filterEstablishment);
  return (
    <div>
      <Banner backgroundImageSize="introBannersubSites" />
      <EstablishmentFilter filterOnChange={onFilterChange} />
      <section className="container row bookingList">
        {filterEstablishment.map((hotel) => {
          const { image, name, maxGuests, price, id, desctiption } = hotel;
          return (
            <EstablishmentItem
              desctiption={desctiption}
              link={id}
              key={hotel.id}
              image={image}
              title={name}
              price={price}
              maxGuests={maxGuests}
            />
          );
        })}
      </section>
    </div>
  );
}

export default EstablishmentList;
