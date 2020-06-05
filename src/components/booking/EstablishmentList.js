import React, { useState, useContext } from "react";
import Banner from "../banner/Banner";
import { HotelContext } from "../../context/HotelContext";
import EstablishmentItem from "./EstablishmentItem";
import EstablishmentFilter from "./EstablishmentFilter";
function EstablishmentList() {
  const { filteredHotels } = useContext(HotelContext);
  const [filterHotels, setFilterHotels] = useState([]);
  return (
    <div>
      <Banner backgroundImageSize="introBannersubSites" />

      <section className="container">
        <EstablishmentFilter setFilterList={setFilterHotels} />
        <div className="container row bookingList">
          {filteredHotels.map((hotel, index) => {
            const { image, name, maxGuests, price, id, desctiption } = hotel;
            const item = (
              <EstablishmentItem
                desctiption={desctiption}
                link={id}
                key={id}
                image={image}
                title={name}
                price={price}
                maxGuests={maxGuests}
              />
            );
            return price >= filterHotels.price &&
              maxGuests >= filterHotels.maxGuests
              ? item
              : !filterHotels.price && !filterHotels.maxGuests
              ? item
              : null;
          })}
        </div>
      </section>
    </div>
  );
}

export default EstablishmentList;
