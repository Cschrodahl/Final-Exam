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
          <h3 className="iconSection__h3">Find you accommodation</h3>
          <p className="iconSection__text">
            Lorem ipsum dolor sit amet, consectetuer ad. Lorem ipsum lore
            teuteer, psum lore teuteer
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
            Lorem ipsum dolor sit amet, consectetuer ad. Lorem ipsum lore
            teuteer, psum lore teuteer
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
            Lorem ipsum dolor sit amet, consectetuer ad. Lorem ipsum lore
            teuteer, psum lore teuteer
          </p>
        </div>
      </div>
    </section>
  );
}
export default IconSection;
