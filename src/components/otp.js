import React from 'react';
import PageHeader from './global-components/page-header';
import Otp from './section-components/otp';
import Footer from './global-components/footer';
import Navbar from './global-components/navbar-v2';

const OtpU = () => {
    return <>
        <Navbar />
        <PageHeader headertitle="Account" subheader="Otp" />
        <Otp />
        <Footer />
    </>
}

export default OtpU

