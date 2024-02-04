import React from 'react';
import PageHeader from './global-components/page-header';
import Login from './section-components/login';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import NavbarV2 from './global-components/navbar-v2';

const LoginV1 = () => {
    return <div>
        <NavbarV2 />
        <PageHeader headertitle="Account" subheader="Login" />
        <Login />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default LoginV1

