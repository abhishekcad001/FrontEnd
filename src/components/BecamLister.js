import React from "react";
import AsLister from "./section-components/AsLister";
import Navbar from "./global-components/navbar-v2";
import Page_header from "./global-components/page-header";
import Footer from "./global-components/footer";
const BecamLister = () => {
  return (
    <>
      <Navbar />
      <Page_header headertitle="Become a Lister Here" subheader="Became Lister" />
      <AsLister />
      <Footer />
    </>
  );
};

export default BecamLister;
