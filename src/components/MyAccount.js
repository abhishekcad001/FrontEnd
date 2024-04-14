import React from "react";
import PageHeader from "./global-components/page-header";

import Footer from "./global-components/footer";
import Navbar from "./global-components/navbar-v2";
import Myaccountdetail from "./section-components/Myaccountdetail";

const MyAccount = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Account" subheader="Account" />
      <Myaccountdetail />
      <Footer />
    </div>
  );
};

export default MyAccount;
