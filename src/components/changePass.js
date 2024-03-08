import React from 'react';
import PageHeader from './global-components/page-header';
import Footer from './global-components/footer';
import Navbar from './global-components/navbar-v2';
import { ChangePassword } from './section-components/changePassword';

const changePass = () => {
    return <>
        <Navbar />
        <PageHeader headertitle="Account" subheader="Change Password" />
        <ChangePassword />
        <Footer />
    </>
}

export default changePass

