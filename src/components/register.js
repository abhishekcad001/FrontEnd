import React from "react";
import PageHeader from "./global-components/page-header";
import Register from "./section-components/register";
import Footer from "./global-components/footer";
import Navbar from "./global-components/navbar-v2";

const RegisterV1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Account" subheader="Register" />
      <Register />
      <Footer />
    </div>
  );
};

export default RegisterV1;
