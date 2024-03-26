import React from "react";
import Navbar from "./components/global-components/navbar-v2";
import Page_header from "./components/global-components/page-header";
import Footer from "./components/global-components/footer";
import AboutPage from "./components/section-components/aboutPage";

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
