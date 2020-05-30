import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, headers } from "../../constant/api";
import Banner from "../banner/Banner";
function EstablishmentDetails() {
  const [hotel, setHotel] = useState([]);
  const { id } = useParams();
  const url = BASE_URL + "establishments/" + id;
  const options = { headers };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        setHotel(json);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(hotel);
  const { name, image, maxGuest, price, selfCatering, description } = hotel;
  return (
    <>
      <Banner backgroundImageSize="introBannersubSites" />
      <section className="container row EstablishmentDetail">
        <div className="col2">
          <img
            className="EstablishmentDetail__image"
            alt={description}
            src={image}
          />
        </div>
        <div className="col2">
          <h3 className="EstablishmentDetail__h3">{name}</h3>
          <p className="EstablishmentDetail__text">
            <b>Description:</b>
            {description}
          </p>
          <p className="EstablishmentDetail__text">
            Maximum number of guests{maxGuest}
          </p>
          <p className="EstablishmentDetail__text">Price: {price}$</p>
          <p className="EstablishmentDetail__text">
            Self-catering: {selfCatering ? "Yes" : "No"}
          </p>
          <button className="EstablishmentDetail__btn">Button</button>
        </div>
      </section>
    </>
  );
}

export default EstablishmentDetails;
