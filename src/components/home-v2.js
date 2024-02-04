import React from "react";
import Banner from "./section-components/banner-v2";
import Aboutv3 from "./section-components/about-v3";
import Features from "./section-components/features-v1";
import ApartmentV2 from "./section-components/apartment-v2";
import Neighbour from "./section-components/neighbour";
import Footer from "./global-components/footer";
import NavbarV2 from "./global-components/navbar-v2";

const Home = () => {
  return (
    <div>
      <NavbarV2 />
      <Banner />
      <Aboutv3 />
      <Features customClass="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---" />
      <ApartmentV2 />
      <Neighbour />
      <Footer />
    </div>
  );
};

export default Home;
