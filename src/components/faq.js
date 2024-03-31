import React from "react";
import Navbar from "./global-components/navbar-v2";
import Page_header from "./global-components/page-header";
import Footer_v1 from "./global-components/footer";
import FaqDetail from "./section-components/faqDetail";
import RelatedProperty from "./section-components/relatedProperty";

const Faq = () => {
  return (
    <>
      <Navbar />
      <Page_header headertitle="Frequently asked questions" subheader="FAQ"/>
      <FaqDetail />
      <RelatedProperty/>
      <Footer_v1 />
    </>
  );
};

export default Faq;
