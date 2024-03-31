import React from "react";
import Navbar from "./global-components/navbar-v2";
import Page_header from "./global-components/page-header";
import Footer from "./global-components/footer";
import AboutPage from "./section-components/aboutPage";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Page_header headertitle="Home" subheader="About us" />
      <AboutPage />
      <Footer />
    </>
  );
};

export default AboutUs;
