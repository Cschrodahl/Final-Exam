import React from "react";
import FooterNav from "./navigation/FooterNav";
function Footer() {
  return (
    <footer>
      <section className="container row row__direction--column footerContent">
        <div className="col4 footerContent__col">
          <h3 className="footerContent__headers">Menu</h3>
          <FooterNav
            destinationName={[
              { page: "Home", link: "/" },
              { page: "Booking", link: "/booking" },
              { page: "Contact", link: "/contact" },
            ]}
          />
        </div>
        <div className="col4 footerContent__col">
          <h3 className="footerContent__headers">Category</h3>
          <FooterNav
            destinationName={[
              { page: "Hotels", link: "/booking#Hotel" },
              { page: "B&B", link: "/booking#B&B" },
              { page: "Guesthouse", link: "/booking#Guest houses" },
            ]}
          />
        </div>
        <div className="col4 footerContent__col">
          <h3 className="footerContent__headers">Find us</h3>
          <a className="footerContent__link" href="tel:+4792649103">
            +47 92649103
          </a>
          <a className="footerContent__link" href="mailto:support@holidaze.com">
            support@holidaze.com
          </a>
          <a className="footerContent__link" href="!#">
            bamseveier, 3451 Bergen
          </a>
        </div>
        <div className="col4 footerContent__col">
          <h3 className="footerContent__headers">Newsletter</h3>
          <p className="footerContent__text">
            If you don”t want to miss our best deals. Subscribe now!
          </p>
          <input
            className="footerContent__input"
            type="email"
            placeholder="example@gmail.com"
          />
          <button className="footerContent__button">Subscribe</button>
        </div>
      </section>
      <div className="footerCopy">©2020 Made by Christian Schrodahl</div>
    </footer>
  );
}

export default Footer;
