import React from "react";
import Search from "../search/Search";
function Banner({ backgroundImageSize, ifIntroText }) {
  //Checking if this is on Home page. If not. introtext doesnt show.
  return (
    <section className={`introBanner ${backgroundImageSize}`}>
      <div className="introBanner__content">
        {ifIntroText ? (
          <h1 className="introBanner__h1">
            Find your perfect holiday destination
          </h1>
        ) : null}
        <Search />
      </div>
    </section>
  );
}
export default Banner;
