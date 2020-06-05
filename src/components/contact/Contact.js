import React from "react";
import ContactForm from "./ContactForm";
import Banner from "../banner/Banner";

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

export default Contact;
