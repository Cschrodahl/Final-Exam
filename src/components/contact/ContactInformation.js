import React from "react";

function ContactInformation() {
  return (
    <div className="col3 col3__md col3__specifiedOrder contactInformationBox">
      <div className="contactInformationBox__box">
        <h2 className="contactInformationBox__headers">Contact us</h2>
        <a className="contactInformationBox__link" href="tel:+4792649103">
          <img
            className="contactInformationBox__icon"
            src={require("../../images/Icons/socialIcon-01_phone.png")}
            alt="Phone icon"
          />
          +47 92649103
        </a>
        <a
          className="contactInformationBox__link"
          href="mailto:support@holidaze.com"
        >
          <img
            className="contactInformationBox__icon"
            src={require("../../images/Icons/socialIcon-01_envelope.png")}
            alt="Envelope icon"
          />
          support@holidaze.com
        </a>
        <a className="contactInformationBox__link" href="!#">
          <img
            className="contactInformationBox__icon"
            alt="Marker icon"
            src={require("../../images/Icons/socialIcon-01_marker.png")}
          />
          bamseveier, 3451 Bergen
        </a>

        <div className="row">
          <a href="!#" className="col3 contactInformationBox__socialIcon">
            <img
              className="contactInformationBox__img"
              src={require("../../images/Icons/socialIcon-01_facebook.png")}
              alt="Facebook icon"
            />
          </a>
          <a href="!#" className="col3 contactInformationBox__socialIcon">
            <img
              className="contactInformationBox__img"
              src={require("../../images/Icons/socialIcon-01_instagram.png")}
              alt="Instagram icon"
            />
          </a>
          <a href="!#" className="col3 contactInformationBox__socialIcon">
            <img
              className="contactInformationBox__img"
              alt="Twitter icon"
              src={require("../../images/Icons/socialIcon-01_twitter.png")}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactInformation;
