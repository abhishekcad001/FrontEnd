import React from "react";
import Navbar from "./global-components/navbar-v2";
import Page_header from "./global-components/page-header";
import Footer from "./global-components/footer";
import Property_All_Detail from "./section-components/property_All_Detail";
import RelatedProperty from "./section-components/relatedProperty";

const PropertyDetail = () => {
  return (
    <>
      <Navbar />
      <Page_header headertitle="Account" subheader="Property Detail" />
      <Property_All_Detail />
      <RelatedProperty/>
      <Footer />
    </>
  );
};

export default PropertyDetail;
