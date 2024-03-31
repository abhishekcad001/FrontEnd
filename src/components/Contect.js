import React from "react";
import Navbar from "./global-components/navbar-v2";
import Page_header from "./global-components/page-header";
import Footer from "./global-components/footer";
import ContectDetail from "./section-components/ContectDetail";
const Contect = () => {
  return (
    <>
      <Navbar />
      <Page_header headertitle="Contact Us" subheader="Contact" />
      <ContectDetail/>
      <Footer />
    </>
  );
};

export default Contect;
