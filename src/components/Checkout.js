import React from 'react'
import Navbar from "./global-components/navbar-v2";
import Page_header from "./global-components/page-header";
import Footer from "./global-components/footer";
import CheckoutDetail from './section-components/CheckoutDetail';

const Checkout = () => {
  return (
    <>
      <Navbar />
      <Page_header headertitle="Checkout " subheader="CheckOut" />
      <CheckoutDetail />
      <Footer />
    </>
  )
}

export default Checkout


