import React from "react";
import PageHeader from "./global-components/page-header";
import Footer from "./global-components/footer";
import NavbarV2 from "./global-components/navbar-v2";

const Properties = () => {
  return (
    <>
      <NavbarV2 />
      <PageHeader headertitle="Home" subheader="Listings" />
      <h1>my all property</h1>
      <Footer />
    </>
  );
};

export default Properties;
