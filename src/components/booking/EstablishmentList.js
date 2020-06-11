import React, { useState, useContext } from "react";
import Banner from "../banner/Banner";
import { HotelContext } from "../../context/HotelContext";
import EstablishmentItem from "./EstablishmentItem";
import EstablishmentFilter from "./EstablishmentFilter";
function EstablishmentList() {
  const { filteredHotels } = useContext(HotelContext);
  const [filterHotels, setFilterHotels] = useState(
    window.location.hash.split("#")[1]
      ? {
          category: decodeURI(window.location.hash.split("#")[1]),
          price: "",
          maxGuests: "",
        }
      : null
  );

  const restult = filteredHotels.filter((a) => {
    return (
      !filterHotels ||
      (a.price >= filterHotels.price &&
        a.maxGuests >= filterHotels.maxGuests) ||
      (a.price >= filterHotels.price && !filterHotels.maxGuests)
    );
  });

  return (
    <div>
      <Banner backgroundImageSize="introBannersubSites" />

      <section className="container">
        <EstablishmentFilter setFilterList={setFilterHotels} />
        <div className="container row bookingList">
          {restult.map((hotel, index) => {
            const {
              image,
              name,
              maxGuests,
              price,
              id,
              category,
              desctiption,
            } = hotel;
            const item = (
              <EstablishmentItem
                desctiption={desctiption}
                link={id}
                key={id}
                image={image}
                title={name}
                price={price}
                maxGuests={maxGuests}
                category={category}
              />
            );
            let printResult;
            if (filterHotels && filterHotels.category === "Show all")
              printResult = item;
            else if (filterHotels && filterHotels.category === category)
              printResult = item;
            else if (!filterHotels) printResult = item;
            return printResult;
          })}
        </div>
      </section>
    </div>
  );
}

export default EstablishmentList;
