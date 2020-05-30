import React from "react";
import Banner from "../banner/Banner";
import CategorySection from "./CategorySection";
import IconSection from "./IconSection";
function Home() {
  return (
    <>
      <Banner backgroundImageSize="introBannerHomePage" ifIntroText={true} />
      <CategorySection />
      <IconSection />
    </>
  );
}
export default Home;
