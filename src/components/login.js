import React from 'react';
import PageHeader from './global-components/page-header';
import Login from './section-components/login';
import Footer from './global-components/footer';
import Navbar from './global-components/navbar-v2';

const LoginV1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Account" subheader="Login" />
        <Login />
        <Footer />
    </div>
}

export default LoginV1

