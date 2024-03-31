import React from 'react'
import Navbar from "./global-components/navbar-v2";
import Page_header from "./global-components/page-header";
import Footer from "./global-components/footer";
import SaveDetail from './section-components/SaveDetail';
const Save = () => {
  return (
    <>
     <Navbar />
      <Page_header headertitle="My Saved" subheader="Save" />
      <SaveDetail/>
      <Footer />
    </>
  )
}

export default Save