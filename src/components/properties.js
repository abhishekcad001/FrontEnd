import React from "react";
import PageHeader from "./global-components/page-header";
import Footer from "./global-components/footer";
import NavbarV2 from "./global-components/navbar-v2";
import AllProperties from "./section-components/allProperties";

const Properties = () => {
  return (
    <>
      <NavbarV2 />
      <PageHeader headertitle="Home" subheader="Listings" />
      <AllProperties />
      <Footer />
    </>
  );
};

export default Properties;
