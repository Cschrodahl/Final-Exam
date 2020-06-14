import React from "react";

function IconSection() {
  return (
    <section className="container iconSection">
      <h2 className="iconSection__h2">How it works</h2>
      <div className="row row__direction--column">
        <div className="col3 iconSection__box">
          <div className="iconSection__icon">
            <img
              src={require("../../images/Icons/home_icon-01.png")}
              alt="Background vector created by freepik - www.freepik.com"
            />
          </div>
          <h3 className="iconSection__h3">Find your accommodation</h3>
          <p className="iconSection__text">
            We'll help you find suitable accommodations that meet your
            standards. With a range of hotels throughout Bergen, we are sure to
            find something at your destination, either it's a hotel, B&B or a
            guesthouse.
          </p>
        </div>
        <div className="col3 iconSection__box">
          <div className="iconSection__icon">
            <img
              src={require("../../images/Icons/home_icon-02.png")}
              alt="Background vector created by freepik - www.freepik.com"
            />
          </div>
          <h3 className="iconSection__h3">Make a request</h3>
          <p className="iconSection__text">
            To be able to explore our beautiful city, please send us a request
            to book your accomodation.
          </p>
        </div>
        <div className="col3 iconSection__box">
          <div className="iconSection__icon">
            <img
              src={require("../../images/Icons/home_icon-03.png")}
              alt="Background vector created by freepik - www.freepik.com"
            />
          </div>
          <h3 className="iconSection__h3">Visit you new favorite city</h3>
          <p className="iconSection__text">
            Please take a look at what Bergen has to offer. One look and you'll
            be hooked. The beautiful nature, the food and the people. Will make
            Bergen your new favorite city.
          </p>
        </div>
      </div>
    </section>
  );
}
export default IconSection;
