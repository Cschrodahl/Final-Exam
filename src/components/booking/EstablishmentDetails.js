import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../banner/Banner";
import { BASE_URL, headers } from "../../constant/api";
import OpenModal from "../modal/OpenModal";
import EnquiryForm from "./bookingForm/EnquiryForm";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {
    name,
    image,
    maxGuests,
    price,
    selfCatering,
    description,
    lng,
    lat,
  } = hotel;
  const googleMapUrl =
    "https://maps.google.com/maps?q=" +
    lat +
    "," +
    lng +
    "&hl=en&;z=14&output=embed";
  return (
    <>
      <Banner backgroundImageSize="introBannersubSites" />
      <section className="container row row__direction--column establishmentDetail">
        <div className="col2">
          <img
            className="establishmentDetail__image"
            alt={description}
            src={image}
          />
        </div>
        <div className="col2 establishmentDetail__content">
          <h2 className="establishmentDetail__h2">{name}</h2>
          <p className="establishmentDetail__text">
            <b>Description: </b>
            <br /> {description}
          </p>
          <p className="establishmentDetail__text">
            <b> Maximum number of guests: </b>
            {maxGuests}
          </p>
          <p className="establishmentDetail__text">
            <b>Price: </b>
            {price}$
          </p>
          <p className="establishmentDetail__text">
            <b>Self-catering: </b> {selfCatering ? "Yes" : "No"}
          </p>
          <OpenModal
            buttonClassName="establishmentDetail__button"
            buttonText="Book"
            modalModified={"--enquiry"}
            modalContent={<EnquiryForm EstablishmentName={name} />}
          />
        </div>
      </section>
      <section className="establishmentDetail__section">
        <h2 className="establishmentDetail__locationHeader">Location</h2>
        {hotel ? (
          <iframe
            title="Establishment location"
            width="100%"
            height="300"
            src={googleMapUrl}
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        ) : null}
      </section>
    </>
  );
}

export default EstablishmentDetails;
