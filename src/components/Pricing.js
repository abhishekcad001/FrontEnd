import React from "react";
import PageHeader from "./global-components/page-header";
import Footer from "./global-components/footer";
import Navbar from "./global-components/navbar-v2";
import AllPricing from "./section-components/AllPricing";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <PageHeader headertitle="Pricing" subheader="Pricing" />
      <AllPricing />
      <Footer />
    </>
  );
};

export default Pricing;
