import React from "react";
import PageHeader from "./global-components/page-header";
import Register from "./section-components/register";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import NavbarV2 from "./global-components/navbar-v2";

const RegisterV1 = () => {
  return (
    <div>
      <NavbarV2 />
      <PageHeader headertitle="Account" subheader="Register" />
      <Register />
      <Footer />
    </div>
  );
};

export default RegisterV1;
