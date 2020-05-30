import React from "react";
import ContactForm from "./ContactForm";
import Banner from "../banner/Banner";
//import ContactInformation from "./ContactInformation";
function Contact() {
  return (
    <>
      <Banner backgroundImageSize="introBannersubSites" />
      <section className="container whiteSpace">
        <ContactForm />
      </section>
    </>
  );
}
//<ContactInformation />
export default Contact;
