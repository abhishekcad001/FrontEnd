import React from "react";
import PageHeader from "./global-components/page-header";
import Footer from "./global-components/footer";
import Navbar from "./global-components/navbar-v2";
import AllProperties from "./section-components/allProperties";

const Properties = () => {
  return (
    <>
      <Navbar />
      <PageHeader headertitle="Home" subheader="Listings" />
      <AllProperties />
      <Footer />
    </>
  );
};

export default Properties;
